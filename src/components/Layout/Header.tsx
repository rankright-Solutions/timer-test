import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home, Menu } from "lucide-react";
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 sm:px-8 bg-background border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <Button variant="ghost" size="icon">
            <Home className="h-6 w-6" />
          </Button>
        </Link>
        
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        <nav className={`${
          isMenuOpen 
            ? 'absolute top-16 left-0 right-0 bg-background border-b p-4 flex flex-col gap-4 z-50' 
            : 'hidden'
          } sm:flex sm:static sm:gap-6 sm:p-0 sm:border-none`}
        >
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