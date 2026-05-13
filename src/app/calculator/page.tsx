import Header from "@/components/Header";
import { Metadata } from "next";
import Calculator from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Калькулятор стоимости растаможки авто из Европы",
  description: "Рассчитайте точную стоимость доставки, растаможки и утильсбора автомобиля из Европы под ключ.",
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Калькулятор авто из Европы</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Узнайте реальную стоимость автомобиля с учетом всех расходов: таможенной пошлины, утильсбора, доставки и полного оформления под ключ.
          </p>
        </div>
        
        <Calculator />
      </main>
    </div>
  );
}
