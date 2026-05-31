import { Outlet, Link, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import ccFilmLogo from '@/imports/CCFILM_NEW_LOGO_.png';
import { Menu, X } from 'lucide-react';

export function Layout() {
  const location = useLocation();
  const isRegretPage = location.pathname === '/regret';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false); // Close mobile menu on route change
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 md:gap-3">
              <img src={ccFilmLogo} alt="CC Film Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              <h1 className="text-xl md:text-2xl font-bold tracking-wider" style={{ fontFamily: 'Suranna, serif' }}>CCFilm Pro</h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {isRegretPage ? (
                <>
                  <Link
                    to="/"
                    className="capitalize transition-colors hover:text-primary text-muted-foreground"
                  >
                    Home
                  </Link>
                  <Link
                    to="/regret"
                    className="capitalize transition-colors text-primary"
                  >
                    Regret
                  </Link>
                </>
              ) : (
                <>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="capitalize transition-colors hover:text-primary text-muted-foreground"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="capitalize transition-colors hover:text-primary text-muted-foreground"
                  >
                    About
                  </button>
                  <Link
                    to="/regret"
                    className="capitalize transition-colors hover:text-primary text-muted-foreground"
                  >
                    Regret
                  </Link>
                  <button
                    onClick={() => scrollToSection('backstage')}
                    className="capitalize transition-colors hover:text-primary text-muted-foreground"
                  >
                    Backstage
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="capitalize transition-colors hover:text-primary text-muted-foreground"
                  >
                    Contact
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-muted-foreground hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              {isRegretPage ? (
                <>
                  <Link
                    to="/"
                    className="capitalize transition-colors hover:text-primary text-muted-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/regret"
                    className="capitalize transition-colors text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Regret
                  </Link>
                </>
              ) : (
                <>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="capitalize transition-colors hover:text-primary text-muted-foreground text-left"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="capitalize transition-colors hover:text-primary text-muted-foreground text-left"
                  >
                    About
                  </button>
                  <Link
                    to="/regret"
                    className="capitalize transition-colors hover:text-primary text-muted-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Regret
                  </Link>
                  <button
                    onClick={() => scrollToSection('backstage')}
                    className="capitalize transition-colors hover:text-primary text-muted-foreground text-left"
                  >
                    Backstage
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="capitalize transition-colors hover:text-primary text-muted-foreground text-left"
                  >
                    Contact
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <Outlet />
    </div>
  );
}
