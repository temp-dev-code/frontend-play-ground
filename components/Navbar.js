import React from 'react'

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-indigo-500 flex items-center justify-center text-xs">▲</div>
            <span>NEXUS</span>
          </a>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-slate-300 hover:text-white transition-colors">제품소개</a>
          <a href="#" className="text-sm font-semibold leading-6 text-slate-300 hover:text-white transition-colors">솔루션</a>
          <a href="#" className="text-sm font-semibold leading-6 text-slate-300 hover:text-white transition-colors">고객사</a>
          <a href="#" className="text-sm font-semibold leading-6 text-slate-300 hover:text-white transition-colors font-medium text-indigo-400">가격 안내</a>
        </div>
        <div className="flex flex-1 justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white bg-slate-800/60 hover:bg-slate-800 px-4 py-2 rounded-xl border border-slate-700/50 transition-all">
            로그인
          </a>
        </div>
      </nav>
    </header>
  )
}

