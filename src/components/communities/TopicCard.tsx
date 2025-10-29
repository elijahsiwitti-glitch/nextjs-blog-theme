"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface TopicCardProps {
  communityId: string;
  topicId: string;
  title: string;
  posts: number;
  className?: string;
}

const TopicCard: React.FC<TopicCardProps> = ({
  communityId,
  topicId,
  title,
  posts,
  className,
}) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardContent className="p-4 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <MessageSquare className="h-4 w-4" /> {posts} posts
          </p>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link to={`/communities/${communityId}/topics/${topicId}`}>View Topic</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default TopicCard;