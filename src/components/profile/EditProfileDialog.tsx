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
import { UserPen } from "lucide-react";
import { showSuccess } from "@/utils/toast";

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

// Define the Zod schema for the profile edit form
const formSchema = z.object({
  userName: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }).max(50, {
    message: "Name must not exceed 50 characters.",
  }),
  userBio: z.string().max(300, {
    message: "Bio must not exceed 300 characters.",
  }).optional(),
});

interface EditProfileDialogProps {
  children: React.ReactNode;
  initialData: {
    name: string;
    bio?: string;
  };
  onSave: (data: z.infer<typeof formSchema>) => void;
}

const EditProfileDialog: React.FC<EditProfileDialogProps> = ({
  children,
  initialData,
  onSave,
}) => {
  const [open, setOpen] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: initialData.name,
      userBio: initialData.bio || "",
    },
  });

  // Reset form with new initialData when dialog opens or initialData changes
  React.useEffect(() => {
    if (open) {
      form.reset({
        userName: initialData.name,
        userBio: initialData.bio || "",
      });
    }
  }, [open, initialData, form]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onSave(values);
    showSuccess("Profile updated successfully!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <UserPen className="h-5 w-5" /> Edit Profile
          </DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-center gap-4">
                  <FormLabel htmlFor="userName" className="text-right">
                    Name
                  </FormLabel>
                  <FormControl className="col-span-3">
                    <Input id="userName" {...field} />
                  </FormControl>
                  <div className="col-start-2 col-span-3">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="userBio"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 items-start gap-4">
                  <FormLabel htmlFor="userBio" className="text-right pt-2">
                    Bio
                  </FormLabel>
                  <FormControl className="col-span-3">
                    <Textarea
                      id="userBio"
                      placeholder="Tell us about yourself..."
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
            <Button type="submit" className="w-full mt-4">Save changes</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;