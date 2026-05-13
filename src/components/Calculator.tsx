"use client";

import { useState, useEffect } from "react";

const EUR_RATE = 100; // Примерный курс евро к рублю
const DELIVERY_AND_FEES = 350000; // Фиксированная сумма на доставку, ЭПТС, СБКТС и услуги брокера

export default function Calculator() {
  const [priceEur, setPriceEur] = useState<number | "">("");
  const [age, setAge] = useState<"less3" | "3to5" | "more5">("3to5");
  const [engineType, setEngineType] = useState<"petrol" | "diesel" | "electric">("petrol");
  const [volume, setVolume] = useState<number | "">("");

  const [showLeadForm, setShowLeadForm] = useState(false);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [results, setResults] = useState({
    carPriceRub: 0,
    customsDutyRub: 0,
    scrapageFeeRub: 0,
    totalRub: 0,
  });

  useEffect(() => {
    calculate();
  }, [priceEur, age, engineType, volume]);

  const calculate = () => {
    const price = Number(priceEur) || 0;
    const vol = Number(volume) || 0;

    if (price === 0) {
      setResults({ carPriceRub: 0, customsDutyRub: 0, scrapageFeeRub: 0, totalRub: 0 });
      return;
    }

    let customsDutyEur = 0;
    let scrapageFeeRub = age === "less3" ? 3400 : 5200; // Льготный утильсбор для физлиц

    if (engineType === "electric") {
      customsDutyEur = price * 0.15; // 15% пошлина на электро
    } else {
      if (age === "less3") {
        customsDutyEur = price * 0.48; // 48% от стоимости
      } else if (age === "3to5") {
        if (vol <= 1000) customsDutyEur = vol * 1.5;
        else if (vol <= 1500) customsDutyEur = vol * 1.7;
        else if (vol <= 1800) customsDutyEur = vol * 2.5;
        else if (vol <= 2300) customsDutyEur = vol * 2.7;
        else if (vol <= 3000) customsDutyEur = vol * 3.0;
        else customsDutyEur = vol * 3.6;
      } else {
        // Старше 5 лет
        if (vol <= 1000) customsDutyEur = vol * 3.0;
        else if (vol <= 1500) customsDutyEur = vol * 3.2;
        else if (vol <= 1800) customsDutyEur = vol * 3.5;
        else if (vol <= 2300) customsDutyEur = vol * 4.8;
        else if (vol <= 3000) customsDutyEur = vol * 5.0;
        else customsDutyEur = vol * 5.7;
      }
    }

    const carPriceRub = price * EUR_RATE;
    const customsDutyRub = customsDutyEur * EUR_RATE;
    const totalRub = carPriceRub + customsDutyRub + scrapageFeeRub + DELIVERY_AND_FEES;

    setResults({
      carPriceRub,
      customsDutyRub,
      scrapageFeeRub,
      totalRub,
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(value);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setLoading(true);
    
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          source: "Калькулятор",
          details: {
            "Цена в Европе (€)": priceEur,
            "Двигатель": engineType,
            "Объем (см3)": volume,
            "Возраст": age,
            "Итого под ключ (₽)": results.totalRub
          }
        }),
      });
      if (res.ok) {
        setSuccess(true);
        setShowLeadForm(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Форма ввода */}
      <div className="lg:col-span-2 glass-dark rounded-[2rem] p-8 border border-white/10 shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-6">Параметры автомобиля</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-300">Стоимость авто в Европе (€)</label>
            <input 
              type="number" 
              value={priceEur}
              onChange={(e) => setPriceEur(e.target.value ? Number(e.target.value) : "")}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-lg" 
              placeholder="Например, 25000" 
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-300">Тип двигателя</label>
            <div className="flex bg-slate-800/50 p-1 rounded-xl border border-slate-700">
              <button 
                onClick={() => setEngineType("petrol")}
                className={`flex-1 py-3 text-sm font-medium rounded-lg transition-colors ${engineType === "petrol" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
              >
                Бензин
              </button>
              <button 
                onClick={() => setEngineType("diesel")}
                className={`flex-1 py-3 text-sm font-medium rounded-lg transition-colors ${engineType === "diesel" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
              >
                Дизель
              </button>
              <button 
                onClick={() => setEngineType("electric")}
                className={`flex-1 py-3 text-sm font-medium rounded-lg transition-colors ${engineType === "electric" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
              >
                Электро
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-300">Возраст автомобиля</label>
            <div className="grid grid-cols-3 gap-2">
              <button 
                onClick={() => setAge("less3")}
                className={`py-3 text-sm font-medium rounded-xl border transition-all ${age === "less3" ? "bg-blue-600/20 border-blue-500 text-blue-400" : "bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500"}`}
              >
                До 3 лет
              </button>
              <button 
                onClick={() => setAge("3to5")}
                className={`py-3 text-sm font-medium rounded-xl border transition-all ${age === "3to5" ? "bg-blue-600/20 border-blue-500 text-blue-400" : "bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500"}`}
              >
                От 3 до 5 лет
              </button>
              <button 
                onClick={() => setAge("more5")}
                className={`py-3 text-sm font-medium rounded-xl border transition-all ${age === "more5" ? "bg-blue-600/20 border-blue-500 text-blue-400" : "bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500"}`}
              >
                Старше 5 лет
              </button>
            </div>
          </div>

          <div className={`space-y-3 transition-opacity duration-300 ${engineType === "electric" ? "opacity-50 pointer-events-none" : "opacity-100"}`}>
            <label className="block text-sm font-medium text-slate-300">Объем двигателя (см³)</label>
            <input 
              type="number" 
              value={volume}
              onChange={(e) => setVolume(e.target.value ? Number(e.target.value) : "")}
              disabled={engineType === "electric"}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-lg disabled:bg-slate-900" 
              placeholder="Например, 1998" 
            />
          </div>
        </div>

        {/* Инфо блок для заполнения пустоты */}
        <div className="mt-8 pt-8 border-t border-slate-700/50">
          <h3 className="text-lg font-bold text-white mb-5">Что входит в фиксированную стоимость доставки «под ключ»?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="text-blue-400 mt-1 bg-blue-500/10 p-2 rounded-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">Выкуп и полная проверка</p>
                <p className="text-xs text-slate-400">Технический осмотр экспертом перед покупкой, проверка юр. чистоты в Европе.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-blue-400 mt-1 bg-blue-500/10 p-2 rounded-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">Безопасная логистика</p>
                <p className="text-xs text-slate-400">Доставка застрахованным закрытым автовозом прямо до вашего города.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-blue-400 mt-1 bg-blue-500/10 p-2 rounded-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">Таможенная очистка</p>
                <p className="text-xs text-slate-400">Оплата всех пошлин, получение СБКТС, ЭПТС и оплата льготного утильсбора.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-blue-400 mt-1 bg-blue-500/10 p-2 rounded-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">Оформление в РФ</p>
                <p className="text-xs text-slate-400">Полное сопровождение сделки и помощь при постановке автомобиля на учет в ГИБДД.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Результат */}
      <div className="glass rounded-[2rem] p-1 border border-blue-500/30 shadow-[0_0_40px_rgba(37,99,235,0.15)] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px]"></div>
        
        <div className="bg-slate-950/80 rounded-[1.8rem] p-8 h-full flex flex-col relative z-10 backdrop-blur-xl border border-white/5">
          <h3 className="text-xl font-bold text-white mb-6">Расчет стоимости</h3>
          
          <div className="space-y-4 flex-grow relative">
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <span className="text-slate-400">Авто в Европе</span>
              <span className={`font-medium text-white transition-all duration-500 ${results.totalRub > 0 ? "blur-md select-none" : ""}`}>
                {formatCurrency(results.carPriceRub)} ₽
              </span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <span className="text-slate-400">Таможенная пошлина</span>
              <span className={`font-medium text-white transition-all duration-500 ${results.totalRub > 0 ? "blur-md select-none" : ""}`}>
                {formatCurrency(results.customsDutyRub)} ₽
              </span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <span className="text-slate-400 text-sm">Утильсбор (льготный)</span>
              <span className={`font-medium text-white transition-all duration-500 ${results.totalRub > 0 ? "blur-md select-none" : ""}`}>
                {formatCurrency(results.scrapageFeeRub)} ₽
              </span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <span className="text-slate-400 text-sm">Оформление и доставка</span>
              <span className={`font-medium text-white transition-all duration-500 ${results.totalRub > 0 ? "blur-md select-none" : ""}`}>
                {formatCurrency(results.totalRub > 0 ? DELIVERY_AND_FEES : 0)} ₽
              </span>
            </div>

            {results.totalRub > 0 && !showLeadForm && !success && (
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <a 
                  href="https://t.me/Automigsup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600/90 hover:bg-blue-500 text-white text-xs font-bold py-2 px-4 rounded-full backdrop-blur-sm border border-white/20 shadow-xl transition-all hover:scale-105"
                >
                  Написать менеджеру
                </a>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-blue-500/20 relative">
            <p className="text-slate-400 text-sm mb-1">Итоговая стоимость под ключ:</p>
            <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 transition-all duration-500 ${results.totalRub > 0 ? "blur-lg select-none" : ""}`}>
              {results.totalRub > 0 ? formatCurrency(results.totalRub) : "0"} ₽
            </div>
            {results.totalRub > 0 && (
              <div className="absolute bottom-10 left-0 right-0 flex justify-center pointer-events-none">
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-tighter opacity-80 animate-pulse">Уточняйте у менеджера</span>
              </div>
            )}
            <p className="text-xs text-slate-500 mt-2">* Расчет является предварительным. Точная сумма зависит от курса валют ЦБ на день оплаты.</p>
          </div>
          
          {success ? (
            <div className="mt-6 p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-center">
              <p className="text-green-400 font-bold">Заявка отправлена!</p>
              <p className="text-sm text-green-300/80 mt-1">Мы скоро свяжемся с вами.</p>
            </div>
          ) : showLeadForm ? (
            <form onSubmit={handleLeadSubmit} className="mt-6 space-y-3">
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ваш телефон" 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500"
                required
              />
              <button 
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all"
              >
                {loading ? "Отправка..." : "Отправить расчет"}
              </button>
            </form>
          ) : (
            <button 
              onClick={() => setShowLeadForm(true)}
              className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform hover:-translate-y-0.5"
            >
              Оставить заявку на подбор
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
