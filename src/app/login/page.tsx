"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Package2, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) return;
    setIsLoading(true);
    setTimeout(() => {
      setOtpSent(true);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login success
    setTimeout(() => {
      alert("Logged in successfully! (mock)");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="container flex min-h-[80vh] items-center justify-center px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex items-center justify-center">
             <Package2 className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">
            {otpSent ? "Enter OTP" : "Login or Sign Up"}
          </CardTitle>
          <CardDescription>
            {otpSent
              ? `We've sent a one-time password to ${phone}`
              : "Enter your phone number to get started"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!otpSent ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="e.g., (123) 456-7890"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send OTP
              </Button>
            </form>
          ) : (
             <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp">One-Time Password</Label>
                <Input id="otp" type="text" inputMode="numeric" pattern="\d{6}" placeholder="6-digit code" required />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                 {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Login
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex-col text-center text-xs text-muted-foreground">
          <p>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
        </CardFooter>
      </Card>
    </div>
  );
}
