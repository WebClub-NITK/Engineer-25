"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  members,
  className,
}: {
  members: { image: string; name: string; position: string }[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const third = Math.floor(members.length / 3);
  const remainder = members.length % 3;

  const firstPart = members.slice(0, third + (remainder > 0 ? 1 : 0));
  const secondPart = members.slice(third + (remainder > 0 ? 1 : 0), 2 * third + (remainder > 1 ? 1 : 0));
  const thirdPart = members.slice(2 * third + (remainder > 1 ? 1 : 0));

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
      <img src={image} alt={name} className="w-full h-[18rem] object-cover" />
      <div className="p-4 flex flex-col items-center">
        <div className="text-lg font-semibold ">{name}</div>
        <div className="text-md ">{position}</div>
      </div>
    </div>
  );

  return (
    <div
      className={cn(
        "h-[40rem] items-start overflow-y-auto w-full relative",
        className
      )}
      ref={gridRef}
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
            an unforgettable experience for everyone !
    </p>


  </div>
</div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-10 px-10">

        <div className="grid gap-10">
          {firstPart.map((member, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1-" + idx}>
              <Card {...member} />
            </motion.div>
          ))}
        </div>


        <div className="grid gap-10">
          {secondPart.map((member, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2-" + idx}>
              <Card {...member} />
            </motion.div>
          ))}

          <div className="flex justify-center my-70">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>


        <div className="grid gap-10">
          {thirdPart.map((member, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3-" + idx}>
              <Card {...member} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
