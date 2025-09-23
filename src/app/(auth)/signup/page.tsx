"use client";

import { signupSchema, SignupSchemaType } from "../../(Schemas)/signupschema";
import { Button } from "@/app/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link"; 


export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupSchemaType) => {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          username: data.username, // top-level, not inside "attributes"
        }),
      });

       const result = await res.json(); 
       console.log("Signup response:", res.status, result);

      if (!res.ok) {
        alert(result?.error?.message || "Signup failed");
        return;
      }

      alert("Signup successful!");
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="bg-neutral-950">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-neutral-900 border-4 h-1/2 rounded-2xl"
      >
        <div className="text-center p-4">
          <h1 className="font-bold text-4xl">SignUp Form</h1>
        </div>

        {/* Username */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Username"
            {...register("username")}
            className="bg-neutral-800 p-1 rounded-xl w-full"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Email address"
            {...register("email")}
            className="bg-neutral-800 p-1 rounded-xl w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="p-4">
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="bg-neutral-800 p-1 rounded-xl w-full"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="p-4 flex justify-between items-center">
          <Button variant="secondary" type="submit" className="cursor-pointer">
            Signup
          </Button>

          <p className="text-sm text-gray-400">
            Already a user?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
