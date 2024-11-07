"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import { TECH_STACKS } from "@/lib/constants";

const formSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  role: z.array(z.enum(["DEVELOPER", "MAINTAINER"])),
  twitterHandle: z.string().optional(),
  linkedinUrl: z.string().url().optional(),
  techStacks: z
    .array(z.string())
    .min(1, "Please select at least one tech stack"),
});

export default function OnboardingForm() {
  const { data: session, update: updateSession, status } = useSession();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: session?.user?.name || "",
      email: session?.user?.email || "",
      role: [], // This is fine as an empty array initially
      twitterHandle: "",
      linkedinUrl: "",
      techStacks: [],
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if not authenticated
  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);

      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to save onboarding data");
      }

      const data = await response.json();

      // Update the session with new user data
      await updateSession();

      toast({
        title: "Success!",
        description: "Your onboarding has been completed successfully.",
      });

      // Force a hard navigation to the role-specific page
      window.location.href =
        data.role === "DEVELOPER" ? "/developer" : "/maintainer";
    } catch (error) {
      console.error("Onboarding failed:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to complete onboarding",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Personal Information */}
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="johndoe@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Role</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange([value])}
                    defaultValue={field.value?.[0]}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DEVELOPER">Developer</SelectItem>
                      <SelectItem value="MAINTAINER">Maintainer</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="twitterHandle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Twitter Handle (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="@johndoe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="linkedinUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LinkedIn URL (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://linkedin.com/in/johndoe"
                    type="url"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Tech Stacks */}
        <FormField
          control={form.control}
          name="techStacks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Tech Stacks</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value) =>
                    field.onChange([...field.value, value])
                  }
                  value={field.value?.[0] || ""}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select tech stacks" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(TECH_STACKS).map(([category, stacks]) => (
                      <SelectGroup key={category}>
                        <SelectLabel>{category}</SelectLabel>
                        {stacks.map((stack) => (
                          <SelectItem
                            key={stack}
                            value={stack}
                            disabled={field.value.includes(stack)}
                          >
                            {stack}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              {field.value?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {field.value.map((stack) => (
                    <Button
                      key={stack}
                      variant="secondary"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        field.onChange(field.value.filter((s) => s !== stack));
                      }}
                    >
                      {stack} ×
                    </Button>
                  ))}
                </div>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Complete Onboarding"}
        </Button>
      </form>
    </Form>
  );
}
