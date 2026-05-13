import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О компании АВТОМИГ - Авто из Европы",
  description: "АВТОМИГ — команда специалистов с опытом в подборе и импорте автомобилей более 13 лет. Честность, прозрачность и профессионализм.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">О компании</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="glass-dark rounded-2xl p-8 border border-white/5">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
                  <strong className="text-white">«АВТОМИГ»</strong> — команда специалистов с опытом в подборе и импорте автомобилей более 13 лет.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Мы работаем напрямую с европейскими дилерами, аукционами и проверенными продавцами, чтобы вы получали честный, прозрачный и выгодный вариант без переплат перекупам. Для нас важно, чтобы клиент понимал каждый этап сделки и был уверен в своём выборе — именно поэтому мы предлагаем полную прозрачность на каждом этапе работы.
                </p>
              </div>
              <div className="w-full md:w-64 flex-shrink-0 aspect-[9/16] bg-slate-800 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://rutube.ru/play/embed/1d1ce1c0e01297dfc5de75219470a824" 
                  frameBorder="0" 
                  allow="clipboard-write; autoplay" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-8">Чем мы занимаемся</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Подбор авто под ваш бюджет и запросы",
                "Проверка истории по базам и по VIN",
                "Организация осмотра и диагностики",
                "Переговоры с продавцом и выкуп",
                "Доставка авто в Россию",
                "Растаможка и оформление всех документов",
                "Постановка на учёт и передача автомобиля вам"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 glass p-4 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center flex-shrink-0">✓</div>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-400 mt-6 text-center italic">Вы получаете готовый к эксплуатации автомобиль, который уже прошел все юридические и технические этапы.</p>
          </section>

          <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Наш принцип — честность и прозрачность</h2>
            <p className="text-slate-400 text-center mb-8">Мы открыто показываем из каких стран берём автомобили, как формируется итоговая стоимость и какие платежи вы оплачиваете. Никаких скрытых комиссий. Все условия закрепляем в договоре.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mt-12">
              <div>
                <div className="text-4xl mb-4">💰</div>
                <h3 className="font-bold text-white mb-2">Экономия до 30%</h3>
                <p className="text-sm text-slate-500">по сравнению с покупкой аналогичного авто на внутреннем рынке РФ</p>
              </div>
              <div>
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="font-bold text-white mb-2">Честная диагностика</h3>
                <p className="text-sm text-slate-500">Тройная проверка: юридическая чистота, пробег и техсостояние ДВС</p>
              </div>
              <div>
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-bold text-white mb-2">Полное сопровождение</h3>
                <p className="text-sm text-slate-500">Вы не занимаетесь бюрократией и логистикой, всё делаем мы</p>
              </div>
              <div>
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="font-bold text-white mb-2">Доставка за 2 недели</h3>
                <p className="text-sm text-slate-500">Быстрее рынка на 25% благодаря налаженным цепочкам логистики</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
