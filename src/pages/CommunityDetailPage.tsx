"use client";

import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import TopicCard from "@/components/communities/TopicCard"; // Import the new TopicCard

const CommunityDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data for demonstration. In a real app, you'd fetch this from an API.
  const mockCommunity = {
    id: id,
    name: "Sustainable Living",
    description: "This community is dedicated to discussing and promoting eco-friendly practices, renewable energy solutions, and sustainable consumption habits. Join us to share tips, ask questions, and connect with like-minded individuals committed to a greener planet.",
    members: 1200,
    discussions: 350,
    topics: [
      { id: "t1", title: "Zero Waste Living Tips", posts: 50 },
      { id: "t2", title: "DIY Renewable Energy Projects", posts: 30 },
      { id: "t3", title: "Sustainable Fashion Discussion", posts: 25 },
    ],
  };

  if (!mockCommunity.id) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Community Not Found</h1>
        <p className="text-muted-foreground">The community you are looking for does not exist.</p>
        <Button asChild className="mt-6">
          <Link to="/communities">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Communities
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link to="/communities">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to Communities</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">{mockCommunity.name}</h1>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About This Community</CardTitle>
          <CardDescription>{mockCommunity.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" /> {mockCommunity.members} Members
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" /> {mockCommunity.discussions} Discussions
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Discussions</h2>
      <div className="space-y-4">
        {mockCommunity.topics.length > 0 ? (
          mockCommunity.topics.map((topic) => (
            <TopicCard
              key={topic.id}
              communityId={mockCommunity.id!}
              topicId={topic.id}
              title={topic.title}
              posts={topic.posts}
            />
          ))
        ) : (
          <p className="text-muted-foreground">No discussions yet. Be the first to start one!</p>
        )}
      </div>
    </div>
  );
};

export default CommunityDetailPage;