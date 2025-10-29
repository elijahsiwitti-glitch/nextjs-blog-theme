"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LeaderboardPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-140px)]">
      <Card className="w-full max-w-2xl text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Global Leaderboard</CardTitle>
          <CardDescription>See top contributors and track your progress.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            This page will display gamified progression, streaks, achievements, and global leaderboards.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeaderboardPage;