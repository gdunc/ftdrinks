"use client";

import { useState } from "react";
import { Lang, t } from "@/lib/translations";

const PRICES: Record<string, number> = {
  "250g": 9.9,
  "500g": 17.9,
  "1000g": 32.9,
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("250g");
  const tr = t(lang);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 5000);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--color-cream)]/95 backdrop-blur-sm border-b border-[var(--color-caramel)]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-[var(--color-roast)]">
            Frische Tasse
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#coffee" className="text-sm hover:text-[var(--color-roast)] transition">
              {tr.nav.coffee}
            </a>
            <a href="#how-it-works" className="text-sm hover:text-[var(--color-roast)] transition">
              {tr.nav.howItWorks}
            </a>
            <a href="#order" className="text-sm hover:text-[var(--color-roast)] transition">
              {tr.nav.order}
            </a>
            <a href="#about" className="text-sm hover:text-[var(--color-roast)] transition">
              {tr.nav.about}
            </a>
            <button
              onClick={() => setLang(lang === "en" ? "de" : "en")}
              className="ml-2 px-3 py-1 text-sm border border-[var(--color-caramel)] rounded-full hover:bg-[var(--color-caramel)] hover:text-white transition"
            >
              {lang === "en" ? "Deutsch" : "English"}
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "de" : "en")}
              className="px-3 py-1 text-sm border border-[var(--color-caramel)] rounded-full hover:bg-[var(--color-caramel)] hover:text-white transition"
            >
              {lang === "en" ? "DE" : "EN"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--color-caramel)]/20 bg-[var(--color-cream)] px-4 py-4 flex flex-col gap-3">
            <a href="#coffee" onClick={() => setMobileMenuOpen(false)} className="text-sm">
              {tr.nav.coffee}
            </a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-sm">
              {tr.nav.howItWorks}
            </a>
            <a href="#order" onClick={() => setMobileMenuOpen(false)} className="text-sm">
              {tr.nav.order}
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm">
              {tr.nav.about}
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 sm:px-6 bg-gradient-to-b from-[var(--color-warm-gray)] to-[var(--color-cream)]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">&#9749;</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[var(--color-espresso)]">
            {tr.hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-espresso)]/70 max-w-2xl mx-auto mb-10">
            {tr.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#order"
              className="px-8 py-3 bg-[var(--color-roast)] text-white rounded-full text-lg font-medium hover:bg-[var(--color-espresso)] transition"
            >
              {tr.hero.cta}
            </a>
            <a
              href="#coffee"
              className="px-8 py-3 border-2 border-[var(--color-roast)] text-[var(--color-roast)] rounded-full text-lg font-medium hover:bg-[var(--color-roast)] hover:text-white transition"
            >
              {tr.hero.secondary}
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "🔥", title: tr.features.roastedToday, desc: tr.features.roastedTodayDesc },
            { icon: "🚲", title: tr.features.bikeDelivery, desc: tr.features.bikeDeliveryDesc },
            { icon: "⭐", title: tr.features.specialty, desc: tr.features.specialtyDesc },
            { icon: "🕐", title: tr.features.yourSchedule, desc: tr.features.yourScheduleDesc },
          ].map((f) => (
            <div
              key={f.title}
              className="text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[var(--color-espresso)]/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coffee Selection */}
      <section id="coffee" className="py-20 px-4 sm:px-6 bg-[var(--color-warm-gray)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{tr.coffee.title}</h2>
            <p className="text-[var(--color-espresso)]/60 max-w-xl mx-auto">{tr.coffee.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tr.coffee.varieties.map((v) => (
              <div
                key={v.name}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 bg-[var(--color-caramel)]/15 text-[var(--color-roast)] rounded-full font-medium">
                    {v.origin}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{v.name}</h3>
                <p className="text-sm text-[var(--color-caramel)] font-medium mb-3">{v.notes}</p>
                <p className="text-sm text-[var(--color-espresso)]/60">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roast Levels */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
            {tr.roastLevels.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                level: tr.roastLevels.light,
                desc: tr.roastLevels.lightDesc,
                color: "#d4a574",
                emoji: "☀️",
              },
              {
                level: tr.roastLevels.medium,
                desc: tr.roastLevels.mediumDesc,
                color: "#a0724a",
                emoji: "⚖️",
              },
              {
                level: tr.roastLevels.dark,
                desc: tr.roastLevels.darkDesc,
                color: "#5c3a28",
                emoji: "🌑",
              },
              {
                level: tr.roastLevels.almondy,
                desc: tr.roastLevels.almondyDesc,
                color: "#c68b59",
                emoji: "🌰",
              },
            ].map((r) => (
              <div
                key={r.level}
                className="text-center p-6 rounded-2xl border-2 border-transparent hover:border-[var(--color-caramel)] transition bg-white shadow-sm"
              >
                <div className="text-3xl mb-3">{r.emoji}</div>
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-4"
                  style={{ backgroundColor: r.color }}
                />
                <h3 className="text-lg font-semibold mb-2">{r.level}</h3>
                <p className="text-sm text-[var(--color-espresso)]/60">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 bg-[var(--color-warm-gray)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">
            {tr.howItWorks.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "1", title: tr.howItWorks.step1, desc: tr.howItWorks.step1Desc },
              { num: "2", title: tr.howItWorks.step2, desc: tr.howItWorks.step2Desc },
              { num: "3", title: tr.howItWorks.step3, desc: tr.howItWorks.step3Desc },
              { num: "4", title: tr.howItWorks.step4, desc: tr.howItWorks.step4Desc },
            ].map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--color-roast)] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {s.num}
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-[var(--color-espresso)]/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 px-4 sm:px-6 bg-[var(--color-leaf)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{tr.sustainability.title}</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-12">{tr.sustainability.text}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { val: tr.sustainability.stat1, label: tr.sustainability.stat1Label },
              { val: tr.sustainability.stat2, label: tr.sustainability.stat2Label },
              { val: tr.sustainability.stat3, label: tr.sustainability.stat3Label },
            ].map((s) => (
              <div key={s.val}>
                <div className="text-4xl font-bold mb-1">{s.val}</div>
                <div className="text-sm opacity-75">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">{tr.order.title}</h2>

          {orderPlaced && (
            <div className="mb-8 p-4 bg-[var(--color-leaf)]/10 border border-[var(--color-leaf)] rounded-xl text-[var(--color-leaf)] text-center font-medium">
              {tr.order.orderSuccess}
            </div>
          )}

          <form onSubmit={handleOrder} className="space-y-6">
            {/* Coffee Variety */}
            <div>
              <label className="block text-sm font-medium mb-2">{tr.order.selectVariety}</label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl border border-[var(--color-caramel)]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-roast)]"
              >
                {tr.coffee.varieties.map((v) => (
                  <option key={v.name} value={v.name}>
                    {v.name} — {v.notes}
                  </option>
                ))}
              </select>
            </div>

            {/* Roast Level */}
            <div>
              <label className="block text-sm font-medium mb-2">{tr.order.selectRoast}</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { key: "light", label: tr.roastLevels.light },
                  { key: "medium", label: tr.roastLevels.medium },
                  { key: "dark", label: tr.roastLevels.dark },
                  { key: "almondy", label: tr.roastLevels.almondy },
                ].map((r) => (
                  <label key={r.key} className="cursor-pointer">
                    <input type="radio" name="roast" value={r.key} className="peer hidden" defaultChecked={r.key === "medium"} />
                    <div className="text-center py-3 px-2 rounded-xl border-2 border-[var(--color-caramel)]/20 peer-checked:border-[var(--color-roast)] peer-checked:bg-[var(--color-roast)]/5 transition text-sm font-medium">
                      {r.label}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Grind Size */}
            <div>
              <label className="block text-sm font-medium mb-2">{tr.order.selectGrind}</label>
              <select className="w-full px-4 py-3 rounded-xl border border-[var(--color-caramel)]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-roast)]">
                <option>{tr.order.grindWhole}</option>
                <option>{tr.order.grindEspresso}</option>
                <option>{tr.order.grindFilter}</option>
                <option>{tr.order.grindFrench}</option>
              </select>
            </div>

            {/* Bag Size + Price */}
            <div>
              <label className="block text-sm font-medium mb-2">{tr.order.selectSize}</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: "250g", label: tr.order.size250 },
                  { key: "500g", label: tr.order.size500 },
                  { key: "1000g", label: tr.order.size1000 },
                ].map((s) => (
                  <label key={s.key} className="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      value={s.key}
                      className="peer hidden"
                      checked={selectedSize === s.key}
                      onChange={() => setSelectedSize(s.key)}
                    />
                    <div className="text-center py-3 rounded-xl border-2 border-[var(--color-caramel)]/20 peer-checked:border-[var(--color-roast)] peer-checked:bg-[var(--color-roast)]/5 transition">
                      <div className="text-sm font-medium">{s.label}</div>
                      <div className="text-xs text-[var(--color-caramel)]">
                        &euro;{PRICES[s.key].toFixed(2).replace(".", ",")}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Delivery Window */}
            <div>
              <label className="block text-sm font-medium mb-2">{tr.order.selectWindow}</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { key: "morning", label: tr.order.windowMorning, icon: "🌅" },
                  { key: "afternoon", label: tr.order.windowAfternoon, icon: "☀️" },
                  { key: "evening", label: tr.order.windowEvening, icon: "🌆" },
                ].map((w) => (
                  <label key={w.key} className="cursor-pointer">
                    <input
                      type="radio"
                      name="window"
                      value={w.key}
                      className="peer hidden"
                      required
                    />
                    <div className="text-center py-3 px-2 rounded-xl border-2 border-[var(--color-caramel)]/20 peer-checked:border-[var(--color-roast)] peer-checked:bg-[var(--color-roast)]/5 transition">
                      <div className="text-lg mb-1">{w.icon}</div>
                      <div className="text-sm font-medium">{w.label}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">{tr.order.name}</label>
                <input
                  type="text"
                  required
                  placeholder={tr.order.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-caramel)]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-roast)]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{tr.order.email}</label>
                <input
                  type="email"
                  required
                  placeholder={tr.order.emailPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-caramel)]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-roast)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{tr.order.deliveryAddress}</label>
              <input
                type="text"
                required
                placeholder={tr.order.addressPlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-[var(--color-caramel)]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-roast)]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">{tr.order.phone}</label>
                <input
                  type="tel"
                  placeholder={tr.order.phonePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-caramel)]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-roast)]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{tr.order.notes}</label>
                <input
                  type="text"
                  placeholder={tr.order.notesPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--color-caramel)]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-roast)]"
                />
              </div>
            </div>

            {/* Price Summary */}
            <div className="flex items-center justify-between p-4 bg-[var(--color-warm-gray)] rounded-xl">
              <span className="font-medium">{tr.order.price}</span>
              <span className="text-2xl font-bold text-[var(--color-roast)]">
                &euro;{PRICES[selectedSize].toFixed(2).replace(".", ",")}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[var(--color-roast)] text-white rounded-xl text-lg font-semibold hover:bg-[var(--color-espresso)] transition"
            >
              {tr.order.submit}
            </button>
          </form>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 sm:px-6 bg-[var(--color-warm-gray)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{tr.about.title}</h2>
          <p className="text-lg text-[var(--color-espresso)]/70 leading-relaxed mb-8">
            {tr.about.text}
          </p>
          <p className="text-xl font-semibold italic text-[var(--color-roast)]">
            {tr.about.tagline}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-espresso)] text-white/80 py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Frische Tasse</h3>
            <p className="text-sm">{tr.footer.tagline}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">{tr.footer.quickLinks}</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#coffee" className="hover:text-white transition">
                {tr.nav.coffee}
              </a>
              <a href="#how-it-works" className="hover:text-white transition">
                {tr.nav.howItWorks}
              </a>
              <a href="#order" className="hover:text-white transition">
                {tr.nav.order}
              </a>
              <a href="#about" className="hover:text-white transition">
                {tr.nav.about}
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">{tr.footer.contact}</h4>
            <div className="text-sm flex flex-col gap-2">
              <span>hallo@frischetasse.de</span>
              <span>+49 341 123 4567</span>
              <span className="mt-2 font-medium text-white/60">{tr.footer.hours}</span>
              <span>{tr.footer.hoursDetail}</span>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between text-xs text-white/40">
          <span>{tr.footer.copyright}</span>
          <span>{tr.footer.madeWith} &#10084;</span>
        </div>
      </footer>
    </div>
  );
}
