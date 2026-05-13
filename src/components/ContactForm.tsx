"use client";

import { useState } from "react";
import { getStoredUtmParams } from "@/lib/utm";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    messenger: "whatsapp",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const utmParams = getStoredUtmParams();
    const payload = {
      ...formData,
      ...utmParams,
      source_page: window.location.pathname,
    };

    try {
      // Placeholder for actual API call
      console.log("Sending lead:", payload);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus("success");
      window.location.href = "/thank-you";
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12 animate-fade-in">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Заявка принята!</h3>
        <p className="text-slate-400">Мы свяжемся с вами в течение 15 минут.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 animate-slide-up">
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-1.5">Как к вам обращаться?</label>
        <input
          required
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-slate-800/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
          placeholder="Имя"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-slate-400 mb-1.5">Ваш номер телефона</label>
        <input
          required
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full bg-slate-800/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
          placeholder="+7 (___) ___-__-__"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-400 mb-1.5">Где удобнее ответить?</label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, messenger: "whatsapp" })}
            className={`p-3 rounded-xl border transition-all flex items-center justify-center gap-2 font-medium ${
              formData.messenger === "whatsapp" 
                ? "bg-green-500/20 border-green-500/50 text-green-400" 
                : "bg-slate-800/20 border-white/5 text-slate-400 hover:border-white/10"
            }`}
          >
            <span>WhatsApp</span>
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, messenger: "telegram" })}
            className={`p-3 rounded-xl border transition-all flex items-center justify-center gap-2 font-medium ${
              formData.messenger === "telegram" 
                ? "bg-sky-500/20 border-sky-500/50 text-sky-400" 
                : "bg-slate-800/20 border-white/5 text-slate-400 hover:border-white/10"
            }`}
          >
            <span>Telegram</span>
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-400 mb-1.5">Комментарий (какое авто ищете?)</label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-slate-800/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
          placeholder="Например: BMW X5 G05 2020-2021"
        ></textarea>
      </div>

      <button
        disabled={status === "loading"}
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.98]"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Отправка...
          </span>
        ) : "Получить расчет стоимости"}
      </button>
      
      <p className="text-[10px] text-slate-500 text-center leading-tight">
        Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с <a href="/policy" className="underline hover:text-slate-400">политикой конфиденциальности</a>.
      </p>
    </form>
  );
}
