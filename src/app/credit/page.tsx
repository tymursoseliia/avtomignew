import Header from "@/components/Header";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Автокредит на авто из Европы - АВТОМИГ",
  description: "Выгодный автокредит на автомобили из Европы. Быстрое одобрение, низкие процентные ставки, удобные сроки кредитования от компании АВТОМИГ.",
};

export default function CreditPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Автокредит на авто из Европы</h1>
        
        <div className="max-w-5xl mx-auto">
          
          <section className="glass-dark rounded-2xl p-8 border border-white/5 mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-6">Финансирование без переплат</h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
                  Мы сотрудничаем с ведущими банками РФ, чтобы вы могли приобрести автомобиль мечты комфортно и без финансовых перегрузок.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span className="text-slate-400">Прозрачные условия кредитования</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span className="text-slate-400">Никаких скрытых страховок</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                    <span className="text-slate-400">Быстрое решение за 15 минут</span>
                  </li>
                </ul>
                <p className="text-sm text-slate-500 italic">Посмотрите короткий разбор от наших экспертов об особенностях автокредитования при привозе авто из-за рубежа.</p>
              </div>
              
              {/* Video */}
              <div className="w-full md:w-64 flex-shrink-0 aspect-[9/16] bg-slate-800 rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://rutube.ru/play/embed/91b05432d439bf460f205a47fc5c0cce" 
                  frameBorder="0" 
                  allow="clipboard-write; autoplay" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-dark p-8 rounded-2xl border border-blue-500/20 text-center">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-xl font-bold text-white mb-4">Выгодные Ставки</h3>
              <p className="text-slate-400 text-sm">Подаем заявку сразу в несколько банков-партнеров, чтобы выбрать предложение с самой низкой переплатой. Ставка рассматривается индивидуально.</p>
            </div>
            
            <div className="glass-dark p-8 rounded-2xl border border-blue-500/20 text-center">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-white mb-4">Удобные Сроки</h3>
              <p className="text-slate-400 text-sm">Срок кредитования до 7 лет. Досрочное погашение без штрафов и комиссий, что позволяет снизить итоговую переплату.</p>
            </div>
            
            <div className="glass-dark p-8 rounded-2xl border border-blue-500/20 text-center">
              <div className="text-4xl mb-4">👍</div>
              <h3 className="text-xl font-bold text-white mb-4">Лояльные Условия</h3>
              <p className="text-slate-400 text-sm">Одобрение по 2 документам. Во многих случаях взнос от 0%. Без навязанных дорогостоящих страховок «КАСКО на 5 лет».</p>
            </div>
          </div>

          <div className="glass p-10 rounded-3xl text-center border border-white/20 bg-gradient-to-r from-blue-900/40 to-slate-900/40">
            <h3 className="text-2xl font-bold text-white mb-4">Получите точный расчет за 15 минут</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Оставьте заявку. Наш кредитный специалист свяжется с вами, бесплатно проконсультирует и сделает точный расчет графиков платежей в 3-х лучших банках.
            </p>
            <Link href="/contacts" className="inline-flex justify-center items-center px-10 py-4 text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/50">
              Оставить заявку на кредит
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
