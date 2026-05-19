import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import EventCard from '../components/EventCard'
import ContactForm from '../components/ContactForm'
import Features from '../components/Features'
import Footer from '../components/Footer'

const events = [
    { id: 1, type: '오리엔테이션', title: '신입 환영 & 네트워킹', date: '6월 1일 (토)', desc: '기초 개념과 활동 로드맵, 커뮤니티 소개를 한 번에.' },
    { id: 2, type: '워크샵', title: 'React + Tailwind 실전 세션', date: '6월 15일 (토)', desc: '빠른 프로토타입 제작과 UI/UX 개선을 배우는 실습 중심 워크샵.' },
    { id: 3, type: '해커톤', title: '24시간 팀 해커톤', date: '7월 10일 (토)', desc: '팀 빌딩과 실전 협업으로 서비스 구현 능력을 높입니다.' }
]

export default function Home() {
    return (
        <div>
            <Head>
                <title>Frontend Play Ground | 혁신적인 프론트엔드 동아리</title>
                <meta name="description" content="Frontend Play Ground는 혁신, 모던, 깔끔함을 주제로 한 프론트엔드 동아리입니다." />
            </Head>

            <Navbar />

            <main>
                <Hero />

                <section id="about" className="container py-20">
                    <div className="grid gap-12 lg:grid-cols-[0.95fr_0.9fr] items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">우리의 철학</p>
                            <h2 className="section-title mt-4">빠르게 배우고, 협업하며, 실제로 배포하는 동아리</h2>
                            <p className="section-copy">단순한 스터디가 아니라 제품 제작을 목표로 합니다. 매주 실습과 리뷰, 배포 과정을 거쳐 현업 감각을 끌어올립니다.</p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="card-soft p-6">
                                <p className="text-sm text-slate-500">집중 학습</p>
                                <p className="mt-3 text-xl font-semibold text-slate-900">현업형 실습</p>
                            </div>
                            <div className="card-soft p-6">
                                <p className="text-sm text-slate-500">팀워크</p>
                                <p className="mt-3 text-xl font-semibold text-slate-900">협업 경험</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Features />

                <section id="events" className="container py-20">
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">진행 중인 행사</p>
                            <h2 className="section-title mt-4">다가오는 일정</h2>
                        </div>
                        <p className="max-w-xl text-slate-600">실제 서비스처럼 일정 계획을 세우고, 설계부터 배포까지 함께 진행합니다.</p>
                    </div>
                    <div className="mt-10 grid gap-6 lg:grid-cols-3">
                        {events.map(event => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                </section>

                <section id="contact" className="bg-slate-950 py-20 text-white">
                    <div className="container grid gap-12 lg:grid-cols-[0.9fr_0.7fr] items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">문의하기</p>
                            <h2 className="mt-4 text-4xl font-bold tracking-tight">함께 혁신적인 프로젝트를 시작해봐요</h2>
                            <p className="mt-6 max-w-xl text-slate-300">가입 문의, 프로젝트 제안, 협업 문의 모두 환영합니다. 아래 폼을 통해 곧바로 연락해주세요.</p>
                        </div>
                        <ContactForm />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
