import Header from "@/components/Header";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Отзывы клиентов о пригоне авто из Европы",
  description: "Видео-отзывы, фото и скриншоты переписок с нашими клиентами, которые уже получили свои автомобили.",
};

export const dynamic = "force-dynamic";

export default async function ReviewsPage() {
  const { data: photoReviews } = await supabase
    .from("photo_reviews")
    .select("*")
    .order("created_at", { ascending: false });

  const reviews = photoReviews || [];

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Отзывы наших клиентов</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Мы ценим доверие наших клиентов. Здесь вы можете посмотреть видео-отзывы и реальные переписки с теми, кому мы уже пригнали автомобиль.</p>
        </div>
        
        {/* Видео-отзывы */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white">Видео-отзывы</h2>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "01d363de9b78ee3873acd3b169507913",
              "60058aaf39dacd9d402efc72a39c9f3c",
              "98b965fe5b4908b1c9a23e5ba26e450e",
              "df158334784b753b01b0193e98071e7a",
              "15d84626286f14a01ffadf353a1451bf",
              "ce6db9ce6c68de8ac5fa9e128063a512",
              "5ee2ff2cde5edee20397680631907200",
              "7a53eb4baaa327915035adf012d0c1bf"
            ].map((id, index) => (
              <div key={id} className="glass-dark rounded-3xl p-4 border border-white/5 transition-all hover:border-blue-500/30">
                <div className="aspect-[9/16] bg-slate-800 rounded-2xl mb-4 relative overflow-hidden border border-white/10">
                  <iframe 
                    src={`https://rutube.ru/play/embed/${id}/`} 
                    frameBorder="0" 
                    allow="clipboard-write; autoplay" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                <h3 className="font-bold text-white mb-1 text-center text-sm">Отзыв клиента #{index + 1}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Фото-отзывы */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white">Фото-отзывы счастливых клиентов</h2>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {reviews.map((review: any) => (
              <div key={review.id} className="group cursor-pointer">
                <div className="glass-dark rounded-3xl p-3 border border-white/5 transition-all hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:-translate-y-2">
                  <div className="aspect-[4/3] bg-slate-800 rounded-2xl flex flex-col items-center justify-center text-slate-500 relative overflow-hidden border border-white/10">
                    <img src={review.car_image_url} alt={review.name} className="absolute inset-0 w-full h-full object-cover" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                       <span className="bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md text-sm font-medium">Увеличить</span>
                    </div>
                  </div>
                  <div className="mt-4 px-2 pb-2">
                    <p className="text-white font-medium text-sm">{review.name}</p>
                    {review.text && <p className="text-slate-500 text-xs mt-1">{review.text}</p>}
                  </div>
                </div>
              </div>
            ))}

            {reviews.length === 0 && (
               <div className="col-span-full text-center text-slate-500 py-12 glass-dark rounded-3xl border border-white/5">
                 Фото-отзывов пока нет. Добавьте первую фотографию клиента в Админ-панели!
               </div>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}
