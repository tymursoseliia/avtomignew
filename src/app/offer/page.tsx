import Header from "@/components/Header";

export default function OfferPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 text-slate-300 space-y-6">
        <h1 className="text-4xl font-bold text-white mb-8">Публичная оферта</h1>
        <p>Данный документ является официальным предложением (публичной офертой) компании «АВТОМИГ» и содержит все существенные условия по оказанию услуг подбора и доставки автомобилей из Европы.</p>
        <h2 className="text-2xl font-bold text-white mt-8">1. Предмет договора</h2>
        <p>Исполнитель обязуется по поручению Заказчика осуществить подбор, проверку, выкуп и доставку транспортного средства из Европы в Российскую Федерацию.</p>
        {/* ... More placeholder text ... */}
        <p>Все расчеты в калькуляторе на сайте носят ознакомительный характер и не являются окончательными.</p>
      </main>
    </div>
  );
}
