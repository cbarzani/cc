import image_CCFILM_NEW_LOGO__1 from "@/imports/CCFILM_NEW_LOGO_-1.png";
import { useRef, useEffect } from "react";
import {
  Film,
  Camera,
  Users,
  Award,
  Mail,
  Phone,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";
import ccFilmLogo from "@/imports/CCFILM_NEW_LOGO_.png";
import heroVideo from "@/imports/CCFilm_Logo_REVAL_.mp4";

export function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Set video to ready state and play immediately
      videoRef.current.load();
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Video autoplay failed:", err);
          // Retry play after a brief moment
          setTimeout(() => {
            videoRef.current?.play();
          }, 100);
        });
      }
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover z-0"
          style={{ opacity: 0.95 }}
          onLoadedMetadata={(e) => {
            // Ensure video plays as soon as metadata is loaded
            const video = e.currentTarget;
            video
              .play()
              .catch((err) =>
                console.log("Video play failed:", err),
              );
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background z-10"></div>
        {/* Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-64">
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-4 tracking-widest animate-in fade-in duration-1000 opacity-70">
            COMPELLING
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-widest text-primary animate-in fade-in duration-1000 delay-300 opacity-80">
            STORIES
          </h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 animate-in fade-in duration-1000 delay-500 opacity-70 font-[Francois_One]">
            We craft cinematic experiences that resonate,
            inspire, and leave lasting impressions.
          </p>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="px-6 py-3 bg-primary text-primary-foreground rounded hover:scale-105 transition-transform duration-300 text-sm"
          >
            View Our Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl mb-6">
                About CC Film
              </h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                CC Film Company is a production powerhouse
                dedicated to bringing compelling narratives to
                life. Our commitment to storytelling excellence
                drives every project we undertake.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe in the power of visual storytelling
                to connect, inspire, and transform audiences
                worldwide. Our team of passionate filmmakers
                combines technical expertise with creative
                vision.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From concept to final cut, we deliver
                productions that exceed expectations and stand
                the test of time.
              </p>
            </div>
            <div className="relative">
              <img
                src={image_CCFILM_NEW_LOGO__1}
                alt="Professional film camera setup"
                className="drop-shadow-[0_20px_50px_rgba(212,175,55,0.3)]"
                style={{
                  filter:
                    "drop-shadow(0 25px 50px rgba(212, 175, 55, 0.25))",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Backstage Section */}
      <section
        id="backstage"
        className="py-32 px-6 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl mb-6">
              Behind the Scenes
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              A glimpse into our creative process
            </p>
          </div>

          {/* YouTube Trailer - Large */}
          <div className="mb-16">
            <div className="relative w-full max-w-6xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/qrT4BOOjtdk"
                title="CC Film Behind the Scenes"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <p className="text-xl mb-12 leading-relaxed">
            Ready to start your next film project? Let's create
            something extraordinary together.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 justify-center">
              <Mail className="w-6 h-6 text-primary" />
              <a
                href="mailto:info@ccfilm.pro"
                className="text-lg hover:text-primary transition-colors"
              >
                info@ccfilm.pro
              </a>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Phone className="w-6 h-6 text-primary" />
              <a
                href="tel:+9647505118899"
                className="text-lg hover:text-primary transition-colors"
              >
                +964 750 511 8899
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl mb-8">Follow Us</h3>
          <div className="flex gap-8 justify-center">
            <a
              href="https://www.instagram.com/ccfilm.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="https://www.youtube.com/@ccfilmcompany-iraq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61557085765705"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-8 h-8" />
            </a>
            <a
              href="https://www.tiktok.com/@ccfilm.pro?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3"></div>
            <p className="text-muted-foreground text-center">
              © 2025 CC Film Company. Creating compelling
              stories that inspire.
            </p>
            <div className="flex gap-6"></div>
          </div>
        </div>
      </footer>
    </>
  );
}