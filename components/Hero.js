export default function Hero() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="bg-white rounded-3xl shadow-xl p-10 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-5xl font-extrabold leading-tight">프론트엔드 개발, 직접 만들어 배웁니다</h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-lg">Frontend Play Ground는 실무형 프로젝트와 세션으로 빠르게 실력을 쌓을 수 있는 동아리입니다. 기초부터 실전까지 함께합니다.</p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="#contact" className="btn-primary inline-block">가입 문의</a>
                            <a href="#events" className="inline-block px-4 py-2 rounded-lg border text-gray-700">행사 보기</a>
                            <a href="/" className="inline-block px-4 py-2 rounded-lg text-gray-500">활동 기록 보기</a>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <div className="w-full max-w-sm">
                            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white mb-4">
                                <div className="text-sm">다음 모임</div>
                                <div className="text-2xl font-bold mt-1">오리엔테이션 · 2026-06-01</div>
                            </div>

                            <div className="card p-4">
                                <div className="text-sm muted">최근 활동</div>
                                <ul className="mt-3 space-y-2 text-gray-700">
                                    <li>React 실습 스터디 - 6/15</li>
                                    <li>UI 디자인 워크숍 - 6/22</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
