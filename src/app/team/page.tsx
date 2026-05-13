import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Наша команда экспертов",
  description: "Познакомьтесь с командой профессионалов, которые подберут, проверят и доставят ваш автомобиль.",
};

const teamMembers = [
  { id: 1, name: "Николай Сурков", role: "Старший менеджер", image: "https://xn--80aedttl1a.com/team/surkov.png" },
  { id: 2, name: "Александр Зайцев", role: "Менеджер", image: "https://xn--80aedttl1a.com/team/zaitsev.png" },
  { id: 3, name: "Сергей Смирнов", role: "Менеджер", image: "https://xn--80aedttl1a.com/team/smirnov.jpg" },
  { id: 4, name: "Юрий Минин", role: "Менеджер", image: "https://xn--80aedttl1a.com/team/minin.jpg" },
  { id: 5, name: "Невьявцев Олег Алексеевич", role: "Менеджер", image: "https://xn--80aedttl1a.com/team/oleg.png" },
  { id: 6, name: "Максим Кириенко", role: "Менеджер", image: "https://xn--80aedttl1a.com/team/kirienko.png" },
  { id: 7, name: "Юрий Смирнов", role: "Менеджер", image: "https://xn--80aedttl1a.com/team/ysmirnov.png" },
  { id: 8, name: "Виктор Ушаков", role: "Менеджер", image: "https://xn--80aedttl1a.com/team/ushakov.png" },
  { id: 9, name: "Андрей Коваленко", role: "Менеджер", image: "https://xn--80aedttl1a.com/team/kovalenko.jpg" },
  { id: 10, name: "Дмитрий Бондарь", role: "Менеджер", image: "/team/bondar.jpg" },
  { id: 11, name: "Ветчанов Андрей", role: "Менеджер", image: "https://m-tehnix.ru/assets/AndreyVetchanov-BtEMkRDT.jpg" },
  { id: 12, name: "Дмитрий Лиховских", role: "Менеджер", image: "/team/vetchanov.jpg" },
  { id: 13, name: "Помазан Юрий", role: "Менеджер", image: "/team/lihovskih.jpg" },
  { id: 14, name: "Андрейцева Яна", role: "Менеджер", image: "/team/andreeitseva.png" },
  { id: 15, name: "Ольга Макарова", role: "Менеджер", image: "/team/makarova.jpg" },
  { id: 16, name: "Васнецова Анастасия", role: "Менеджер", image: "/team/vasnetsova.jpg" },
  { id: 17, name: "Дмитрий Якименко", role: "Менеджер", image: "https://m-tehnix.ru/assets/YakimenkoDmitriy-BZRVBEBc.jpg" },
];

export default function TeamPage() {
  const seniorManager = teamMembers.find(m => m.id === 1);
  const otherManagers = teamMembers.filter(m => m.id !== 1);

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Наша команда</h1>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          Мы — команда энтузиастов и профессионалов, которые любят автомобили и делают процесс их покупки прозрачным и безопасным.
        </p>

        {/* Старший менеджер (Николай Сурков) */}
        {seniorManager && (
          <div className="flex justify-center mb-20 relative">
            <div className="absolute top-0 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold px-6 py-2 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] z-10 uppercase tracking-widest text-sm">
              Руководитель отдела
            </div>
            <div className="glass-dark rounded-[2.5rem] p-10 border border-blue-500/40 text-center max-w-md w-full relative shadow-[0_0_40px_rgba(37,99,235,0.15)] transition-all hover:-translate-y-2 hover:border-blue-400/60 pt-16">
              <div className="w-56 h-56 mx-auto bg-slate-800 rounded-full mb-6 border-4 border-blue-500/50 flex items-center justify-center overflow-hidden shadow-2xl">
                {seniorManager.image ? (
                  <img src={seniorManager.image} alt={seniorManager.name} className="w-full h-full object-cover" />
                ) : (
                  <svg className="w-20 h-20 opacity-50 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                )}
              </div>
              <h3 className="font-extrabold text-white text-3xl mb-2">{seniorManager.name}</h3>
              <p className="text-blue-400 font-medium mb-8 text-lg">{seniorManager.role}</p>
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] w-full text-lg">
                Связаться лично
              </button>
            </div>
          </div>
        )}

        {/* Разделитель */}
        <div className="flex items-center gap-6 mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-white/10 flex-grow"></div>
          <h2 className="text-xl font-bold text-slate-300 uppercase tracking-widest">Менеджеры</h2>
          <div className="h-px bg-gradient-to-l from-transparent via-white/10 to-white/10 flex-grow"></div>
        </div>

        {/* Остальные менеджеры */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {otherManagers.map((member) => (
            <div key={member.id} className="glass-dark rounded-3xl p-8 border border-white/5 text-center transition-all hover:border-white/20 hover:transform hover:-translate-y-2 shadow-lg">
              <div className="w-36 h-36 mx-auto bg-slate-800 rounded-full mb-6 border-2 border-white/10 flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <svg className="w-16 h-16 opacity-30 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                )}
              </div>
              <h3 className="font-bold text-white text-xl mb-1">{member.name}</h3>
              <p className="text-sm text-[var(--color-accent)] mb-6">{member.role}</p>
              <button className="text-sm bg-white/5 hover:bg-white/10 text-white font-medium py-3 px-6 rounded-full transition-colors w-full border border-white/10">
                Связаться
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
