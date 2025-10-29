"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface AchievementCardProps {
  title: string;
  description: string;
  unlocked: boolean;
  icon?: React.ElementType;
  className?: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  description,
  unlocked,
  icon: Icon = Award,
  className,
}) => {
  return (
    <Card
      className={cn(
        "flex flex-col items-center text-center p-4",
        unlocked ? "border-green-500 shadow-md" : "border-gray-300 opacity-70",
        className,
      )}
    >
      <CardHeader className="pb-2">
        <Icon
          className={cn(
            "h-8 w-8",
            unlocked ? "text-green-600" : "text-gray-400",
          )}
        />
        <CardTitle className="text-lg font-semibold mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        {description}
        {unlocked && (
          <div className="flex items-center justify-center gap-1 text-green-600 mt-2">
            <CheckCircle className="h-4 w-4" /> Unlocked!
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AchievementCard;