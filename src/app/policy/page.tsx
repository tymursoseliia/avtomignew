import Header from "@/components/Header";

export default function PolicyPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 text-slate-300 space-y-6">
        <h1 className="text-4xl font-bold text-white mb-8">Политика конфиденциальности</h1>
        <p>Настоящая политика конфиденциальности действует в отношении всей информации, которую сайт «АВТОМИГ» может получить о Пользователе во время использования сайта.</p>
        <h2 className="text-2xl font-bold text-white mt-8">1. Общие положения</h2>
        <p>Использование Пользователем сайта означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя.</p>
        {/* ... More placeholder text ... */}
        <p>Мы собираем только те данные, которые необходимы для связи с вами и расчета стоимости автомобиля: Имя, Телефон, а также параметры интересующего вас авто.</p>
      </main>
    </div>
  );
}
