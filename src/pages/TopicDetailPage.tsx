"use client";

import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const TopicDetailPage = () => {
  const { id: communityId, topicId } = useParams<{ id: string; topicId: string }>();

  // Mock data for demonstration. In a real app, you'd fetch this from an API.
  const mockTopic = {
    id: topicId,
    title: "Zero Waste Living Tips",
    description: "Let's share our best tips and tricks for reducing waste in our daily lives. From composting to reusable products, what are your go-to strategies?",
    posts: 50,
    communityName: "Sustainable Living",
  };

  if (!mockTopic.id) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Topic Not Found</h1>
        <p className="text-muted-foreground">The discussion topic you are looking for does not exist.</p>
        <Button asChild className="mt-6">
          <Link to={`/communities/${communityId}`}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Community
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link to={`/communities/${communityId}`}>
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to {mockTopic.communityName}</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">{mockTopic.title}</h1>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Discussion Overview</CardTitle>
          <CardDescription>{mockTopic.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" /> {mockTopic.posts} Posts
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <div className="space-y-4">
        {/* Placeholder for comments section */}
        <Card>
          <CardContent className="p-4 text-muted-foreground">
            No comments yet. Be the first to share your thoughts!
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TopicDetailPage;