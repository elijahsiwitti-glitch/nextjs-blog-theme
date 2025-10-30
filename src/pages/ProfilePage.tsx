"use client";

import React from "react";
import ProfileBanner from "@/components/profile/ProfileBanner";
import ProfileCard from "@/components/profile/ProfileCard";
import SocialLinks from "@/components/profile/SocialLinks";
import BadgesDisplay from "@/components/profile/BadgesDisplay";
import RankDisplay from "@/components/profile/RankDisplay";
import EditProfileDialog from "@/components/profile/EditProfileDialog"; // Import the new dialog
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

const ProfilePage = () => {
  // Mock data for demonstration, now managed in state
  const [currentUser, setCurrentUser] = React.useState({
    name: "Socio Gain User",
    bio: "Passionate about global engagement and innovation. Always looking for new ideas to support!",
    avatar: "https://avatars.githubusercontent.com/u/124599?v=4", // Example avatar
    banner: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example banner
    social: {
      github: "https://github.com/shadcn",
      twitter: "https://twitter.com/shadcn",
      linkedin: "",
    },
    badges: [
      { id: "1", name: "Early Adopter", description: "Joined Socio Gain early" },
      { id: "2", name: "Idea Contributor", description: "Submitted a great idea" },
    ],
    rank: "Innovator Elite",
    points: 1250,
  });

  const handleProfileSave = (data: { userName: string; userBio?: string }) => {
    setCurrentUser((prevUser) => ({
      ...prevUser,
      name: data.userName,
      bio: data.userBio,
    }));
    // In a real app, you'd send this data to an API
    console.log("Profile updated:", data);
  };

  return (
    <div className="container mx-auto"> {/* Removed px-4 py-8 to use container's default padding */}
      <div className="relative bg-background rounded-lg shadow-xl overflow-hidden">
        <ProfileBanner imageUrl={currentUser.banner} />
        <div className="p-6">
          <div className="flex justify-end mb-4">
            <EditProfileDialog
              initialData={{ name: currentUser.name, bio: currentUser.bio }}
              onSave={handleProfileSave}
            >
              <Button variant="outline" size="sm">
                <Pencil className="mr-2 h-4 w-4" /> Edit Profile
              </Button>
            </EditProfileDialog>
          </div>
          <ProfileCard
            userName={currentUser.name}
            userBio={currentUser.bio}
            avatarUrl={currentUser.avatar}
          />
          <SocialLinks
            github={currentUser.social.github}
            twitter={currentUser.social.twitter}
            linkedin={currentUser.social.linkedin}
            className="mt-8"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <BadgesDisplay badges={currentUser.badges} />
            <RankDisplay rank={currentUser.rank} points={currentUser.points} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;