import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import EventCard from '../components/EventCard'
import ContactForm from '../components/ContactForm'
import Features from '../components/Features'
import Footer from '../components/Footer'

const events = [
    { id: 1, title: '오리엔테이션', date: '2026-06-01', desc: '동아리 첫 모임 및 소개 세션' },
    { id: 2, title: '워크샵: React 실습', date: '2026-06-15', desc: '실무형 React 프로젝트 워크샵' },
    { id: 3, title: '해커톤', date: '2026-07-10', desc: '24시간 팀 해커톤' }
]

export default function Home() {
    return (
        <div>
            <Head>
                <title>동아리 홍보 | Frontend Play Ground</title>
                <meta name="description" content="프론트엔드 개발 동아리 - Frontend Play Ground" />
            </Head>

            <Navbar />

            <main className="py-8">
                <Hero />

                <section id="events" className="container mt-10">
                    <h2 className="text-2xl font-semibold mb-6">다가오는 행사</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {events.map(e => (
                            <EventCard key={e.id} event={e} />
                        ))}
                    </div>
                </section>

                <Features />

                <section id="about" className="container mt-12">
                    <h2 className="text-2xl font-semibold mb-6">연락하기</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div>
                            <p className="mb-4">가입 문의나 궁금한 점이 있으면 아래 폼을 작성해주세요. (데모이므로 실제 전송은 구현되어 있지 않습니다.)</p>
                            <ul className="list-disc pl-5 text-sm text-gray-700">
                                <li>활동: 스터디, 프로젝트, 멘토링</li>
                                <li>대상: 프론트엔드에 관심있는 누구나</li>
                                <li>문의: 회장 이메일 또는 아래 폼</li>
                            </ul>
                        </div>
                        <ContactForm />
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}
