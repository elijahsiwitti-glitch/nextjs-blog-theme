"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const InnovationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-140px)]">
      <Card className="w-full max-w-2xl text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Innovation Hub</CardTitle>
          <CardDescription>Vote on ideas and provide feedback to companies.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            Here, users will vote on company ideas, product features, and polls with weighted voting. Companies will post projects and gather multilingual feedback.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InnovationPage;