import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { useGithub } from "../hooks/useGithub";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export const User = () => {
  const { theme, setTheme } = useTheme();
  const { user } = useGithub();

  return (
    <motion.div
      initial={{ scale: 0.7 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Card
        isBlurred
        isPressable
        isHoverable
        radius="md"
        shadow="sm"
        className="border border-divider"
        onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <CardBody className="flex flex-row flex-nowrap gap-4">
          <Image
            isBlurred
            width={45}
            src={user?.avatar_url}
            alt={`doom user image`}
            className="object-cover rounded-full"
            fallback="https://via.placeholder.com/40x40"
          />
          <div className="information text-start">
            <div className="group-hover:underline">Camilo Davila</div>
            <div className="text-sm text-neutral-500">Fullstack Developer</div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};
