"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  github?: string;
  twitter?: string;
  linkedin?: string;
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  github,
  twitter,
  linkedin,
  className,
}) => {
  const socialPlatforms = [
    { name: "GitHub", icon: Github, url: github },
    { name: "Twitter", icon: Twitter, url: twitter },
    { name: "LinkedIn", icon: Linkedin, url: linkedin },
  ];

  return (
    <div className={cn("flex justify-center gap-4 mt-4", className)}>
      {socialPlatforms.map((platform) =>
        platform.url ? (
          <Button key={platform.name} variant="outline" size="icon" asChild>
            <a href={platform.url} target="_blank" rel="noopener noreferrer">
              <platform.icon className="h-5 w-5" />
              <span className="sr-only">{platform.name}</span>
            </a>
          </Button>
        ) : null,
      )}
    </div>
  );
};

export default SocialLinks;