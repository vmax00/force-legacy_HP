import { Link } from "wouter";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const handleLinkClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-heading font-bold tracking-tighter mb-4">FORCE LEGACY</h2>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              信頼と誠実さを基盤に、革新的なスタートアップと先見性のある投資家をつなぎ、
              明るく前向きな未来を共創します。
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-6 text-accent">Menu</h3>
            <ul className="space-y-4">
              <li><Link href="/startup" className="text-primary-foreground/70 hover:text-white transition-colors" onClick={handleLinkClick}>For Startups</Link></li>
              <li><Link href="/investor" className="text-primary-foreground/70 hover:text-white transition-colors" onClick={handleLinkClick}>For Investors</Link></li>
              <li><Link href="/process" className="text-primary-foreground/70 hover:text-white transition-colors" onClick={handleLinkClick}>Matching Process</Link></li>
              <li><Link href="/about" className="text-primary-foreground/70 hover:text-white transition-colors" onClick={handleLinkClick}>About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-6 text-accent">Contact</h3>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-primary-foreground/70 hover:text-white transition-colors" onClick={handleLinkClick}>Contact Form</Link></li>
              <li><Link href="/faq" className="text-primary-foreground/70 hover:text-white transition-colors" onClick={handleLinkClick}>FAQ</Link></li>
              <li className="text-primary-foreground/50 text-sm mt-8">
                Tokyo, Japan<br />
                info@forcelegacy.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <p className="text-sm text-primary-foreground/50">&copy; {new Date().getFullYear()} Force Legacy Inc. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 pt-8 border-t border-white/10">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-white transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
