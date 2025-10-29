"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import IdeaCard from "@/components/innovation/IdeaCard";
import SubmitIdeaDialog from "@/components/innovation/SubmitIdeaDialog"; // Import the new dialog

const InnovationPage = () => {
  // Mock data for demonstration
  const innovationIdeas = [
    {
      id: "idea-1",
      title: "AI-Powered Language Learning Buddy",
      description: "An intelligent AI companion that helps users practice new languages through natural conversations and personalized feedback.",
      votes: 150,
      comments: 25,
    },
    {
      id: "idea-2",
      title: "Sustainable Urban Farming Initiative",
      description: "A community-driven project to implement vertical farms in urban areas, providing fresh produce and reducing carbon footprint.",
      votes: 230,
      comments: 40,
    },
    {
      id: "idea-3",
      title: "Decentralized Global Freelance Marketplace",
      description: "A blockchain-based platform connecting freelancers with clients worldwide, ensuring fair payments and transparent contracts.",
      votes: 90,
      comments: 18,
    },
    {
      id: "idea-4",
      title: "Interactive VR Museum Experience",
      description: "A virtual reality application allowing users to explore historical museums and cultural sites from anywhere in the world.",
      votes: 180,
      comments: 30,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Innovation Hub</h1>
        <SubmitIdeaDialog>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Submit Idea
          </Button>
        </SubmitIdeaDialog>
      </div>

      <p className="text-lg text-muted-foreground mb-8">
        Vote on company ideas, product features, and polls with weighted voting. Companies post projects and gather multilingual, global feedback.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {innovationIdeas.map((idea) => (
          <IdeaCard key={idea.id} {...idea} />
        ))}
      </div>
    </div>
  );
};

export default InnovationPage;