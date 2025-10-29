"use client";

import ProfileBanner from "@/components/profile/ProfileBanner";
import ProfileCard from "@/components/profile/ProfileCard";
import SocialLinks from "@/components/profile/SocialLinks";
import BadgesDisplay from "@/components/profile/BadgesDisplay";
import RankDisplay from "@/components/profile/RankDisplay";

const ProfilePage = () => {
  // Mock data for demonstration
  const currentUser = {
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
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative bg-background rounded-lg shadow-xl overflow-hidden">
        <ProfileBanner imageUrl={currentUser.banner} />
        <div className="p-6">
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