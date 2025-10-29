"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { showSuccess } from "@/utils/toast";
import { cn } from "@/lib/utils";

interface CommentFormProps {
  onSubmit: (content: string) => void;
  className?: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit, className }) => {
  const [commentContent, setCommentContent] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentContent.trim()) {
      onSubmit(commentContent);
      setCommentContent("");
      showSuccess("Your comment has been posted!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-3", className)}>
      <Textarea
        placeholder="Write your comment here..."
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        rows={4}
        required
      />
      <Button type="submit" className="w-full">Post Comment</Button>
    </form>
  );
};

export default CommentForm;