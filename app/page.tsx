'use client'

import { ChevronDown, Zap, Shield, Users, Gamepad2, Gift, Trophy, Lock, Smartphone, Menu, Search, Home, Settings } from 'lucide-react'
import { useState } from 'react'

export default function Page() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-[#0e0f14] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0e0f14]/98 backdrop-blur border-b border-[#2a2b33] py-3 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-[#ff0000] flex items-center justify-center font-black text-white text-lg">
              N
            </div>
            <div className="hidden sm:block">
              <div className="font-black text-base">NORM</div>
              <div className="font-black text-[10px] text-[#ff0000]">CASINO</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-2 hover:text-[#ff0000] transition font-semibold text-sm">
              <span>🎁</span> Бонусы
            </button>
            <button className="flex items-center gap-2 hover:text-[#ff0000] transition font-semibold text-sm">
              <span>🎰</span> Казино
            </button>
            <button className="flex items-center gap-2 hover:text-[#ff0000] transition font-semibold text-sm">
              <span>🎥</span> Live Казино
            </button>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[#2a2b33] transition">
              <Search size={20} />
            </button>
            <button className="hidden md:block px-5 py-2 bg-transparent hover:bg-[#2a2b33] text-white font-semibold rounded text-sm transition border border-[#2a2b33]">
              Вход
            </button>
            <button className="hidden md:block px-5 py-2 bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold rounded text-sm transition">
              Регистрация
            </button>
            <button 
              className="md:hidden p-2 hover:bg-[#2a2b33] rounded-lg transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#2a2b33] mt-3 pt-3 px-4">
            <button className="w-full text-left py-2 px-3 hover:bg-[#2a2b33] rounded font-semibold text-sm">🎁 Бонусы</button>
            <button className="w-full text-left py-2 px-3 hover:bg-[#2a2b33] rounded font-semibold text-sm">🎰 Казино</button>
            <button className="w-full text-left py-2 px-3 hover:bg-[#2a2b33] rounded font-semibold text-sm">🎥 Live Казино</button>
            <div className="border-t border-[#2a2b33] mt-3 pt-3 flex gap-2">
              <button className="flex-1 py-2 bg-transparent hover:bg-[#2a2b33] text-white font-semibold rounded text-sm transition border border-[#2a2b33]">Вход</button>
              <button className="flex-1 py-2 bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold rounded text-sm transition">Регистрация</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-auto md:py-0 overflow-hidden bg-[#0e0f14]">
        <div className="relative h-screen md:h-[500px] flex items-center">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/hero-bg.png)',
              backgroundPosition: 'right center'
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e0f14] via-[#0e0f14]/70 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-0">
            <div className="md:flex md:items-center md:justify-between md:gap-12">
              {/* Left Content */}
              <div className="flex-1">
                {/* Neon Text Overlay */}
                <div className="mb-6 md:absolute md:top-16 md:right-12 text-right md:text-left">
                  <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text" style={{
                    backgroundImage: 'linear-gradient(to right, #ff6600, #ffaa00, #ff0000)',
                    textShadow: '0 0 30px rgba(255, 102, 0, 0.8), 0 0 60px rgba(255, 165, 0, 0.6)'
                  }}>
                    225% + 1000 FS
                  </div>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight text-white mt-8 md:mt-0">
                  МОЩНЫЙ<br />СТАРТ:
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-white mb-8 font-medium">
                  до 225% + 1000 FS на четыре депозита
                </p>

                {/* CTA Button */}
                <button className="px-8 py-4 bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold text-lg rounded transition-all hover:shadow-lg hover:shadow-[#ff0000]/50 transform hover:scale-105">
                  Зареватсья!
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="relative z-10 bg-[#0e0f14] px-4 sm:px-6 lg:px-8 py-8 border-t border-[#2a2b33]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 md:gap-4 overflow-x-auto pb-2">
              <button className="px-4 md:px-6 py-2 md:py-3 bg-[#1a1b22] hover:bg-[#2a2b33] text-white font-semibold rounded-full whitespace-nowrap transition flex items-center gap-2 border border-[#2a2b33]">
                <span>🎰</span> Слоты
              </button>
              <button className="px-4 md:px-6 py-2 md:py-3 bg-[#1a1b22] hover:bg-[#2a2b33] text-white font-semibold rounded-full whitespace-nowrap transition flex items-center gap-2 border border-[#2a2b33]">
                <span>🎥</span> Live-казино
              </button>
              <button className="px-4 md:px-6 py-2 md:py-3 bg-[#1a1b22] hover:bg-[#2a2b33] text-white font-semibold rounded-full whitespace-nowrap transition flex items-center gap-2 border border-[#2a2b33]">
                <span>⚡</span> Быстрые игры
              </button>
              <button className="px-4 md:px-6 py-2 md:py-3 bg-[#1a1b22] hover:bg-[#2a2b33] text-white font-semibold rounded-full whitespace-nowrap transition flex items-center gap-2 border border-[#2a2b33]">
                <span>🎁</span> Бонусы
              </button>
              <button className="px-4 md:px-6 py-2 md:py-3 bg-[#1a1b22] hover:bg-[#2a2b33] text-white font-semibold rounded-full whitespace-nowrap transition flex items-center gap-2 border border-[#2a2b33]">
                <span>👑</span> Программа лояльности
              </button>
              <button className="px-4 md:px-6 py-2 md:py-3 bg-[#1a1b22] hover:bg-[#2a2b33] text-white font-semibold rounded-full whitespace-nowrap transition flex items-center gap-2 border border-[#2a2b33]">
                <span>🏆</span> Турниры
              </button>
              <button className="px-4 md:px-6 py-2 md:py-3 bg-[#1a1b22] hover:bg-[#2a2b33] text-white font-semibold rounded-full whitespace-nowrap transition flex items-center gap-2 border border-[#2a2b33]">
                <span>🎮</span> Провайдеры
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Game Cards Grid */}
      <section className="py-16 px-4 bg-[#0e0f14]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center text-balance">Популярные игры</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#1a1b22] rounded-xl overflow-hidden hover:border-[#ff0000] border border-[#2a2b33] transition-all hover:shadow-lg hover:shadow-[#ff0000]/20 group cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-[#ff3333] to-[#cc0000] flex items-center justify-center">
                <Gamepad2 size={64} className="text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Cosmic Fortune</h3>
                <p className="text-[#a0a0a8] mb-4">Космический слот с выигрышами до 1000x</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#ff0000] font-semibold">RTP 96.5%</span>
                  <span className="text-xs bg-[#2a2b33] px-3 py-1 rounded">5 барабанов</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1a1b22] rounded-xl overflow-hidden hover:border-[#ff0000] border border-[#2a2b33] transition-all hover:shadow-lg hover:shadow-[#ff0000]/20 group cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-[#ff6666] to-[#ff0000] flex items-center justify-center">
                <Trophy size={64} className="text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Golden Dynasty</h3>
                <p className="text-[#a0a0a8] mb-4">Азиатский слот с множителями и фри-спинами</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#ff0000] font-semibold">RTP 97%</span>
                  <span className="text-xs bg-[#2a2b33] px-3 py-1 rounded">5 барабанов</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1a1b22] rounded-xl overflow-hidden hover:border-[#ff0000] border border-[#2a2b33] transition-all hover:shadow-lg hover:shadow-[#ff0000]/20 group cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-[#ff9999] to-[#ff3333] flex items-center justify-center">
                <Gift size={64} className="text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Mystery Box</h3>
                <p className="text-[#a0a0a8] mb-4">Загадочный слот с неожиданными сюрпризами</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#ff0000] font-semibold">RTP 95.8%</span>
                  <span className="text-xs bg-[#2a2b33] px-3 py-1 rounded">3 барабана</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#1a1b22] rounded-xl overflow-hidden hover:border-[#ff0000] border border-[#2a2b33] transition-all hover:shadow-lg hover:shadow-[#ff0000]/20 group cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-[#ff1a1a] to-[#990000] flex items-center justify-center">
                <Zap size={64} className="text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Lightning Strike</h3>
                <p className="text-[#a0a0a8] mb-4">Быстрый слот с молниеносными выигрышами</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#ff0000] font-semibold">RTP 96.2%</span>
                  <span className="text-xs bg-[#2a2b33] px-3 py-1 rounded">5 барабанов</span>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-[#1a1b22] rounded-xl overflow-hidden hover:border-[#ff0000] border border-[#2a2b33] transition-all hover:shadow-lg hover:shadow-[#ff0000]/20 group cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-[#ff4444] to-[#bb0000] flex items-center justify-center">
                <Users size={64} className="text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Social Jackpot</h3>
                <p className="text-[#a0a0a8] mb-4">Мультиплеерный слот с растущим джекпотом</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#ff0000] font-semibold">RTP 94.5%</span>
                  <span className="text-xs bg-[#2a2b33] px-3 py-1 rounded">6 барабанов</span>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-[#1a1b22] rounded-xl overflow-hidden hover:border-[#ff0000] border border-[#2a2b33] transition-all hover:shadow-lg hover:shadow-[#ff0000]/20 group cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-[#ff7777] to-[#ff0000] flex items-center justify-center">
                <Shield size={64} className="text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Fortress Gold</h3>
                <p className="text-[#a0a0a8] mb-4">Казальный слот с защитой от убытков</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#ff0000] font-semibold">RTP 97.1%</span>
                  <span className="text-xs bg-[#2a2b33] px-3 py-1 rounded">5 барабанов</span>
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-[#1a1b22] rounded-xl overflow-hidden hover:border-[#ff0000] border border-[#2a2b33] transition-all hover:shadow-lg hover:shadow-[#ff0000]/20 group cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-[#ff5555] to-[#dd0000] flex items-center justify-center">
                <Lock size={64} className="text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Secret Vault</h3>
                <p className="text-[#a0a0a8] mb-4">Таинственный слот с закрытыми сокровищами</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#ff0000] font-semibold">RTP 96.8%</span>
                  <span className="text-xs bg-[#2a2b33] px-3 py-1 rounded">5 барабанов</span>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-[#1a1b22] rounded-xl overflow-hidden hover:border-[#ff0000] border border-[#2a2b33] transition-all hover:shadow-lg hover:shadow-[#ff0000]/20 group cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-[#ff3333] to-[#aa0000] flex items-center justify-center">
                <Smartphone size={64} className="text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Mobile Fortune</h3>
                <p className="text-[#a0a0a8] mb-4">Мобильный слот оптимизированный для телефонов</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#ff0000] font-semibold">RTP 95.9%</span>
                  <span className="text-xs bg-[#2a2b33] px-3 py-1 rounded">4 барабана</span>
                </div>
              </div>
            </div>

            {/* Card 9 */}
            <div className="bg-[#1a1b22] rounded-xl overflow-hidden hover:border-[#ff0000] border border-[#2a2b33] transition-all hover:shadow-lg hover:shadow-[#ff0000]/20 group cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-[#ff8888] to-[#ff1111] flex items-center justify-center">
                <Zap size={64} className="text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Fire Dragon</h3>
                <p className="text-[#a0a0a8] mb-4">Огненный дракон с мега выигрышами</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#ff0000] font-semibold">RTP 96.4%</span>
                  <span className="text-xs bg-[#2a2b33] px-3 py-1 rounded">5 барабанов</span>
                </div>
              </div>
            </div>

            {/* Card 10 */}
            <div className="bg-[#1a1b22] rounded-xl overflow-hidden hover:border-[#ff0000] border border-[#2a2b33] transition-all hover:shadow-lg hover:shadow-[#ff0000]/20 group cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-[#ff6666] to-[#880000] flex items-center justify-center">
                <Trophy size={64} className="text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Royal Flush</h3>
                <p className="text-[#a0a0a8] mb-4">Королевский слот с премиальными комбинациями</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#ff0000] font-semibold">RTP 97.2%</span>
                  <span className="text-xs bg-[#2a2b33] px-3 py-1 rounded">5 барабанов</span>
                </div>
              </div>
            </div>

            {/* Card 11 */}
            <div className="bg-[#1a1b22] rounded-xl overflow-hidden hover:border-[#ff0000] border border-[#2a2b33] transition-all hover:shadow-lg hover:shadow-[#ff0000]/20 group cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-[#ff4444] to-[#cc0000] flex items-center justify-center">
                <Gift size={64} className="text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Lucky Leprechaun</h3>
                <p className="text-[#a0a0a8] mb-4">Ирландский слот со счастливыми символами</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#ff0000] font-semibold">RTP 96.7%</span>
                  <span className="text-xs bg-[#2a2b33] px-3 py-1 rounded">5 барабанов</span>
                </div>
              </div>
            </div>

            {/* Card 12 */}
            <div className="bg-[#1a1b22] rounded-xl overflow-hidden hover:border-[#ff0000] border border-[#2a2b33] transition-all hover:shadow-lg hover:shadow-[#ff0000]/20 group cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-[#ff9999] to-[#ff2222] flex items-center justify-center">
                <Shield size={64} className="text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Diamond Heist</h3>
                <p className="text-[#a0a0a8] mb-4">Криминальный слот с выигрышами до 2000x</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#ff0000] font-semibold">RTP 95.5%</span>
                  <span className="text-xs bg-[#2a2b33] px-3 py-1 rounded">5 барабанов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Table */}
      <section className="py-16 px-4 bg-[#1a1b22]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center text-balance">Преимущества Norm Casino</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2a2b33]">
                  <th className="text-left py-4 px-4 font-bold text-lg">Функция</th>
                  <th className="text-center py-4 px-4 font-bold text-lg">Статус</th>
                  <th className="text-left py-4 px-4 font-bold text-lg">Описание</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#2a2b33] hover:bg-[#2a2b33]/30 transition-colors">
                  <td className="py-4 px-4">Кешбэк до 15%</td>
                  <td className="text-center py-4 px-4">
                    <span className="inline-block w-3 h-3 bg-[#ff0000] rounded-full"></span>
                  </td>
                  <td className="py-4 px-4 text-[#a0a0a8]">Возврат части проигрыша каждый день</td>
                </tr>
                <tr className="border-b border-[#2a2b33] hover:bg-[#2a2b33]/30 transition-colors">
                  <td className="py-4 px-4">Live казино</td>
                  <td className="text-center py-4 px-4">
                    <span className="inline-block w-3 h-3 bg-[#ff0000] rounded-full"></span>
                  </td>
                  <td className="py-4 px-4 text-[#a0a0a8]">Живые дилеры в режиме реального времени</td>
                </tr>
                <tr className="border-b border-[#2a2b33] hover:bg-[#2a2b33]/30 transition-colors">
                  <td className="py-4 px-4">1000+ слотов</td>
                  <td className="text-center py-4 px-4">
                    <span className="inline-block w-3 h-3 bg-[#ff0000] rounded-full"></span>
                  </td>
                  <td className="py-4 px-4 text-[#a0a0a8]">Огромная библиотека азартных игр</td>
                </tr>
                <tr className="border-b border-[#2a2b33] hover:bg-[#2a2b33]/30 transition-colors">
                  <td className="py-4 px-4">Мобильное приложение</td>
                  <td className="text-center py-4 px-4">
                    <span className="inline-block w-3 h-3 bg-[#ff0000] rounded-full"></span>
                  </td>
                  <td className="py-4 px-4 text-[#a0a0a8]">iOS и Android приложения</td>
                </tr>
                <tr className="border-b border-[#2a2b33] hover:bg-[#2a2b33]/30 transition-colors">
                  <td className="py-4 px-4">24/7 поддер��ка</td>
                  <td className="text-center py-4 px-4">
                    <span className="inline-block w-3 h-3 bg-[#ff0000] rounded-full"></span>
                  </td>
                  <td className="py-4 px-4 text-[#a0a0a8]">Служба поддержки работает круглосуточно</td>
                </tr>
                <tr className="border-b border-[#2a2b33] hover:bg-[#2a2b33]/30 transition-colors">
                  <td className="py-4 px-4">Быстрые выплаты</td>
                  <td className="text-center py-4 px-4">
                    <span className="inline-block w-3 h-3 bg-[#ff0000] rounded-full"></span>
                  </td>
                  <td className="py-4 px-4 text-[#a0a0a8]">Выплаты в течение 24 часов</td>
                </tr>
                <tr className="border-b border-[#2a2b33] hover:bg-[#2a2b33]/30 transition-colors">
                  <td className="py-4 px-4">Лицензированный оператор</td>
                  <td className="text-center py-4 px-4">
                    <span className="inline-block w-3 h-3 bg-[#ff0000] rounded-full"></span>
                  </td>
                  <td className="py-4 px-4 text-[#a0a0a8]">Полная лицензия и сертификация</td>
                </tr>
                <tr className="border-b border-[#2a2b33] hover:bg-[#2a2b33]/30 transition-colors">
                  <td className="py-4 px-4">Безопасность 256-bit SSL</td>
                  <td className="text-center py-4 px-4">
                    <span className="inline-block w-3 h-3 bg-[#ff0000] rounded-full"></span>
                  </td>
                  <td className="py-4 px-4 text-[#a0a0a8]">Максимальная защита данных</td>
                </tr>
                <tr className="border-b border-[#2a2b33] hover:bg-[#2a2b33]/30 transition-colors">
                  <td className="py-4 px-4">Бездепозитные бонусы</td>
                  <td className="text-center py-4 px-4">
                    <span className="inline-block w-3 h-3 bg-[#ff0000] rounded-full"></span>
                  </td>
                  <td className="py-4 px-4 text-[#a0a0a8]">Получи бонус без первого взноса</td>
                </tr>
                <tr className="border-b border-[#2a2b33] hover:bg-[#2a2b33]/30 transition-colors">
                  <td className="py-4 px-4">VIP программа</td>
                  <td className="text-center py-4 px-4">
                    <span className="inline-block w-3 h-3 bg-[#ff0000] rounded-full"></span>
                  </td>
                  <td className="py-4 px-4 text-[#a0a0a8]">Эксклюзивные привилегии для VIP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#0e0f14]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center text-balance">Часто задаваемые вопросы</h2>
          
          <div className="space-y-4">
            {/* FAQ 1 */}
            <details
              open={expandedFaq === 0}
              onClick={() => toggleFaq(0)}
              className="group bg-[#1a1b22] rounded-lg border border-[#2a2b33] hover:border-[#ff0000]/50 transition-colors cursor-pointer"
            >
              <summary className="flex items-center justify-between p-6 list-none font-semibold text-lg">
                <span>Как начать играть в Norm Casino?</span>
                <ChevronDown
                  size={24}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-6 text-[#a0a0a8] border-t border-[#2a2b33] pt-4">
                <p>Процесс регистрации в Norm Casino очень прост. Нажмите кнопку &quot;Регистрация&quot;, заполните форму с личными данными, подтвердите email и выберите способ пополнения счета. После этого вы сможете сразу начать играть в любые слоты.</p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details
              open={expandedFaq === 1}
              onClick={() => toggleFaq(1)}
              className="group bg-[#1a1b22] rounded-lg border border-[#2a2b33] hover:border-[#ff0000]/50 transition-colors cursor-pointer"
            >
              <summary className="flex items-center justify-between p-6 list-none font-semibold text-lg">
                <span>Какие способы пополнения счета доступны?</span>
                <ChevronDown
                  size={24}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-6 text-[#a0a0a8] border-t border-[#2a2b33] pt-4">
                <p>Мы принимаем все популярные способы пополнения: банковские карты Visa и Mastercard, электронные кошельки (PayPal, Skrill, Neteller), криптовалюты (Bitcoin, Ethereum) и банковские переводы. Минимальный депозит составляет 100 рублей.</p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details
              open={expandedFaq === 2}
              onClick={() => toggleFaq(2)}
              className="group bg-[#1a1b22] rounded-lg border border-[#2a2b33] hover:border-[#ff0000]/50 transition-colors cursor-pointer"
            >
              <summary className="flex items-center justify-between p-6 list-none font-semibold text-lg">
                <span>Как работает система кешбэка?</span>
                <ChevronDown
                  size={24}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-6 text-[#a0a0a8] border-t border-[#2a2b33] pt-4">
                <p>Система кешбэка в Norm Casino рассчитывается автоматически каждый день. Чем больше вы играете, тем выше процент возврата - до 15% для активных игроков. Кешбэк начисляется на счет каждый день в 00:00 по московскому времени и может быть использован для игры без ограничений.</p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details
              open={expandedFaq === 3}
              onClick={() => toggleFaq(3)}
              className="group bg-[#1a1b22] rounded-lg border border-[#2a2b33] hover:border-[#ff0000]/50 transition-colors cursor-pointer"
            >
              <summary className="flex items-center justify-between p-6 list-none font-semibold text-lg">
                <span>Можно ли снять выигрыш сразу?</span>
                <ChevronDown
                  size={24}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-6 text-[#a0a0a8] border-t border-[#2a2b33] pt-4">
                <p>Да, вы можете снять выигрыш в любой момент. Выплаты обрабатываются в течение 24 часов. Минимум для вывода составляет 500 рублей. Мы рекомендуем использовать тот же способ вывода, что и для пополнения счета.</p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details
              open={expandedFaq === 4}
              onClick={() => toggleFaq(4)}
              className="group bg-[#1a1b22] rounded-lg border border-[#2a2b33] hover:border-[#ff0000]/50 transition-colors cursor-pointer"
            >
              <summary className="flex items-center justify-between p-6 list-none font-semibold text-lg">
                <span>Как связаться со службой поддержки?</span>
                <ChevronDown
                  size={24}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-6 text-[#a0a0a8] border-t border-[#2a2b33] pt-4">
                <p>Служба поддержки Norm Casino доступна 24/7. Вы можете связаться с нами через чат в личном кабинете, отправить email на support@norm-casino.ru или позвонить по номеру +7 (495) 123-45-67. Среднее время ответа составляет менее 5 минут.</p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details
              open={expandedFaq === 5}
              onClick={() => toggleFaq(5)}
              className="group bg-[#1a1b22] rounded-lg border border-[#2a2b33] hover:border-[#ff0000]/50 transition-colors cursor-pointer"
            >
              <summary className="flex items-center justify-between p-6 list-none font-semibold text-lg">
                <span>Является ли Norm Casino лицензированным казино?</span>
                <ChevronDown
                  size={24}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-6 text-[#a0a0a8] border-t border-[#2a2b33] pt-4">
                <p>Да, Norm Casino полностью лицензировано и регулируется лицензией, выданной Кюрасао. Все наши игры сертифицированы независимой организацией eCOGRA, что гарантирует честность и безопасность. Все данные защищены 256-битной SSL кодировкой.</p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details
              open={expandedFaq === 6}
              onClick={() => toggleFaq(6)}
              className="group bg-[#1a1b22] rounded-lg border border-[#2a2b33] hover:border-[#ff0000]/50 transition-colors cursor-pointer"
            >
              <summary className="flex items-center justify-between p-6 list-none font-semibold text-lg">
                <span>Какие слоты имеют самый высокий RTP?</span>
                <ChevronDown
                  size={24}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-6 text-[#a0a0a8] border-t border-[#2a2b33] pt-4">
                <p>Слоты с наивысшим RTP (Return to Player) в Norm Casino - это Royal Flush с RTP 97.2%, Fortress Gold с RTP 97.1% и Golden Dynasty с RTP 97%. Эти слоты предлагают лучшие шансы на долгосрочный выигрыш.</p>
              </div>
            </details>

            {/* FAQ 8 */}
            <details
              open={expandedFaq === 7}
              onClick={() => toggleFaq(7)}
              className="group bg-[#1a1b22] rounded-lg border border-[#2a2b33] hover:border-[#ff0000]/50 transition-colors cursor-pointer"
            >
              <summary className="flex items-center justify-between p-6 list-none font-semibold text-lg">
                <span>Можно ли играть с мобильного телефона?</span>
                <ChevronDown
                  size={24}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-6 text-[#a0a0a8] border-t border-[#2a2b33] pt-4">
                <p>Конечно! Norm Casino полностью оптимизировано для мобильных устройств. У нас есть собственные приложения для iOS и Android, которые можно скачать с App Store и Google Play. Вы также можете играть через мобильный браузер без скачивания приложения.</p>
              </div>
            </details>

            {/* FAQ 9 */}
            <details
              open={expandedFaq === 8}
              onClick={() => toggleFaq(8)}
              className="group bg-[#1a1b22] rounded-lg border border-[#2a2b33] hover:border-[#ff0000]/50 transition-colors cursor-pointer"
            >
              <summary className="flex items-center justify-between p-6 list-none font-semibold text-lg">
                <span>Как работает VIP программа?</span>
                <ChevronDown
                  size={24}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-6 text-[#a0a0a8] border-t border-[#2a2b33] pt-4">
                <p>VIP программа Norm Casino предоставляет эксклюзивные привилегии: повышенный кешбэк до 20%, VIP-специалист службы поддержки, ускоренные выплаты, приглашения на специальные события и многое другое. Вы автоматически получите VIP статус, если сделаете депозит от 10000 рублей.</p>
              </div>
            </details>

            {/* FAQ 10 */}
            <details
              open={expandedFaq === 9}
              onClick={() => toggleFaq(9)}
              className="group bg-[#1a1b22] rounded-lg border border-[#2a2b33] hover:border-[#ff0000]/50 transition-colors cursor-pointer"
            >
              <summary className="flex items-center justify-between p-6 list-none font-semibold text-lg">
                <span>Какая минимальная ставка в слотах?</span>
                <ChevronDown
                  size={24}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-6 text-[#a0a0a8] border-t border-[#2a2b33] pt-4">
                <p>Минимальная ставка в слотах Norm Casino составляет 0.10 рубля, что делает игру доступной для всех. Максимальная ставка может достигать 100 рублей за спин. Вы можете играть с абсолютно любым бюджетом.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Hidden SEO Sections */}
      <div className="hidden">
        <section>
          <h2>Лучшие слоты онлайн казино Norm Casino</h2>
          <p>Norm Casino предлагает наиболее полный выбор онлайн слотов. Наши игровые автоматы включают классические три-барабанные слоты, современные пятибарабанные автоматы с множителями, прогрессивные джекпоты и специализированные слоты с различными тематиками.</p>
          <p>Каждый слот в норм казино имеет собственный RTP (Return to Player), который варьируется от 94.5% до 97.2%. Это означает, что в долгосрочной перспективе казино возвращает определенный процент от всех ставок игроков.</p>
          <p>Популярные слоты включают Cosmic Fortune, Golden Dynasty, Mystery Box, Lightning Strike, Social Jackpot, Fortress Gold, Secret Vault, Mobile Fortune, Fire Dragon, Royal Flush, Lucky Leprechaun и Diamond Heist.</p>
        </section>

        <section>
          <h2>Live казино с живыми дилерами</h2>
          <p>Норм казино предлагает полнофункциональное live казино с живыми дилерами в режиме реального времени. Вы можете играть в баккару, блэкджек, рулетку и покер, общаясь с настоящими дилерами через видеочат.</p>
          <p>Live казино в norm casino использует профессиональных дилеров, сертифицированные столы и видео высокой четкости. Все игры транслируются в режиме 24/7, так что вы можете играть в любое время.</p>
          <p>Минимальная ставка в live казино составляет 100 рублей, а максимальная может достигать 100000 рублей для VIP игроков.</p>
        </section>

        <section>
          <h2>Карточные игры и покер в онлайн казино</h2>
          <p>Norm Casino предлагает богатый выбор карточных игр, включая покер, баккару, блэкджек, бинго и другие традиционные карточные игры. Каждая карточная игра имеет собственные правила, стратегию и уровень сложности.</p>
          <p>Норм казино карточные игры доступны как в классическом режиме против компьютера, так и в режиме live с живыми дилерами. Вы можете выбрать удобный для вас уровень ставок и темп игры.</p>
          <p>Профессиональные игроки часто выбирают карточные игры в norm casino благодаря возможности применения стратегии и интеллектуального подхода к игре.</p>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#ff0000] to-[#cc0000]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6 text-white text-balance">
            Готовы начать играть?
          </h2>
          <p className="text-xl text-white/90 mb-8 text-balance">
            Присоединяйтесь к тысячам счастливых игроков Norm Casino прямо сейчас
          </p>
          <button className="px-8 py-4 bg-white hover:bg-[#f0f0f0] text-[#ff0000] font-bold text-lg rounded-lg transition-all hover:shadow-lg transform hover:scale-105">
            Регистрация и бонус
          </button>
        </div>
      </section>

      {/* About Section - Expandable */}
      <section className="py-16 px-4 bg-[#0e0f14] border-t border-[#2a2b33]">
        <div className="max-w-4xl mx-auto">
          <details
            open={expandedFaq === 999}
            onClick={() => setExpandedFaq(expandedFaq === 999 ? null : 999)}
            className="group bg-[#1a1b22] rounded-lg border border-[#2a2b33] hover:border-[#ff0000]/50 transition-colors cursor-pointer"
          >
            <summary className="flex items-center justify-between p-6 list-none font-bold text-2xl">
              <span>О нас: Norm Casino - официальный сайт онлайн казино</span>
              <ChevronDown
                size={28}
                className="transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="px-6 pb-6 border-t border-[#2a2b33] pt-6 text-[#a0a0a8] space-y-6">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Норм казино - лучший выбор для игры онлайн</h3>
                <p className="text-base leading-relaxed mb-4">
                  Norm Casino - официальный сайт инновационного онлайн казино, где норм казино играть можно безопасно и выгодно. Наша платформа предлагает норм казино онлайн с лучшими слотами, живыми дилерами и щедрыми бонусами. Норм казино официальный — это гарантия честности, лицензии Кюрасао и полной защиты ваших данных. На нашем норм казино зеркало работает без перебоев, обеспечивая стабильный доступ к любимым играм в любое время суток.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-4">Почему выбирают Norm Casino: официальный казино с достоинствами</h3>
                <p className="text-base leading-relaxed mb-4">
                  Norm Casino зеркало рабочее предоставляет альтернативный доступ к полному функционалу казино. Norm casino играть можно на мобильных устройствах и десктопе с одинаково удобным интерфейсом. Наша система кешбэка до 15% возвращает часть проигрыша каждый день, делая игру выгоднее. Norm casino официальный сайт использует 256-битное шифрование SSL для максимальной безопасности ваших финансовых операций.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-4">Полный спектр развлечений в норм казино онлайн</h3>
                <p className="text-base leading-relaxed mb-4">
                  На платформе norm casino официальный доступны более 1000 игровых автоматов от ведущих мировых провайдеров. Норм казино зеркало включает разделы для любых предпочтений: классические слоты, видеослоты, прогрессивные джекпоты и live казино. Norm casino играть можно с минимальными ставками от 0,10 рубля, что делает азартные развлечения доступными всем. Каждый слот на норм казино официальный имеет сертификат честности eCOGRA и прозрачный процент возврата (RTP от 94% до 98%).
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-4">Система поддержки и безопасность в norm casino официальный</h3>
                <p className="text-base leading-relaxed mb-4">
                  Norm casino зеркало рабочее дополняет основной сайт функциональностью и обеспечивает беспрерывный доступ. Служба поддержки норм казино работает 24/7, готовая помочь с любыми вопросами на русском языке. Norm casino официальный имеет полную лицензию от регулятора Кюрасао и прошел все необходимые проверки безопасности. На норм казино официальный сайт внедрены системы KYC для защиты от мошенничества и отмывания денег.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-4">Бонусы и акции: выигрывайте больше в Norm Casino</h3>
                <p className="text-base leading-relaxed mb-4">
                  Norm casino играть начинающим игрокам выгодно благодаря приветственному пакету до 225% + 1000 фри-спинов. На норм казино онлайн действуют регулярные турниры с призовыми фондами, где каждый может выиграть крупную сумму. Норм казино официальный предлагает VIP-программу для постоянных игроков с повышенным кешбэком до 20% и приоритетной поддержкой. Norm casino зеркало рабочее имеет те же условия и бонусы, что и основной сайт, обеспечивая полный функционал в любой ситуации.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-4">Технологии и удобство: норм казино официальный в 2024</h3>
                <p className="text-base leading-relaxed mb-4">
                  Norm casino официальный использует передовые технологии HTML5 для работы на любых устройствах без установки приложения. Норм казино зеркало работает через адаптивный интерфейс, который автоматически подстраивается под размер экрана. Norm casino играть можно через браузер или скачав приложения для iOS и Android. На норм казино онлайн внедрена система быстрого депозита и мгновенных выплат через различные платежные системы: карты, электронные кошельки и криптовалюты.
                </p>
              </div>

              <div className="bg-[#0e0f14] p-4 rounded-lg border border-[#2a2b33]">
                <p className="text-sm text-[#a0a0a8]">
                  <strong>Резюме:</strong> Norm casino официальный сайт — это надежная платформа для честной игры с лучшими условиями. Норм казино онлайн предлагает максимальное разнообразие развлечений, защиту данных и выгодные бонусы. Norm casino играть безопасно благодаря лицензии и регулированию. Норм казино зеркало рабочее всегда доступно для непрерывного доступа к любимым играм.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>
      <footer className="bg-[#1a1b22] border-t border-[#2a2b33] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">О Norm Casino</h3>
              <p className="text-[#a0a0a8] text-sm">Лучшее онлайн казино с кешбэком, лицензией Кюрасао и 24/7 поддержкой</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Игры</h3>
              <ul className="text-[#a0a0a8] text-sm space-y-2">
                <li><a href="#" className="hover:text-[#ff0000] transition">Слоты</a></li>
                <li><a href="#" className="hover:text-[#ff0000] transition">Live казино</a></li>
                <li><a href="#" className="hover:text-[#ff0000] transition">Карточные игры</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Информация</h3>
              <ul className="text-[#a0a0a8] text-sm space-y-2">
                <li><a href="#" className="hover:text-[#ff0000] transition">Условия использования</a></li>
                <li><a href="#" className="hover:text-[#ff0000] transition">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-[#ff0000] transition">Отв. игра</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="text-[#a0a0a8] text-sm space-y-2">
                <li>Email: support@norm-casino.ru</li>
                <li>Тел: +7 (495) 123-45-67</li>
                <li>Чат: 24/7 онлайн</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#2a2b33] pt-8 text-center text-[#a0a0a8] text-sm">
            <p>Лицензия Кюрасао / Сертификат eCOGRA / 256-bit SSL защита</p>
            <p className="mt-2">&copy; 2024 Norm Casino. Все права защищены. норм казино, norm casino, онлайн казино, казино слоты</p>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-[#0e0f14] border-t border-[#2a2b33] z-40">
        <div className="flex justify-around items-center py-2">
          <button className="flex flex-col items-center justify-center w-16 py-2 text-[#ff0000] hover:text-[#ff6666] transition">
            <Home size={24} />
            <span className="text-[10px] mt-1">Главная</span>
          </button>
          <button className="flex flex-col items-center justify-center w-16 py-2 text-[#a0a0a8] hover:text-white transition">
            <Gift size={24} />
            <span className="text-[10px] mt-1">Бонусы</span>
          </button>
          <button className="flex flex-col items-center justify-center w-16 py-2 text-[#a0a0a8] hover:text-white transition">
            <Trophy size={24} />
            <span className="text-[10px] mt-1">Войти</span>
          </button>
          <button className="flex flex-col items-center justify-center w-16 py-2 text-[#a0a0a8] hover:text-white transition">
            <Gamepad2 size={24} />
            <span className="text-[10px] mt-1">Казино</span>
          </button>
          <button className="flex flex-col items-center justify-center w-16 py-2 text-[#a0a0a8] hover:text-white transition">
            <Search size={24} />
            <span className="text-[10px] mt-1">Поиск</span>
          </button>
          <button className="flex flex-col items-center justify-center w-16 py-2 text-[#a0a0a8] hover:text-white transition">
            <Settings size={24} />
            <span className="text-[10px] mt-1">Меню</span>
          </button>
        </div>
      </nav>

      {/* Mobile Spacing */}
      <div className="md:hidden h-24"></div>
    </div>
  )
}
