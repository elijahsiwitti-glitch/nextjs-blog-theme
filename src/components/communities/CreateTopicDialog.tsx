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

// Define the Zod schema for the topic creation form
const formSchema = z.object({
  title: z.string().min(5, {
    message: "Topic title must be at least 5 characters.",
  }).max(100, {
    message: "Topic title must not exceed 100 characters.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }).max(500, {
    message: "Description must not exceed 500 characters.",
  }),
});

interface CreateTopicDialogProps {
  children: React.ReactNode;
  communityId: string; // To associate the topic with a community
}

const CreateTopicDialog: React.FC<CreateTopicDialogProps> = ({ children, communityId }) => {
  const [open, setOpen] = React.useState(false);

  // Initialize react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // In a real app, you'd handle form submission here, e.g., send to an API
    console.log(`New topic created for community ${communityId}:`, values);
    showSuccess("New discussion topic created!"); // Show success toast
    setOpen(false); // Close dialog on submit
    form.reset(); // Reset form fields
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <PlusCircle className="h-5 w-5" /> Create New Topic
          </DialogTitle>
          <DialogDescription>
            Start a new discussion topic within this community.
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
                    <Input id="title" placeholder="e.g., Best Zero Waste Swaps" {...field} />
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
                      placeholder="Elaborate on your discussion topic..."
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
            <Button type="submit" className="w-full mt-4">Create Topic</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTopicDialog;