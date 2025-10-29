"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface CommunityCardProps {
  id: string;
  name: string;
  description: string;
  members: number;
  discussions: number;
  link: string; // This link will now be dynamic
  className?: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({
  id,
  name,
  description,
  members,
  discussions,
  link,
  className,
}) => {
  return (
    <Card className={cn("flex flex-col", className)}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{name}</CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" /> {members} Members
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" /> {discussions} Discussions
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-4 border-t">
        <Button asChild className="w-full">
          <Link to={`/communities/${id}`}> {/* Updated link to use the community ID */}
            View Community
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CommunityCard;