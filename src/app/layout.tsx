import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import FloatingWidget from "@/components/FloatingWidget";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Пригон авто из Европы под ключ в РФ — расчёт стоимости",
  description: "Подбор, проверка, доставка, растаможка и оформление авто из Европы. Рассчитайте стоимость автомобиля под ключ и получите 3 варианта под ваш бюджет.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-slate-900 text-slate-50 font-sans">
        {children}
        <FloatingWidget />
        
        {/* Yandex Metrika Placeholder */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(9651463, "init", {
                 clickmap:true,
                 trackLinks:true,
                 accurateTrackBounce:true,
                 webvisor:true
            });
          `}
        </Script>
      </body>
    </html>
  );
}
