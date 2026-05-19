import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-lg">
            <div className="container flex items-center justify-between py-4">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/10">FP</div>
                    <div>
                        <p className="text-sm font-semibold tracking-wide text-slate-900">Frontend Play Ground</p>
                        <p className="text-xs text-slate-500">혁신적인 프론트엔드 동아리</p>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <a href="#about" className="hover:text-primary transition">소개</a>
                    <a href="#program" className="hover:text-primary transition">프로그램</a>
                    <a href="#events" className="hover:text-primary transition">행사</a>
                    <a href="#contact" className="hover:text-primary transition">문의</a>
                </nav>

                <Link href="#contact" className="btn-brand hidden md:inline-flex">지금 참여하기</Link>
            </div>
        </header>
    )
}
