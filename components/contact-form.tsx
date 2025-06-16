import type React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "./ui/label";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form
        className="space-y-8"
        method="POST"
        action="https://formspree.io/f/mwpbbryy"
      >
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your Name" />
        </div>

        <div className="grid w-full items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
          />
        </div>

        <div className="grid w-full items-center gap-3">
          <Label htmlFor="message">Message</Label>
          <Textarea
            rows={5}
            id="message"
            name="message"
            placeholder="Your Message"
          />
        </div>

        <Button type="submit" className="w-full h-12 mt-4">
          Send message
        </Button>
      </form>
    </motion.div>
  );
}
