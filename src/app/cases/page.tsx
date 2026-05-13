import Header from "@/components/Header";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Каталог авто из Европы в наличии и под заказ",
  description: "Реальные кейсы пригнанных авто из Европы. Актуальные цены под ключ с учетом доставки и растаможки.",
};

export default async function CasesPage() {
  const { data: cars, error } = await supabase
    .from('cars')
    .select('*')
    .order('created_at', { ascending: false });

  // Fallback to empty array if error
  const safeCars = cars || [];

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Каталог автомобилей</h1>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
          Автомобили в наличии и под заказ с прозрачной историей и доставкой под ключ.
        </p>
        
        {error ? (
          <div className="text-center py-12 bg-red-500/10 rounded-2xl border border-red-500/20 text-red-400">
            Ошибка при загрузке каталога: {error.message}. Пожалуйста, убедитесь, что пакет supabase-js установлен.
          </div>
        ) : safeCars.length === 0 ? (
          <div className="text-center py-12 bg-slate-800/50 rounded-2xl border border-white/5 text-slate-400">
            Каталог пока пуст.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safeCars.map((car: any) => (
              <div key={car.id} className="glass-dark rounded-3xl overflow-hidden border border-white/5 transition-all hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] group flex flex-col">
                <div className="aspect-[4/3] bg-slate-800 relative overflow-hidden">
                  {car.images && car.images.length > 0 ? (
                    <img 
                      src={car.images[0]} 
                      alt={`${car.brand} ${car.model}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-500 bg-slate-900">Нет фото</div>
                  )}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                    {car.year} г.в.
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">{car.brand} {car.model}</h3>
                  <div className="text-2xl font-black text-[var(--color-accent)] mb-4">
                    {new Intl.NumberFormat('ru-RU').format(car.price)} ₽
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-slate-400 mb-6 flex-grow">
                    <div className="flex items-center gap-1.5">
                      <span className="opacity-60">Пробег:</span>
                      <span className="text-white font-medium">{new Intl.NumberFormat('ru-RU').format(car.mileage || 0)} км</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="opacity-60">Топливо:</span>
                      <span className="text-white font-medium">{car.fuel_type || "—"}</span>
                    </div>
                    <div className="flex items-center gap-1.5 col-span-2">
                      <span className="opacity-60">КПП:</span>
                      <span className="text-white font-medium">{car.transmission || "—"}</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://t.me/Automigsup" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-transparent text-white font-medium py-3 px-4 rounded-xl transition-all"
                  >
                    Оставить заявку
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
