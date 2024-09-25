import { useState } from "react";
import { Button } from "@/components/ui/button";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import Hero from "./Hero";

function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      <Hero />
      <div className="flex w-full items-center justify-center lg:w-1/2 px-6 sm:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              {isSignUp ? "Create an account" : "Sign in to your account"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {isSignUp
                ? "Enter your email below to create your account"
                : "Enter your email below to sign in to your account"}
            </p>
          </div>
          {isSignUp ? <SignUpForm /> : <SignInForm />}
          <p className="px-8 text-center text-sm text-muted-foreground">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <Button
              variant="link"
              className="underline underline-offset-4 hover:text-primary"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
