"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  id: string;
  name: string;
  description: string;
  icon?: React.ElementType;
}

interface BadgesDisplayProps {
  badges: BadgeProps[];
  className?: string;
}

const BadgesDisplay: React.FC<BadgesDisplayProps> = ({ badges, className }) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" /> Badges
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {badges.length > 0 ? (
          badges.map((badge) => (
            <Badge key={badge.id} variant="secondary" className="px-3 py-1 text-sm">
              {badge.icon && <badge.icon className="h-4 w-4 mr-1" />}
              {badge.name}
            </Badge>
          ))
        ) : (
          <p className="text-muted-foreground text-sm">No badges earned yet.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default BadgesDisplay;