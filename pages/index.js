import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 antialiased selection:bg-indigo-500 selection:text-white">
      <Head>
        <title>NEXUS — 모던 웹 기술의 시작</title>
        <meta name="description" content="Next.js와 Tailwind로 만든 모던한 랜딩 페이지 예시" />
      </Head>

      {/* 네비게이션 바 포함 */}
      <Navbar />

      {/* 히어로 섹션 본문 */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-36 pb-24 sm:pt-40 sm:pb-32 lg:px-8">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-[450px] w-[700px] animate-pulse rounded-full bg-indigo-600/15 blur-[130px] filter" />
          <div className="ml-40 h-[350px] w-[550px] animate-pulse rounded-full bg-cyan-500/10 blur-[110px] filter delay-75" />
        </div>

        <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />

        <div className="mx-auto max-w-3xl text-center z-10">
          <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-ping" />
              What's New v2.0 릴리즈
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent leading-[1.15] sm:leading-[1.15]">
            미래를 이끄는 모던한<br />웹 기술의 시작
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-400 max-w-2xl mx-auto font-normal">
            Next.js와 Tailwind CSS를 활용하여 더 빠르고, 더 아름다우며, 사용성이 뛰어난 디지털 경험을 창조합니다. 지금 당신의 비즈니스를 한 단계 업그레이드하세요.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#get-started"
              className="w-full sm:w-auto rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-600/20 transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-500/30 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center"
            >
              지금 시작하기
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto group flex items-center justify-center gap-x-1.5 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-300 ring-1 ring-inset ring-slate-800 transition-all duration-200 hover:bg-slate-800 hover:text-white text-center"
            >
              자세히 알아보기
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>

          <div className="mt-20 border-t border-slate-900 pt-8">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              최고의 성능을 위한 빌트인 시스템
            </p>
            <div className="mt-6 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-xs sm:text-sm font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-indigo-400">⚡</span> <span>초고속 SSR 구현</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-400">🛡️</span> <span>엔터프라이즈 보안</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-indigo-400">📱</span> <span>완벽한 반응형 레이아웃</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
