import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        // Authentication fields
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        image: true,

        // Profile fields
        githubUsername: true,
        fullName: true,
        bio: true,
        twitterHandle: true,
        linkedinUrl: true,
        personalWebsite: true,

        // Role and preferences
        roles: true,
        techStacks: true,
        onboarded: true,


        // Activity relations with counts
        issuesCreated: {
          select: {
            _count: true
          }
        },
        issuesSolved: {
          select: {
            _count: true
          }
        },
        maintainedRepos: {
          select: {
            _count: true
          }
        },

        // Timestamps
        createdAt: true,
        updatedAt: true,
      },

    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("[USER_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}




export async function POST(req: Request) {
  console.log("Req", req);

  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse request body
    let data;
    try {
      data = await req.json();
      if (!data) {
        return NextResponse.json(
          { error: "Request payload cannot be null" },
          { status: 400 }
        );
      }
    } catch (e) {
      console.error("Invalid JSON body:", e);
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    // Validate techStacks and other fields
    const techStacks = Array.isArray(data.techStacks) ? data.techStacks : [];

    // Fetch current techStacks from the database
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        techStacks: {
          select: { name: true },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Find removed techStacks
    const existingTechStacks = user.techStacks.map((stack) => stack.name);
    const removedTechStacks = existingTechStacks.filter(
      (stack) => !techStacks.includes(stack)
    );

    // Start by removing the tech stacks that are no longer in the updated list
    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        techStacks: {
          disconnect: removedTechStacks.map((stack) => ({
            name: stack,
          })),
        },
      },
    });

    // Now connect or create the new techStacks
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        twitterHandle: data.twitterHandle || null,
        linkedinUrl: data.linkedinUrl || null,
        techStacks: {
          connectOrCreate: techStacks.map((stack: string) => ({
            where: { name: stack },
            create: { name: stack },
          })),
        },
      },
    });
    await prisma.techStack.deleteMany({
      where: {
        NOT: {
          users: {
            some: {}, // Check if there are still any associated users
          },
        },
      },
    });
    console.log("Updated user:", updatedUser);

    return NextResponse.json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    console.error("Onboarding error:", error);
    return NextResponse.json(
      { error: "Failed to save onboarding data" },
      { status: 500 }
    );
  }
}

