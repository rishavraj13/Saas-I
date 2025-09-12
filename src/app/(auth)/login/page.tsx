"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { GithubIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/app/components/ui/input";
import { CardFooter } from "@/app/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useTransition } from "react";
import { github } from "better-auth/social-providers";
import { LoaderThree } from "@/components/ui/loader";
import { log } from "console";

export default function LoginPage() {
  const [GitHubPending, GitHubTransition] = useTransition();
  async function SigninwithGithub() {
    GitHubTransition(async () => {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",

        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed in with GitHub");
            console.log("hi success");
            
          },

          onError: () => {
            toast.error("Error from the Server");
          },
        },
      });
    });
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Welcome Back!</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button
            disabled={GitHubPending}
            onClick={SigninwithGithub}
            variant="outline"
            className="flex gap-2 items-center justify-center w-full"
          >
            {GitHubPending ? (
              <>
                <LoaderThree />
              </>
            ) : (
              <>
                <GithubIcon className="size-4" />
                Login with GitHub
              </>
            )}
          </Button>

          <div className=" relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border mt-4">
            <span className="bg-card text-muted-foreground relative z-10 px-2">
              Or continue with
            </span>
          </div>

          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label>Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label>Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2 ">
          <Button type="submit" className="w-full cursor-pointer">
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
