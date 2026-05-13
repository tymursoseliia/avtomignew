"use client";

import { useState } from "react";

const STEPS = [
  {
    id: 1,
    title: "Какая марка вас интересует?",
    options: ["BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Porsche", "Другая"],
  },
  {
    id: 2,
    title: "В какой бюджет планируете уложиться?",
    options: ["До 2 млн ₽", "2 - 3 млн ₽", "3 - 5 млн ₽", "5 - 10 млн ₽", "Более 10 млн ₽"],
  },
  {
    id: 3,
    title: "Предпочтительный год выпуска?",
    options: ["До 3 лет (до 2021)", "От 3 до 5 лет (2019-2021)", "Старше 5 лет"],
  }
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSelect = (answer: string) => {
    setAnswers({ ...answers, [STEPS[currentStep].title]: answer });
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      setError("Пожалуйста, введите номер телефона");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          source: "Квиз (Главная страница)",
          details: answers
        }),
      });

      if (!res.ok) throw new Error("Ошибка при отправке");
      setSuccess(true);
    } catch (err) {
      setError("Произошла ошибка. Попробуйте написать нам в Telegram.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="glass-dark rounded-3xl p-8 border border-green-500/30 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay"></div>
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Спасибо за ответы!</h3>
        <p className="text-slate-300">
          Мы уже подбираем для вас варианты. Наш менеджер свяжется с вами по номеру <span className="text-white font-bold">{phone}</span> в ближайшее время.
        </p>
      </div>
    );
  }

  const progress = ((currentStep) / (STEPS.length + 1)) * 100;

  return (
    <div className="glass-dark rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-slate-800">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="mb-8 mt-2 flex justify-between items-center text-sm font-medium text-slate-400">
        <span>Вопрос {Math.min(currentStep + 1, STEPS.length + 1)} из {STEPS.length + 1}</span>
        <span>Готовность {Math.round(progress)}%</span>
      </div>

      {currentStep < STEPS.length ? (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">{STEPS[currentStep].title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STEPS[currentStep].options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="bg-slate-800/50 hover:bg-blue-600/20 hover:border-blue-500/50 border border-slate-700/50 text-white rounded-2xl p-4 text-left font-medium transition-all hover:scale-[1.02]"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Отлично! Куда прислать подборку?</h3>
          <p className="text-slate-400 mb-8">Оставьте номер телефона, и мы бесплатно пришлем вам 5 вариантов авто, подходящих под ваши критерии.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (999) 000-00-00" 
                className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 text-white text-lg focus:border-blue-500 outline-none"
              />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 text-white font-bold py-4 rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
            >
              {loading ? "Отправка..." : "Получить подборку авто"}
            </button>
            <p className="text-xs text-slate-500 text-center mt-4">
              Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
