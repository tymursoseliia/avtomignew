import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white tracking-tight">
                АВТО<span className="text-[var(--color-accent)]">МИГ</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 lg:space-x-8 text-sm font-medium text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/cases" className="hover:text-white transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-white transition-colors">
                  Калькулятор
                </Link>
              </li>
              <li>
                <Link href="/credit" className="hover:text-white transition-colors">
                  Автокредит
                </Link>
              </li>
              <li>
                <Link href="/steps" className="hover:text-white transition-colors">
                  Этапы
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Команда
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA / Contact */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+79809751463" className="flex items-center gap-2 text-white font-bold text-base hover:text-blue-400 transition-colors">
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +7 (980) 975-14-63
            </a>
            <Link
              href="/contacts"
              className="text-sm font-semibold text-white bg-[var(--color-primary-light)] hover:bg-blue-500 px-5 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
            >
              Оставить заявку
            </Link>
          </div>

          {/* Mobile menu button (placeholder) */}
          <div className="md:hidden flex items-center">
            <button className="text-slate-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
