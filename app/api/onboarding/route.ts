import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse request body
    let data;
    try {
      data = await req.json();
    } catch (e) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!data.fullName || !data.email || !data.role || !data.techStacks) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Update user in database
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        fullName: data.fullName,
        email: data.email,
        roles: [data.role[0]], // Convert single role to array
        twitterHandle: data.twitterHandle || null,
        linkedinUrl: data.linkedinUrl || null,
        techStacks: {
          connectOrCreate: data.techStacks.map((stack: string) => ({
            where: { name: stack },
            create: { name: stack },
          })),
        },
        onboarded: true,
      },
    });

    return NextResponse.json({
      success: true,
      role: data.role[0], // Send back the selected role
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
