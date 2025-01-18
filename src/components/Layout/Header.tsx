import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 px-8 bg-background border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <Button variant="ghost" size="icon">
            <Home className="h-6 w-6" />
          </Button>
        </Link>
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;