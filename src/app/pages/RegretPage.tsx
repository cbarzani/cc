import regretPoster from '@/imports/IMG_1198.JPG';
import ccFilmLogo from '@/imports/CCFILM_NEW_LOGO_.png';
import { Mail, Phone, Film, ExternalLink, Instagram, Youtube, Facebook } from 'lucide-react';
import { SEO } from '@/app/components/SEO';

export function RegretPage() {
  const regretStructuredData = {
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": "REGRET",
    "alternateName": "ندم",
    "description": "Spanning three distinct time periods, REGRET follows a young boy whose passion for filmmaking leads to a suspenseful thriller with a reality-shattering twist. A family drama in Arabic.",
    "director": { "@type": "Person", "name": "REGA ALBARZNJI" },
    "productionCompany": { "@type": "Organization", "name": "CC Film Company" },
    "genre": ["Family", "Drama", "Thriller"],
    "inLanguage": "ar",
    "datePublished": "2025",
    "duration": "PT130M",
    "url": "https://ccfilm.pro/regret",
    "sameAs": "https://www.imdb.com/title/tt36294546/",
    "actor": [
      { "@type": "Person", "name": "Bakr Khald" },
      { "@type": "Person", "name": "Baraa Alzubaidi" },
      { "@type": "Person", "name": "Sara Aws" }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="REGRET (ندم) — CC Film Company | Watch the Full Film"
        description="REGRET (ندم) is a gripping Arabic family drama thriller by CC Film Company. Directed by REGA ALBARZNJI. 130 minutes. Watch the full film now or view on IMDb."
        keywords="REGRET film, ندم فيلم, REGRET 2025, Arabic film, Iraqi cinema, CC Film, CCFilm, family drama thriller, REGA ALBARZNJI, watch REGRET online, ندم فيلم عراقي"
        url="https://ccfilm.pro/regret"
        image={`https://ccfilm.pro${regretPoster}`}
        structuredData={regretStructuredData}
      />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Image - Left Side */}
          <div className="flex justify-center md:justify-start">
            <img
              src={regretPoster}
              alt="REGRET"
              className="w-full max-w-md h-auto object-contain rounded-lg shadow-2xl shadow-primary/20"
            />
          </div>

          {/* Content - Right Side */}
          <div className="space-y-6">
            <div>
              <h2 className="text-5xl md:text-6xl tracking-wider mb-4">REGRET</h2>
              <a 
                href="https://www.imdb.com/title/tt36294546/reference/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/30 rounded hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 text-primary"
              >
                <svg className="w-12 h-6" viewBox="0 0 64 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="32" rx="3" fill="#F5C518"/>
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#000000" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">IMDb</text>
                </svg>
                <span className="font-medium">View on IMDb</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <p className="text-base text-foreground/90 leading-relaxed">            
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-3 py-1 bg-card/80 border border-primary/30 rounded text-xs">Family, Drama</span>
              <span className="px-3 py-1 bg-card/80 border border-primary/30 rounded text-xs">2025</span>
              <span className="px-3 py-1 bg-card/80 border border-primary/30 rounded text-xs">130 min</span>
            </div>

            <a
              href="https://purchase.ccfilm.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-4 px-8 py-4 bg-primary text-black font-semibold text-lg rounded hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30"
            >
              <Film className="w-5 h-5" />
              Watch Full Film
            </a>
          </div>
        </div>
      </section>

      {/* Full Film Details Section */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl mb-6">About The Film</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          {/* Trailer Section */}
          <div className="mb-16">
            <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/m1aV_JXsR54"
                title="REGRET Official Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Story */}
            <div className="space-y-6">
              <h3 className="text-3xl mb-4">The Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Spanning three distinct time periods, the film follows a young boy whose passion for filmmaking is ignited after watching a movie crew at work. As he battles fierce family and societal expectations to pursue his dream, his journey spirals into a suspenseful thriller. Everything builds to a reality-shattering twist that turns the story upside down and leaves viewers breathless.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed" dir="rtl" style={{ fontFamily: 'Arial, sans-serif' }}>
                يمتد الفيلم عبر ثلاث حقب زمنية مختلفة، متتبعاً قصة طفل يشتعل شغفه بالإخراج السينمائي بعد رؤيته لطاقم تصوير أثناء عملهم. وفي رحلته المحفوفة بالتحديات العائلية والمجتمعية لتحقيق حلمه، تتصاعد الأحداث المشوقة لتصل إلى منعطف صادم يقلب القصة رأساً على عقب، ويترك المشاهدين في حالة من الذهول التام.
              </p>
            </div>

            {/* Production Details */}
            <div className="space-y-6">
              <h3 className="text-3xl mb-4">Production Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start py-3 border-b border-border">
                  <h4 className="text-primary text-sm font-medium">A Film By</h4>
                  <p className="text-muted-foreground text-sm text-right">REGA ALBARZNJI</p>
                </div>
                <div className="flex justify-between items-start py-3 border-b border-border">
                  <h4 className="text-primary text-sm font-medium">Cast</h4>
                  <p className="text-muted-foreground text-sm text-right max-w-xs">
                    Bakr Khald, Baraa Alzubaidi, Sara Aws, Ruggaya Salah, Sandy Jamal, Anaam AlRubace, Muhanad Satar, Layth Haider, Taym Yahya, Mahmood Farua
                  </p>
                </div>
                <div className="flex justify-between items-start py-3 border-b border-border">
                  <h4 className="text-primary text-sm font-medium">Genre</h4>
                  <p className="text-muted-foreground text-sm text-right">Family, Drama</p>
                </div>
                <div className="flex justify-between items-start py-3 border-b border-border">
                  <h4 className="text-primary text-sm font-medium">Runtime</h4>
                  <p className="text-muted-foreground text-sm text-right">130 minutes</p>
                </div>
                <div className="flex justify-between items-start py-3 border-b border-border">
                  <h4 className="text-primary text-sm font-medium">Language</h4>
                  <p className="text-muted-foreground text-sm text-right">Arabic</p>
                </div>
                <div className="flex justify-between items-start py-3">
                  <h4 className="text-primary text-sm font-medium">Release</h4>
                  <p className="text-muted-foreground text-sm text-right">2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Partnership Section */}
      <section className="py-32 px-6 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl mb-6">Distribution Partnership</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-12">
            <p className="text-xl text-center mb-8 leading-relaxed">
              We are looking for passionate distribution partners who share our commitment to bringing
              compelling stories to global audiences.
            </p>
            <p className="text-lg text-center text-muted-foreground mb-8">
              REGRET speaks to cinephiles seeking emotionally compelling stories with universal themes
              and powerful narratives.
            </p>
            <div className="text-center">
              <h3 className="text-2xl mb-6">Get In Touch</h3>
              <div className="space-y-4 max-w-md mx-auto">
                <div className="flex items-center gap-4 justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:info@ccfilm.pro" className="text-lg hover:text-primary transition-colors">
                    info@ccfilm.pro
                  </a>
                </div>
                <div className="flex items-center gap-4 justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+9647505118899" className="text-lg hover:text-primary transition-colors">
                    +964 750 511 8899
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-6 bg-card">
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
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
             
              
            </div>
            <p className="text-muted-foreground text-center">
              © 2025 CC Film Company. Creating compelling stories that inspire.
            </p>
            <div className="flex gap-6">
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
