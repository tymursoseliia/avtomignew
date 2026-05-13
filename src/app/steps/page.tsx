import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Как мы работаем — 5 шагов до вашего авто из Европы",
  description: "Подробное описание этапов работы от подбора и проверки до таможенной очистки и выдачи ключей.",
};

export default function StepsPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Как происходит пригон авто</h1>
        
        <div className="space-y-8 max-w-3xl mx-auto mt-12">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="glass-dark rounded-2xl p-6 border border-white/5 flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center font-bold text-xl flex-shrink-0">
                {step}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Этап {step}</h3>
                <p className="text-slate-400">Здесь будет подробное описание этапа работы. Мы связываемся с дилером, проводим осмотр, оформляем документы и так далее.</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
