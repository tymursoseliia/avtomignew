import Header from "@/components/Header";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-xl w-full glass-card rounded-[3rem] p-12 text-center animate-slide-up border border-blue-500/20 shadow-[0_0_50px_rgba(37,99,235,0.1)]">
          <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-8 shadow-inner">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </div>
          
          <h1 className="text-4xl font-black text-white mb-6">Спасибо за заявку!</h1>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">
            Мы получили ваши данные и уже начали расчет. Эксперт свяжется с вами в течение 15 минут для уточнения деталей.
          </p>
          
          <div className="space-y-4">
            <Link 
              href="/" 
              className="block w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-600/20"
            >
              Вернуться на главную
            </Link>
            <a 
              href="https://t.me/Automigsup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full py-4 glass text-white font-bold rounded-2xl border border-white/10 hover:bg-white/5 transition-all"
            >
              Написать нам в Telegram
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-center gap-6">
             <div className="text-center">
                <p className="text-2xl font-bold text-white">13+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">лет опыта</p>
             </div>
             <div className="w-px h-8 bg-white/10"></div>
             <div className="text-center">
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">авто пригнано</p>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
