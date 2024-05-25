"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { ModeToggle } from "@/components/mode-toggle";

import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import { ButtonAnimate } from "@/components/ui/moving-border";



export function NavbarMenu({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-0 inset-x-0 mx-auto z-50", className)}
    >
    <Navbar className="bg-white dark:bg-[#1F1F1F] items-center" maxWidth="full" isBordered={false}>
        <NavbarBrand>
            <h1 className="font-extrabold text-2xl">Siapkuliah</h1>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4 max-w-8xl" justify="center">
        <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        <ButtonAnimate
                borderRadius="1.75rem"  
                size="sm"
                className=" bg-white dark:bg-[#1F1F1F] text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
                Get free
            </ButtonAnimate>
        </NavbarItem>
        <NavbarItem>
           
        </NavbarItem>
            <NavbarItem className="">
                <ModeToggle />
            </NavbarItem>
      </NavbarContent>
    </Navbar>
    </div>
  );
}


