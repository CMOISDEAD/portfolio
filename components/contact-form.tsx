import type React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { toast } from "sonner";
import { useState } from "react";
import { Loader } from "lucide-react";

const FormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .nonempty(),
  email: z.email().nonempty(),
  message: z
    .string()
    .min(5, {
      message: "Message must be at least 5 characters.",
    })
    .nonempty(),
});

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      setIsLoading(true);
      const response = await fetch("https://formspree.io/f/mwpbbryy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast("✅ Message sent successfully!", {
          description: (
            <pre className="mt-2 w-full max-w-[320px] rounded-md bg-neutral-950 p-4 overflow-x-auto">
              <code className="text-white text-sm">
                {JSON.stringify(data, null, 2)}
              </code>
            </pre>
          ),
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.log(error);
      toast("🚨 Error sending message", {
        description: (
          <pre className="mt-2 w-full max-w-[320px] rounded-md bg-neutral-950 p-4 overflow-x-auto">
            <code className="text-white text-sm">
              {JSON.stringify(
                {
                  status: "error",
                  message: "Please try again later or contact us directly.",
                  error: "0x001e",
                },
                null,
                2,
              )}
            </code>
          </pre>
        ),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email*</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message*</FormLabel>
                <FormControl>
                  <Textarea rows={5} placeholder="Your Message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-12 mt-4"
            disabled={isLoading}
          >
            {isLoading && (
              <Loader className="size-5 text-accent-foreground animate-spin" />
            )}
            Send message
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
