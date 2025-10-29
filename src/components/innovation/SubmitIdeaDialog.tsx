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

interface SubmitIdeaDialogProps {
  children: React.ReactNode;
}

const SubmitIdeaDialog: React.FC<SubmitIdeaDialogProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here, e.g., send to an API
    console.log("Idea submitted!");
    setOpen(false); // Close dialog on submit
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <PlusCircle className="h-5 w-5" /> Submit New Idea
          </DialogTitle>
          <DialogDescription>
            Share your innovative idea with the community.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" placeholder="A catchy title for your idea" className="col-span-3" required />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="description" className="text-right pt-2">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Describe your idea in detail..."
              className="col-span-3 min-h-[100px]"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Input id="category" placeholder="e.g., Tech, Environment, Social" className="col-span-3" />
          </div>
          <Button type="submit" className="w-full mt-4">Submit Idea</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SubmitIdeaDialog;