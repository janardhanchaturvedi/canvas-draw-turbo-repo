"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { AuthLayout } from "./layout";
import { Input } from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import { Text } from "@repo/ui/typography";

// Define the Zod schema
const signUpSchema = z.object({
  name: z.string().min(2, "Full Name must be at least 2 characters long").optional(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

// Type for the form data
type SignUpFormData = z.infer<typeof signUpSchema>;

export function SignUp({ isLogin = false }: { isLogin?: boolean }) {
  const [loading, setLoading] = useState(false);

  // Initialize react-hook-form with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
    setLoading(true);
    // Simulate API call
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <AuthLayout
      title={isLogin ? "Login with your credentials" : "Create your account"}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <Input
                {...register("name")}
                label="Full Name"
                type="text"
                id="name"
                placeholder="John Doe"
                className="pl-10"
              />
              <User className="absolute left-3 top-[40px] h-5 w-5 text-gray-400" />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
          )}

          <div className="relative">
            <Input
              {...register("email")}
              label="Email address"
              type="email"
              id="email"
              placeholder="you@example.com"
              className="pl-10"
            />
            <Mail className="absolute left-3 top-[40px] h-5 w-5 text-gray-400" />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <Input
              {...register("password")}
              label="Password"
              type="password"
              id="password"
              placeholder="••••••••"
              className="pl-10"
            />
            <Lock className="absolute left-3 top-[40px] h-5 w-5 text-gray-400" />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
        </div>

        <div>
          <Button type="submit" fullWidth disabled={loading}>
            {loading ? (
              <>{isLogin ? "Logging in..." : "Creating account..."}</>
            ) : (
              <div className="flex items-center justify-center">
                {isLogin ? "Login" : "Create Account"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            )}
          </Button>
        </div>

        <div className="text-center">
          <Text>
            {isLogin ? "Don't have an account" : "Already have an account?"}{" "}
            <a
              href={isLogin ? "/signup" : "/login"}
              className="text-purple-400 hover:text-purple-300"
            >
              {isLogin ? "Sign Up" : "Sign in"}
            </a>
          </Text>
        </div>
      </form>
    </AuthLayout>
  );
}
