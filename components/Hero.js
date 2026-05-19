export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-20 pb-24">
            <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-r from-primary to-slate-900 opacity-30 blur-3xl" />
            <div className="container relative">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
                    <div className="max-w-2xl">
                        <p className="inline-flex rounded-full border border-white/40 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 backdrop-blur">혁신 · 모던 · 깔끔함</p>
                        <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">프론트엔드 감각을 실제 프로젝트로 완성하세요</h1>
                        <p className="section-copy mt-6">Frontend Play Ground는 최신 웹 기술과 협업 중심 학습으로 동아리 활동을 현대적이고 세련되게 만들어드립니다. 다양하고 실용적인 경험을 통해 성장하는 커뮤니티입니다.</p>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a href="#contact" className="btn-brand">참여 신청</a>
                            <a href="#program" className="btn-secondary">프로그램 보기</a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="pointer-events-none absolute -left-12 top-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl" />
                        <div className="pointer-events-none absolute -right-8 bottom-20 h-44 w-44 rounded-full bg-highlight/15 blur-2xl" />
                        <div className="card-soft relative overflow-hidden p-8 shadow-soft">
                            <div className="flex items-center justify-between gap-4 rounded-3xl bg-slate-950 p-6 text-white">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Next-level UI</p>
                                    <p className="mt-3 text-xl font-semibold">실습형 디자인 & 개발</p>
                                </div>
                                <div className="rounded-3xl bg-white/10 px-4 py-3 text-sm font-semibold">2026 Spring</div>
                            </div>
                            <div className="mt-6 grid gap-4">
                                <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                                    <p className="text-sm text-slate-500">워크샵</p>
                                    <p className="mt-2 text-lg font-semibold text-slate-900">3주 집중 프로젝트</p>
                                </div>
                                <div className="rounded-3xl bg-white/90 p-5 shadow-sm">
                                    <p className="text-sm text-slate-500">멘토링</p>
                                    <p className="mt-2 text-lg font-semibold text-slate-900">실제 코드 리뷰</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
