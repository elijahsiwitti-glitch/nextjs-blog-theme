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

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Define the Zod schema for the idea submission form
const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }).max(100, {
    message: "Title must not exceed 100 characters.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }).max(500, {
    message: "Description must not exceed 500 characters.",
  }),
  category: z.string().optional(),
});

interface SubmitIdeaDialogProps {
  children: React.ReactNode;
}

const SubmitIdeaDialog: React.FC<SubmitIdeaDialogProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  // Initialize react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // In a real app, you'd send this data to an API
    console.log("Idea submitted:", values);
    showSuccess("Your idea has been submitted successfully!");
    setOpen(false); // Close dialog on submit
    form.reset(); // Reset form fields
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel htmlFor="title" className="text-right">
                    Title
                  </FormLabel>
                  <FormControl className="col-span-3">
                    <Input id="title" placeholder="A catchy title for your idea" {...field} />
                  </FormControl>
                  <div className="col-start-2 col-span-3">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-start gap-4">
                  <FormLabel htmlFor="description" className="text-right pt-2">
                    Description
                  </FormLabel>
                  <FormControl className="col-span-3">
                    <Textarea
                      id="description"
                      placeholder="Describe your idea in detail..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <div className="col-start-2 col-span-3">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel htmlFor="category" className="text-right">
                    Category
                  </FormLabel>
                  <FormControl className="col-span-3">
                    <Input id="category" placeholder="e.g., Tech, Environment, Social" {...field} />
                  </FormControl>
                  <div className="col-start-2 col-span-3">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full mt-4">Submit Idea</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SubmitIdeaDialog;