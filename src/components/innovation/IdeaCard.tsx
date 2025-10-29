"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface IdeaCardProps {
  id: string;
  title: string;
  description: string;
  votes: number;
  comments: number;
  className?: string;
}

const IdeaCard: React.FC<IdeaCardProps> = ({
  id,
  title,
  description,
  votes,
  comments,
  className,
}) => {
  return (
    <Card className={cn("flex flex-col", className)}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Placeholder for more detailed content or media */}
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4 border-t">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <ThumbsUp className="h-4 w-4" /> {votes}
            <span className="sr-only">votes</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" /> {comments}
            <span className="sr-only">comments</span>
          </Button>
        </div>
        <Button size="sm">View Idea</Button>
      </CardFooter>
    </Card>
  );
};

export default IdeaCard;