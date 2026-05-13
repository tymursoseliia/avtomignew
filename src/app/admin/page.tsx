"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState("");

  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Простой пароль для защиты админки от случайных зевак
    if (password === "automigadmin") {
      setIsAuthorized(true);
      setError("");
    } else {
      setError("Неверный пароль");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title) {
      setError("Пожалуйста, добавьте фото и заголовок");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("title", title);
      formData.append("description", description);

      const res = await fetch("/api/admin/reviews", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Ошибка при сохранении");
      }

      setSuccess(true);
      setFile(null);
      setTitle("");
      setDescription("");
      
      // Сброс input file (хитрый трюк)
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col pt-20">
      <Header />
      
      <main className="flex-grow max-w-3xl mx-auto w-full px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Панель управления АВТОМИГ</h1>

        {!isAuthorized ? (
          <div className="glass-dark p-8 rounded-2xl max-w-md mx-auto border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">Вход в админку</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Введите пароль" 
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-3 text-white focus:border-blue-500 outline-none"
                />
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-colors">
                Войти
              </button>
            </form>
          </div>
        ) : (
          <div className="glass-dark p-8 rounded-2xl border border-white/10">
            <h2 className="text-xl font-bold text-white mb-6">Добавить новый фото-отзыв</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-300 text-sm">{error}</div>}
              {success && <div className="p-4 bg-green-900/30 border border-green-500/50 rounded-xl text-green-300 text-sm">Отзыв успешно добавлен! Он уже появился на странице отзывов.</div>}

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Фотография клиента с авто *</label>
                <input 
                  id="file-upload"
                  type="file" 
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="block w-full text-sm text-slate-400
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-600/20 file:text-blue-400
                    hover:file:bg-blue-600/30"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Заголовок (например: "Иван и его новый BMW X5") *</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Довольный клиент из Москвы" 
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-3 text-white focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Описание (опционально, краткий комментарий)</label>
                <input 
                  type="text" 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Пригнали BMW X5 2020 года за 14 дней" 
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-3 text-white focus:border-blue-500 outline-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              >
                {loading ? "Загрузка..." : "Опубликовать отзыв на сайте"}
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
