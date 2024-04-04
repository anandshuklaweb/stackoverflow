"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedOut } from "@clerk/nextjs";

const Leftsidebar = () => {
  const pathname = usePathname();
  return (
    <div>Left Sidebar</div>
  );
};

export default Leftsidebar;