"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg">SSO3</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/">Home</Link>
          <Link to="/services">Serviços</Link>
          <Link to="/contact">Contato</Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 pt-6">
              <Link to="/" className="text-lg font-medium" onClick={() => document.getElementById('sheet-close')?.click()}>Home</Link>
              <Link to="/services" className="text-lg font-medium" onClick={() => document.getElementById('sheet-close')?.click()}>Serviços</Link>
              <Link to="/contact" className="text-lg font-medium" onClick={() => document.getElementById('sheet-close')?.click()}>Contato</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;