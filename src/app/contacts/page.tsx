import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты | Свяжитесь с нами",
  description: "Оставьте заявку или свяжитесь с нами в удобном мессенджере для расчета стоимости авто из Европы.",
};

export default function ContactsPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Контакты</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Info */}
          <div className="flex flex-col space-y-8 h-full">
            <div className="glass-dark rounded-2xl p-8 border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-6">Свяжитесь с нами</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500">📞</div>
                  <div>
                    <p className="text-sm text-slate-500">Телефон</p>
                    <a href="tel:+79809751463" className="text-lg font-medium text-white hover:text-blue-400 transition-colors">+7 (980) 975-14-63</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">💬</div>
                  <div>
                    <p className="text-sm text-slate-500">WhatsApp</p>
                    <a href="https://wa.me/79809751463" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-green-400 transition-colors">Написать в WhatsApp</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-500">✈️</div>
                  <div>
                    <p className="text-sm text-slate-500">Telegram</p>
                    <a href="https://t.me/Automigsup" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white hover:text-sky-400 transition-colors">@Automigsup</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">✉️</div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <a href="mailto:info@automig.ru" className="text-lg font-medium text-white hover:text-orange-400 transition-colors">info@automig.ru</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">📍</div>
                  <div>
                    <p className="text-sm text-slate-500">Офис</p>
                    <p className="text-lg font-medium text-white">г. Самара, Долотный пер., д.7, оф. 10</p>
                    <p className="text-xs text-slate-400 mt-1">443065, Самарская область</p>
                  </div>
                </div>
              </div>
            </div>

            {/* External platforms */}
            <div className="glass-dark rounded-2xl p-8 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Мы на других площадках</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                
                <a href="#" className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-white/5 hover:border-red-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-[#fce0e5]/10 flex items-center justify-center text-[#f0324b] font-extrabold text-2xl mb-3 group-hover:scale-110 transition-transform">
                    Я
                  </div>
                  <span className="text-white font-medium text-sm">Яндекс.Карты</span>
                </a>

                <a href="#" className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-white/5 hover:border-[#0077FF]/30 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-[#0077FF]/10 flex items-center justify-center text-[#0077FF] font-extrabold text-xl mb-3 group-hover:scale-110 transition-transform">
                    ВК
                  </div>
                  <span className="text-white font-medium text-sm">ВКонтакте</span>
                </a>
              </div>
            </div>

            {/* Trust Block */}
            <div className="glass-dark rounded-2xl p-8 border border-white/5 bg-gradient-to-br from-blue-900/20 to-transparent flex-grow flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                Надежность и прозрачность
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Мы работаем строго по официальному договору. Перед покупкой в Европе каждый автомобиль проходит полную техническую и юридическую проверку. На этапе доставки все машины застрахованы. Вы всегда знаете, на каком этапе находится ваш автомобиль.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-8 h-full">
            {/* Contact Form */}
            <div className="glass-dark rounded-2xl p-8 border border-white/5 shadow-[0_0_30px_rgba(37,99,235,0.1)]">
              <h3 className="text-2xl font-bold text-white mb-6">Оставить заявку</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Имя</label>
                  <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Как к вам обращаться?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Телефон</label>
                  <input type="tel" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Комментарий (опционально)</label>
                  <textarea rows={3} className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Какое авто ищете?"></textarea>
                </div>
                <button type="button" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all mt-4">
                  Отправить заявку
                </button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь с <a href="/policy" className="underline hover:text-white">политикой конфиденциальности</a>
                </p>
              </form>
            </div>

            {/* Working Hours */}
            <div className="glass-dark rounded-2xl p-8 border border-white/5 bg-gradient-to-br from-slate-800/50 to-transparent flex-grow flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Режим работы
              </h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span>Пн - Пт:</span>
                  <span className="font-medium text-white">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/5">
                  <span>Суббота:</span>
                  <span className="font-medium text-white">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Воскресенье:</span>
                  <span className="font-medium text-slate-500">Выходной</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex gap-3 items-start">
                <div className="mt-0.5 text-blue-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <p className="text-sm text-blue-100/90 leading-relaxed">
                  Оставляйте заявки на сайте круглосуточно. Мы свяжемся с вами в ближайшее рабочее время!
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Map Widget */}
        <div className="mt-12 glass-dark rounded-2xl p-4 sm:p-8 border border-white/5 shadow-[0_0_30px_rgba(37,99,235,0.05)]">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Мы на карте</h3>
          <div className="w-full h-[400px] rounded-xl overflow-hidden border border-white/10 bg-slate-800 relative">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?text=Самара,+Долотный+пер.,+д.7&z=16" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allowFullScreen={true}
              className="absolute inset-0"
              title="Yandex Map"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
