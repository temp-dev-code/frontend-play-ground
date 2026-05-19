export default function Features() {
    const items = [
        { title: '프로젝트로 배우는 프론트엔드', desc: '실전형 웹앱을 직접 설계하고 구현합니다.' },
        { title: '디자인과 코드의 결합', desc: 'UI/UX 감각과 개발 역량을 동시에 키웁니다.' },
        { title: '협업 중심 커리큘럼', desc: '팀 단위 협업으로 실무 경험을 쌓습니다.' },
        { title: '배포까지 완성', desc: 'Vercel과 Git을 활용해 완성된 결과물을 배포합니다.' }
    ]

    return (
        <section id="program" className="container py-20">
            <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">우리 프로그램</p>
                <h2 className="section-title mt-4">웹 개발 역량을 빠르게 성장시키는 구조</h2>
                <p className="section-copy">커리큘럼은 기초부터 심화, 실전 프로젝트까지 연결되어 있습니다. 실제 서비스처럼 경험하며 학습할 수 있습니다.</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {items.map((item, idx) => (
                    <div key={idx} className="card-soft p-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">0{idx + 1}</p>
                        <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-3 text-slate-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
