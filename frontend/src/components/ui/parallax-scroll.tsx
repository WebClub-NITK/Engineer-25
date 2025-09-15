"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  members,
  className,
}: {
  members: { image: string; name: string; position: string }[];
  className?: string;
}) => {

  const Card = ({
    image,
    name,
    position,
  }: {
    image: string;
    name: string;
    position: string;
  }) => (
    <div className="flex flex-col bg-white/15 border-white/40 text-white backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group rounded-2xl overflow-hidden min-h-[25rem]">
      <img src={image} alt={name} className="w-full h-[20rem] object-fit" />
      <div className="p-4 flex flex-col items-center">
        <div className="text-lg font-semibold ">{name}</div>
        <div className="text-md ">{position}</div>
      </div>
    </div>
  );

  return (
    <div
      className={cn(
        "h-[40rem] overflow-y-auto w-full relative",
        className
      )}
    >
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/main_bg.png')",
          opacity: 0.45,
        }}
      />

      <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Team
        </h1>

        <div className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed my-5 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto text-center ">
          <p className="mb-4">
            Engineer '25 is powered by a group of passionate people who strive to create
            an unforgettable experience for everyone!
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto py-5 px-10"
      >
        {members.map((member, idx) => (
          <Card key={idx} {...member} />
        ))}
      </motion.div>
    </div>
  );
};
