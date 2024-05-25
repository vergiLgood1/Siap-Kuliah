import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./counselor-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function Counselor() {
  return (
    <>
    <div className=" mx-auto md:auto-rows-[20rem] py-10 md:py-20 rounded-md flex flex-col antialiased bg-white dark:bg-[#1F1F1F] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden w-full gap-y-4">
     <h2 className="mt-10 sm:mt-10 font-bold text-xl text-center sm:text-3xl dark:text-white text-black">
        Tertarik? <br/> Beli sekarang untuk mengakses seluruh materi
      </h2>
    <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem] py-10 md:py-5 w-full relative">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
      <div className="flex items-center justify-center ">
      <Button
      className="px-12 rounded-full bg-neutral-700 hover:bg-neutral-700" 
      
      
      >
        View All
      </Button>
      </div>
    </div>
    
    </>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Gojo",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: "/assets/images/img1.jpg",
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sumanto",
    description: "Dive into the transformative power of technology.",
   header: "/assets/images/img1.jpg",
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Speed",
    description: "Discover the beauty of thoughtful and functional design.",
   header: "/assets/images/img1.jpg",
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Ronaldo",
    description:
      "Understand the impact of effective communication in our lives.",
   header: "/assets/images/img1.jpg",
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
