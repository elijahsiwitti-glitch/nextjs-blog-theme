"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ProfileBannerProps {
  imageUrl?: string;
  altText?: string;
  className?: string;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({
  imageUrl,
  altText = "Profile Banner",
  className,
}) => {
  return (
    <div
      className={cn(
        "relative h-48 w-full overflow-hidden rounded-t-lg bg-gradient-to-r from-blue-500 to-purple-600",
        className,
      )}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={altText}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full items-center justify-center text-2xl font-bold text-white">
          Socio Gain
        </div>
      )}
    </div>
  );
};

export default ProfileBanner;