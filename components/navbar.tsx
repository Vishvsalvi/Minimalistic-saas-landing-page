"use client";

import type {NavbarProps} from "@heroui/react";

import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Divider,
} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";

// import {AcmeIcon} from "./acme";

const menuItems = [
  "About",
  "Blog",
  "Customers",
  "Pricing",
  "Enterprise",
  "Changelog",
  "Documentation",
  "Contact Us",
];

const sections = ["home", "features", "agents", "testimonials", "pricing"];

export default function NavbarComponent(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setVisible(isScrollingUp || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      // Check which section is in view
      let currentSection = sections[0];
      let minDistance = Infinity;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - 80); // 80px is our offset
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height + some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Navbar
      {...props}
      shouldHideOnScroll={false}
      isBlurred={true}
      classNames={{
        base: cn("border-default-100 fixed transition-transform duration-300 z-50", {
          "bg-default-200/50 dark:bg-default-100/50": isMenuOpen,
          "-translate-y-full": !visible,
          "translate-y-0": visible,
        }),
        wrapper: "w-full justify-center",
        item: "hidden md:flex",
      }}
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left Content */}
      <NavbarBrand>
        <div className="rounded-full bg-foreground text-background">
          {/* <AcmeIcon size={34} /> */}
        </div>
        <span className="ml-2 text-small font-medium">MusicGen</span>
      </NavbarBrand>

      {/* Center Content */}
      <NavbarContent justify="center">
        <NavbarItem isActive={activeSection === "home"}>
          <Link 
            className={activeSection === "home" ? "text-foreground" : "text-default-500"} 
            href="#home" 
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeSection === "features"}>
          <Link 
            className={activeSection === "features" ? "text-foreground" : "text-default-500"} 
            href="#features" 
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("features");
            }}
          >
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeSection === "agents"}>
          <Link 
            className={activeSection === "agents" ? "text-foreground" : "text-default-500"} 
            href="#agents" 
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("agents");
            }}
          >
            Agents
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeSection === "testimonials"}>
          <Link 
            className={activeSection === "testimonials" ? "text-foreground" : "text-default-500"} 
            href="#testimonials" 
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("testimonials");
            }}
          >
            Testimonials
          </Link>
        </NavbarItem>
        <NavbarItem isActive={activeSection === "pricing"}>
          <Link 
            className={activeSection === "pricing" ? "text-foreground" : "text-default-500"} 
            href="#pricing" 
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("pricing");
            }}
          >
            Pricing
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right Content */}
      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarItem className="ml-2 !flex gap-2">
          <Button className="text-default-500" radius="full" variant="light">
            Login
          </Button>
          <Button
            className="bg-foreground font-medium text-background"
            color="secondary"
            endContent={<Icon icon="solar:alt-arrow-right-linear" />}
            radius="full"
            variant="flat"
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle className="text-default-400 md:hidden" />

      <NavbarMenu className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50">
        <NavbarMenuItem>
          <Button fullWidth as={Link} href="/#" variant="faded">
            Sign In
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-4">
          <Button fullWidth as={Link} className="bg-foreground text-background" href="/#">
            Get Started
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link 
            className={activeSection === "home" ? "w-full text-foreground" : "w-full text-default-500"} 
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
              setIsMenuOpen(false);
            }}
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link 
            className={activeSection === "features" ? "w-full text-foreground" : "w-full text-default-500"} 
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("features");
              setIsMenuOpen(false);
            }}
          >
            Features
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link 
            className={activeSection === "agents" ? "w-full text-foreground" : "w-full text-default-500"} 
            href="#agents"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("agents");
              setIsMenuOpen(false);
            }}
          >
            Agents
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link 
            className={activeSection === "testimonials" ? "w-full text-foreground" : "w-full text-default-500"} 
            href="#testimonials"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("testimonials");
              setIsMenuOpen(false);
            }}
          >
            Testimonials
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link 
            className={activeSection === "pricing" ? "w-full text-foreground" : "w-full text-default-500"} 
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("pricing");
              setIsMenuOpen(false);
            }}
          >
            Pricing
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
