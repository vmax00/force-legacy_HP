import { Link } from "wouter";

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
              <li><Link href="/startup" className="text-primary-foreground/70 hover:text-white transition-colors">For Startups</Link></li>
              <li><Link href="/investor" className="text-primary-foreground/70 hover:text-white transition-colors">For Investors</Link></li>
              <li><Link href="/process" className="text-primary-foreground/70 hover:text-white transition-colors">Matching Process</Link></li>
              <li><Link href="/about" className="text-primary-foreground/70 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold mb-6 text-accent">Contact</h3>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-primary-foreground/70 hover:text-white transition-colors">Contact Form</Link></li>
              <li><Link href="/faq" className="text-primary-foreground/70 hover:text-white transition-colors">FAQ</Link></li>
              <li className="text-primary-foreground/50 text-sm mt-8">
                Tokyo, Japan<br />
                info@forcelegacy.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Force Legacy Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
