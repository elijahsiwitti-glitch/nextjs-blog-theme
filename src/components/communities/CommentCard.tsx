"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface CommentCardProps {
  author: string;
  avatarUrl?: string;
  content: string;
  timestamp: string;
  className?: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
  author,
  avatarUrl,
  content,
  timestamp,
  className,
}) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardContent className="p-4 flex items-start gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={avatarUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${author}`} alt={author} />
          <AvatarFallback>{author.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm">
            <p className="font-semibold text-foreground">{author}</p>
            <span className="text-muted-foreground">•</span>
            <p className="text-muted-foreground">{timestamp}</p>
          </div>
          <p className="mt-1 text-foreground">{content}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommentCard;