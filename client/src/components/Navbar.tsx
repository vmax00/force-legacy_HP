import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

export default function Navbar() {
  const [location] = useLocation();
  
  const isStartup = location.includes("/startup");
  const isInvestor = location.includes("/investor");
  const isHome = location === "/";

  // Don't show navbar on home page as it has its own split navigation
  if (isHome) return null;

  const navLinks = [
    { href: "/startup", label: "For Startups" },
    { href: "/investor", label: "For Investors" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-heading font-bold tracking-tighter text-primary">
            FORCE LEGACY
          </a>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative group",
                location === link.href ? "text-primary" : "text-muted-foreground"
              )}>
                {link.label}
                {location === link.href && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full opacity-0 group-hover:opacity-100" />
              </a>
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          {/* Mobile menu placeholder */}
          <button className="p-2 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
