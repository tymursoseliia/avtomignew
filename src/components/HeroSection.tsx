import Link from "next/link";
import ImageCarousel from "./ImageCarousel";

interface HeroSectionProps {
  cars?: any[];
}

export default function HeroSection({ cars = [] }: HeroSectionProps) {
  // Extract all images from all cars in the catalog
  const allImages = cars.flatMap(car => car.images || []).filter(Boolean);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with gradient and abstract shapes */}
      <div className="absolute inset-0 z-0 bg-[#0a0f1d]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
        {/* Optional: Add a subtle grid or noise pattern here */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left mb-12 md:mb-0">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark border-blue-500/30 text-blue-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Работаем по договору
            </div>
            <a href="tel:+79809751463" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-bold hover:bg-green-500/20 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.2)]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +7 (980) 975-14-63
            </a>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Пригон авто из Европы <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[var(--color-accent)]">
              под ключ в РФ
            </span> <br />
            за 14–20 дней
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
            Подбор, проверка, доставка, растаможка и оформление. 
            Рассчитайте стоимость автомобиля под ключ и получите 3 варианта под ваш бюджет. Без скрытых платежей.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/calculator"
              className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all transform hover:-translate-y-0.5"
            >
              Рассчитать стоимость
            </Link>
            <Link
              href="/cases"
              className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full text-white glass hover:bg-white/10 transition-all border border-white/20"
            >
              Смотреть каталог
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Проверка VIN</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Фото/видео отчёт</span>
            </div>
          </div>
        </div>

        {/* Visual / Image / Interactive Element */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Main car image placeholder with glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent rounded-full blur-3xl animate-pulse" />
            <div className="absolute inset-4 glass-dark rounded-[2rem] border border-blue-500/20 shadow-[0_0_50px_rgba(37,99,235,0.15)] overflow-hidden transform-gpu rotate-y-[-5deg] rotate-x-[5deg] transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0 group">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-400/30 transition-colors duration-700"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2 group-hover:bg-purple-400/30 transition-colors duration-700"></div>
              
              <div className="absolute inset-0 z-10 p-4">
                {allImages.length > 0 ? (
                  <ImageCarousel images={allImages} />
                ) : (
                  <img 
                    src="/hero-car.png" 
                    alt="Спортивный премиум автомобиль из Европы" 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700 rounded-2xl" 
                  />
                )}
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -left-4 top-1/4 bg-slate-900 px-4 py-3 rounded-2xl border border-white/10 shadow-2xl animate-bounce z-20" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Экономия до</p>
                  <p className="text-sm font-bold text-white">30% от рынка РФ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
