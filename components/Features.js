export default function Features() {
    const items = [
        { title: '실습 중심 학습', desc: '실제 코드로 배우는 세션과 프로젝트 중심 학습' },
        { title: '멘토 피드백', desc: '경력자 멘토의 코드 리뷰와 피드백 제공' },
        { title: '팀 프로젝트', desc: '작은 팀 단위 실전 프로젝트로 경험 축적' }
    ]

    return (
        <section className="container mt-16">
            <div className="grid md:grid-cols-3 gap-6">
                {items.map((it, idx) => (
                    <div key={idx} className="card p-6">
                        <div className="text-primary font-semibold mb-2">{it.title}</div>
                        <div className="text-gray-700">{it.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}
