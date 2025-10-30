"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { showSuccess } from "@/utils/toast";
import { cn } from "@/lib/utils";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

// Define the Zod schema for the comment form
const formSchema = z.object({
  content: z.string().min(5, {
    message: "Comment must be at least 5 characters.",
  }).max(500, {
    message: "Comment must not exceed 500 characters.",
  }),
});

interface CommentFormProps {
  onSubmit: (content: string) => void;
  className?: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit, className }) => {
  // Initialize react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onSubmit(values.content);
    form.reset(); // Reset form fields
    showSuccess("Your comment has been posted!");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={cn("space-y-3", className)}>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Write your comment here..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Post Comment</Button>
      </form>
    </Form>
  );
};

export default CommentForm;