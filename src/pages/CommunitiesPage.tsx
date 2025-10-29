"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CommunitiesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-140px)]">
      <Card className="w-full max-w-2xl text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Communities & Chat</CardTitle>
          <CardDescription>Engage in real-time discussions and connect with others.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            This section will host free full-featured chat rooms and communities for real-time engagement.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunitiesPage;