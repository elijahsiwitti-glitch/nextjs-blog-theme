"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProfileCardProps {
  userName: string;
  userBio?: string;
  avatarUrl?: string;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  userName,
  userBio,
  avatarUrl,
  className,
}) => {
  return (
    <Card className={cn("relative p-6 pt-20 -mt-16 bg-card shadow-lg", className)}>
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <Avatar className="h-24 w-24 border-4 border-background shadow-md">
          <AvatarImage src={avatarUrl || "https://github.com/shadcn.png"} alt={userName} />
          <AvatarFallback>{userName.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
      <CardContent className="text-center mt-4">
        <h2 className="text-3xl font-bold text-foreground">{userName}</h2>
        {userBio && (
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            {userBio}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileCard;