export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-[-6rem] top-40 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="max-w-2xl">
            <span className="hero-badge">혁신 · 모던 · 깔끔함</span>
            <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">동아리의 첫인상을 웹으로, 스타일 있게 전합니다.</h1>
            <p className="section-copy">Frontend Play Ground는 기획부터 디자인, 코드까지 모두 경험하는 동아리입니다. 최신 UI와 실무형 협업으로 웹 개발 실력을 빠르게 성장시키세요.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn-brand">지금 참여하기</a>
              <a href="#program" className="btn-secondary">프로그램 보기</a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-soft border-primary/10 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">다음 세션</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">React + Tailwind 워크숍</h2>
              <p className="mt-3 text-slate-600">현업 스타일의 UI를 만들고 배포까지 함께하는 집중 워크숍입니다.</p>
              <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
                <span className="rounded-full bg-slate-100 px-3 py-1">6월 15일</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">온라인 + 오프라인</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card-soft p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">협업</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">팀 기반 프로젝트</p>
              </div>
              <div className="card-soft p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">배포</p>
                <p className="mt-3 text-lg font-semibold text-slate-950">실제 서비스 완성</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
