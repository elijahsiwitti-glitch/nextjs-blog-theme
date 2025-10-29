"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface StreaksDisplayProps {
  currentStreak: number;
  longestStreak: number;
  className?: string;
}

const StreaksDisplay: React.FC<StreaksDisplayProps> = ({
  currentStreak,
  longestStreak,
  className,
}) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500" /> Streaks
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
          <Flame className="h-8 w-8 text-orange-500 mb-2" />
          <p className="text-2xl font-bold">{currentStreak} days</p>
          <p className="text-sm text-muted-foreground">Current Streak</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
          <Clock className="h-8 w-8 text-blue-500 mb-2" />
          <p className="text-2xl font-bold">{longestStreak} days</p>
          <p className="text-sm text-muted-foreground">Longest Streak</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StreaksDisplay;