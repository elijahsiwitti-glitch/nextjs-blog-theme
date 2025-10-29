import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { MainLayout } from "@/components/layout/MainLayout";
import IndexPage from "./pages/Index";
import ProfilePage from "./pages/ProfilePage";
import InnovationPage from "./pages/InnovationPage";
import CommunitiesPage from "./pages/CommunitiesPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import CommunityDetailPage from "./pages/CommunityDetailPage";
import SettingsPage from "./pages/SettingsPage";
import TopicDetailPage from "./pages/TopicDetailPage"; // Import the new TopicDetailPage
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<IndexPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="innovation" element={<InnovationPage />} />
              <Route path="communities" element={<CommunitiesPage />} />
              <Route path="communities/:id" element={<CommunityDetailPage />} />
              <Route path="communities/:id/topics/:topicId" element={<TopicDetailPage />} /> {/* Add the new route for TopicDetailPage */}
              <Route path="leaderboard" element={<LeaderboardPage />} />
              <Route path="settings" element={<SettingsPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;