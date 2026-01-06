import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import StartupLP from "./pages/StartupLP";
import InvestorLP from "./pages/InvestorLP";
import { ProcessPage, AboutPage, FAQPage, ContactPage } from "./pages/AdditionalPages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
function Router() {
  const [location] = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location}>
        <Route path={"/"} component={Home} />
        <Route path={"/startup"} component={StartupLP} />
        <Route path={"/investor"} component={InvestorLP} />
        <Route path={"/process"} component={ProcessPage} />
        <Route path={"/about"} component={AboutPage} />
        <Route path={"/faq"} component={FAQPage} />
        <Route path={"/contact"} component={ContactPage} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen flex flex-col font-body bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
            <Navbar />
            <main className="flex-grow">
              <Router />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
