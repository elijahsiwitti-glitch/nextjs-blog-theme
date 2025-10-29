"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-140px)]">
      <Card className="w-full max-w-2xl text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">User Profile</CardTitle>
          <CardDescription>Manage your profile, badges, and social links.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            This page will feature customizable profiles, avatars, banners, bios, social links, badges, and ranks.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;