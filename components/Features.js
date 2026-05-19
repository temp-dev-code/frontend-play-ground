export default function Features() {
  const items = [
    { title: '실전형 프로젝트', detail: '서비스를 직접 기획하고 배포하는 경험을 쌓습니다.' },
    { title: 'UI 개선 챌린지', detail: '사용자 중심 디자인과 반응형 레이아웃을 구현합니다.' },
    { title: '코드 리뷰 문화', detail: '팀원과 피드백하며 더 깔끔한 코드를 작성합니다.' },
    { title: '커리어 성장', detail: '포트폴리오와 실무 감각을 동시에 강화합니다.' }
  ]

  return (
    <section id="program" className="container py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">프로그램</p>
        <h2 className="section-title mt-4">동아리 활동은 이렇게 진행됩니다</h2>
        <p className="section-copy">각 단계는 기초부터 완성까지 이어지는 구조로 설계되어 있으며, 참여만으로도 확실한 성장 동력을 제공합니다.</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, idx) => (
          <div key={idx} className="card-soft p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">0{idx + 1}</p>
            <h3 className="mt-4 text-xl font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-slate-600">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
