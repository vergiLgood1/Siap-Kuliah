"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar} from "@nextui-org/react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    avatar: string;
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-8xl overflow-hidden  ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
           <Card 
           className="w-[245px] md:w-[422px] p-6 bg-gradient-to-t from-[#FFFFFF00] to-[#FFFFFF0D] border-[1px] border-[#2D2D2D]"
           key={item.name}
           >
           <CardHeader className="flex gap-3 px-0 pt-0 pb-6">
            <Avatar 
            isBordered 
            radius="full" 
            size="md" 
            src={item.avatar} 
            className=""
            />
             <div className="flex flex-col md:gap-[6px]">
               <p className="text-xs">{item.name}</p>
               <p className="text-[10px] text-default-500">{item.title}</p>
             </div>
           </CardHeader>
           <Divider/>
           <CardBody className="px-0 pt-6 pb-0">
             <p className="text-sm">{item.quote}</p>
           </CardBody>
           {/* <CardFooter>
             <Link
               isExternal
               showAnchorIcon
               href="https://github.com/nextui-org/nextui"
             >
               Visit source code on GitHub.
             </Link>
           </CardFooter> */}
         </Card>
        ))}
      </ul>
     
    </div>
  );
};
