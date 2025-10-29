"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-140px)]">
      <Card className="w-full max-w-2xl text-center">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-primary">Welcome to Socio Gain</CardTitle>
          <CardDescription className="text-xl text-muted-foreground mt-2">
            The Global Engagement Hub
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg text-foreground">
            Influence companies, participate in polls, submit ideas, and collaborate cross-culturally.
          </p>
          <p className="text-md text-muted-foreground">
            This is your starting point. Explore the sidebar for navigation!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;