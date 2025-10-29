"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PlusCircle } from "lucide-react";
import { showSuccess } from "@/utils/toast"; // Import showSuccess

interface CreateCommunityDialogProps {
  children: React.ReactNode;
}

const CreateCommunityDialog: React.FC<CreateCommunityDialogProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here, e.g., send to an API
    console.log("Community created!");
    showSuccess("New community created successfully!"); // Show success toast
    setOpen(false); // Close dialog on submit
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <PlusCircle className="h-5 w-5" /> Create New Community
          </DialogTitle>
          <DialogDescription>
            Start a new community around a topic you're passionate about.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="e.g., Sustainable Living" className="col-span-3" required />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="description" className="text-right pt-2">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Describe what your community is about..."
              className="col-span-3 min-h-[100px]"
              required
            />
          </div>
          <Button type="submit" className="w-full mt-4">Create Community</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCommunityDialog;