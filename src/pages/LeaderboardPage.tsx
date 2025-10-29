"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LeaderboardTable from "@/components/leaderboard/LeaderboardTable";
import AchievementCard from "@/components/leaderboard/AchievementCard";
import StreaksDisplay from "@/components/leaderboard/StreaksDisplay";
import { Lightbulb, Users, Star } from "lucide-react";

const LeaderboardPage = () => {
  // Mock data for demonstration
  const leaderboardData = [
    { rank: 1, name: "Alice Smith", points: 5200, avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=AS" },
    { rank: 2, name: "Bob Johnson", points: 4800, avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=BJ" },
    { rank: 3, name: "Charlie Brown", points: 4100, avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=CB" },
    { rank: 4, name: "Diana Prince", points: 3900, avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=DP" },
    { rank: 5, name: "Eve Adams", points: 3500, avatarUrl: "https://api.dicebear.com/7.x/initials/svg?seed=EA" },
  ];

  const achievements = [
    {
      title: "First Idea",
      description: "Submitted your very first idea to the Innovation Hub.",
      unlocked: true,
      icon: Lightbulb,
    },
    {
      title: "Community Builder",
      description: "Joined 3 or more communities.",
      unlocked: true,
      icon: Users,
    },
    {
      title: "Top Voter",
      description: "Cast 50 votes on ideas.",
      unlocked: false,
      icon: Star,
    },
  ];

  const userStreaks = {
    current: 7,
    longest: 14,
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Global Leaderboard</h1>
        <p className="text-lg text-muted-foreground">
          See top contributors, track your progress, and earn achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <LeaderboardTable title="Top Innovators" data={leaderboardData} />
        </div>
        <div className="lg:col-span-1 flex flex-col gap-8">
          <StreaksDisplay
            currentStreak={userStreaks.current}
            longestStreak={userStreaks.longest}
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Your Achievements</CardTitle>
          <CardDescription>Milestones you've reached on Socio Gain.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default LeaderboardPage;