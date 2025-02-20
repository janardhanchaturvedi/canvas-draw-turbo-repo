"use client";
import React, { useState } from "react";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { AuthLayout } from "./layout";
import { Input } from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import { Text } from "@repo/ui/typography";

export function SignUp({ isLogin = false }: { isLogin?: boolean }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <AuthLayout title="Create your account">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <Input
              label="Full Name"
              type="text"
              id="name"
              placeholder="John Doe"
              required
              className="pl-10"
            />
            <User className="absolute left-3 top-[40px] h-5 w-5 text-gray-400" />
          </div>

          <div className="relative">
            <Input
              label="Email address"
              type="email"
              id="email"
              placeholder="you@example.com"
              required
              className="pl-10"
            />
            <Mail className="absolute left-3 top-[40px] h-5 w-5 text-gray-400" />
          </div>

          <div className="relative">
            <Input
              label="Password"
              type="password"
              id="password"
              placeholder="••••••••"
              required
              className="pl-10"
            />
            <Lock className="absolute left-3 top-[40px] h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div >
          <Button type="submit" fullWidth disabled={loading}>
            {loading ? (
              "Creating account..."
            ) : (
              <div className="flex items-center justify-center">
                Create Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            )}
          </Button>
        </div>

        <div className="text-center">
          <Text>
            Already have an account?{" "}
            <a href="/login" className="text-purple-400 hover:text-purple-300">
              Sign in
            </a>
          </Text>
        </div>
      </form>
    </AuthLayout>
  );
}
