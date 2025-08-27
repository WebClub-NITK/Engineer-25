"use client";
import React, { useRef} from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
  onEnter,
  onLeave,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
  onEnter?: () => void;
  onLeave?: () => void;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollerRef,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Optional color accents per card for the sticky preview border
  const accentGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
    "linear-gradient(to bottom right, #22c55e, #06b6d4)",
    "linear-gradient(to bottom right, #a855f7, #ef4444)",
  ];

  // No page scroll locking here; this component only scrolls inside its own box

  return (
    <div className="relative">
      <div
        className="relative mx-auto flex h-[30rem] max-w-5xl touch-pan-y justify-center space-x-10 overflow-y-auto overscroll-contain rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md sm:h-[32rem] md:h-[34rem]"
        ref={scrollerRef}
        style={{ WebkitOverflowScrolling: "touch" }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onTouchStart={onEnter}
        onTouchEnd={onLeave}
      >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-white"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-6 max-w-sm select-text text-neutral-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
        <div
          className={cn(
            "sticky top-8 hidden h-64 w-96 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md lg:block",
            contentClassName,
          )}
          style={{ backgroundImage: accentGradients[activeCard % accentGradients.length] }}
        >
          <div className="h-full w-full">
            {content[activeCard].content ?? null}
          </div>
        </div>
      </div>
    </div>
  );
};
