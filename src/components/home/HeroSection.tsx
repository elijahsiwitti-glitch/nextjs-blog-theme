"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  ctaText,
  ctaLink,
  backgroundImage = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}) => {
  return (
    <div
      className="relative h-[500px] w-full rounded-lg overflow-hidden bg-cover bg-center flex items-center justify-center p-6 shadow-xl"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <Card className="relative z-10 text-center bg-card/80 backdrop-blur-md p-8 max-w-3xl border-none shadow-2xl">
        <h1 className="text-5xl font-extrabold text-primary-foreground drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground drop-shadow-md">
          {description}
        </p>
        <Button asChild className="mt-8 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <Link to={ctaLink}>
            {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </Card>
    </div>
  );
};

export default HeroSection;