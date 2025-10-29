"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Crown } from "lucide-react";
import { cn } from "@/lib/utils";

interface RankDisplayProps {
  rank: string;
  points: number;
  className?: string;
}

const RankDisplay: React.FC<RankDisplayProps> = ({ rank, points, className }) => {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Crown className="h-5 w-5 text-yellow-500" /> Rank
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-4xl font-bold text-primary">{rank}</p>
        <p className="text-lg text-muted-foreground mt-1">{points} Points</p>
      </CardContent>
    </Card>
  );
};

export default RankDisplay;