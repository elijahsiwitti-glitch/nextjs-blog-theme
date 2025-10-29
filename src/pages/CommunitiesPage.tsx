"use client";

import CommunityCard from "@/components/communities/CommunityCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CommunitiesPage = () => {
  // Mock data for demonstration
  const communities = [
    {
      id: "comm-1",
      name: "Sustainable Living",
      description: "Discuss eco-friendly practices, renewable energy, and sustainable consumption.",
      members: 1200,
      discussions: 350,
      link: "/communities/sustainable-living",
    },
    {
      id: "comm-2",
      name: "Future Tech Innovators",
      description: "A hub for discussing emerging technologies, AI, blockchain, and future trends.",
      members: 2500,
      discussions: 800,
      link: "/communities/future-tech",
    },
    {
      id: "comm-3",
      name: "Global Cuisine Enthusiasts",
      description: "Share recipes, cooking tips, and explore culinary traditions from around the world.",
      members: 800,
      discussions: 200,
      link: "/communities/global-cuisine",
    },
    {
      id: "comm-4",
      name: "Digital Art & Design",
      description: "Connect with digital artists, share portfolios, and discuss design principles.",
      members: 1500,
      discussions: 450,
      link: "/communities/digital-art",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Communities & Chat</h1>
      </div>

      <p className="text-lg text-muted-foreground mb-8">
        Engage in real-time discussions, connect with others, and explore various interest groups.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map((community) => (
          <CommunityCard key={community.id} {...community} />
        ))}
      </div>
    </div>
  );
};

export default CommunitiesPage;