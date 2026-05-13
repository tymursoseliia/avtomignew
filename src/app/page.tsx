import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Quiz from "@/components/Quiz";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const { data: cars } = await supabase
    .from('cars')
    .select('*')
    .order('created_at', { ascending: false });

  const safeCars = cars || [];
  const top3Cars = safeCars.slice(0, 3);

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection cars={safeCars} />

        {/* Hub Previews */}
        <section className="py-24 bg-slate-900/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Свежие автомобили</h2>
                <p className="text-slate-400">Только что пригнанные авто под ключ из Европы</p>
              </div>
              <Link href="/cases" className="text-blue-400 hover:text-blue-300 font-medium hidden md:block">
                Смотреть весь каталог &rarr;
              </Link>
            </div>
            
            {/* Grid Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {top3Cars.length > 0 ? top3Cars.map((car: any) => (
                <Link href="/cases" key={car.id} className="glass-dark rounded-3xl p-4 border border-white/5 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all group block">
                  <div className="aspect-[4/3] bg-slate-800 rounded-2xl mb-4 overflow-hidden relative">
                    {car.images && car.images.length > 0 ? (
                      <img 
                        src={car.images[0]} 
                        alt={`${car.brand} ${car.model}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-slate-500">Нет фото</div>
                    )}
                  </div>
                  <div className="px-2">
                    <h3 className="text-xl font-bold text-white mb-2 truncate">{car.brand} {car.model}</h3>
                    <div className="flex justify-between items-end">
                      <div className="text-slate-400 text-sm">
                        {car.year} г.в. • {new Intl.NumberFormat('ru-RU').format(car.mileage || 0)} км
                      </div>
                      <div className="text-[var(--color-accent)] font-bold text-lg">
                        {new Intl.NumberFormat('ru-RU').format(car.price)} ₽
                      </div>
                    </div>
                  </div>
                </Link>
              )) : (
                <div className="col-span-3 text-center text-slate-500 py-12 border border-white/5 rounded-3xl">
                  Каталог временно пуст
                </div>
              )}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link href="/cases" className="text-blue-400 font-medium">Смотреть весь каталог &rarr;</Link>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="py-24 bg-[var(--background)] relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Подберем авто под ваш бюджет</h2>
              <p className="text-lg text-slate-400">Пройдите короткий тест за 1 минуту и получите 5 отличных вариантов авто под ключ из Европы.</p>
            </div>
            <Quiz />
          </div>
        </section>

        {/* Calculator Banner Preview */}
        <section className="py-24 bg-slate-900 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Хотите узнать точную цену под ключ?</h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Наш онлайн-калькулятор рассчитает стоимость растаможки, утильсбора и доставки до вашего города за 1 минуту.
            </p>
            <Link
              href="/calculator"
              className="inline-flex justify-center items-center px-10 py-5 text-lg font-bold rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-1"
            >
              Перейти к калькулятору
            </Link>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white tracking-tight">
              АВТО<span className="text-[var(--color-accent)]">МИГ</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://yandex-maps.online/maps/240/samara/house/dolotnyy_per_7_10/YEAYdA5oTEQHQFtpfxlxcnhgbQ==?from=mapframe&ll=50.0811%2C53.1208&pt=50.0811%2C53.1208&source=mapframe&utm_source=mapframe&z=18.61" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
              <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 group-hover:border-red-500/50 flex items-center justify-center font-bold text-red-500">
                Я
              </div>
              Мы на Яндекс.Картах
            </a>
          </div>

          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} АВТОМИГ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
