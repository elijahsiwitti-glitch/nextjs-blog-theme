"use client";

import HeroSection from "@/components/home/HeroSection";
import FeaturedContentCarousel from "@/components/home/FeaturedContentCarousel";

const IndexPage = () => {
  const featuredCampaigns = [
    {
      id: "1",
      title: "Future of Urban Mobility",
      description: "Vote on innovative ideas for sustainable city transportation.",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/innovation",
    },
    {
      id: "2",
      title: "Global Climate Challenge",
      description: "Join discussions and submit solutions for climate change.",
      imageUrl: "https://images.unsplash.com/photo-1501854140801-50d00698b720?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/communities",
    },
    {
      id: "3",
      title: "Next-Gen Tech Gadgets",
      description: "Provide feedback on upcoming consumer electronics.",
      imageUrl: "https://images.unsplash.com/photo-1526738549149-8e07fa90117e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/innovation",
    },
    {
      id: "4",
      title: "Cultural Exchange Program",
      description: "Connect with users from diverse backgrounds.",
      imageUrl: "https://images.unsplash.com/photo-1518057902787-527477770115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/communities",
    },
  ];

  return (
    <div className="space-y-8">
      <HeroSection
        title="Shape the Future, Together"
        description="Influence companies, participate in polls, submit ideas, and collaborate cross-culturally."
        ctaText="Explore Innovations"
        ctaLink="/innovation"
      />

      <FeaturedContentCarousel
        title="Featured Campaigns & Challenges"
        items={featuredCampaigns}
      />

      {/* You can add more sections here later */}
    </div>
  );
};

export default IndexPage;