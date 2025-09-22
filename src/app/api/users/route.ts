import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt-ts";
import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().min(1, "User name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = signupSchema.parse(body);

    const existingUserEmail = await db.user.findUnique({
      where: { email },
    });

    if (existingUserEmail) {
      return NextResponse.json(
        { user: null, message: "User already exists with this email" },
        { status: 409 }
      );
    }

    const existingUser = await db.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      return NextResponse.json(
        { user: null, message: "User already exists with this username" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const { password: _password, ...userWithoutPassword } = newUser;

    return NextResponse.json(
      { user: userWithoutPassword, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: error.message || "Something went wrong!" },
      { status: 500 }
    );
  }
}
    