import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="bg-white">
            <div className="container flex items-center justify-between h-16">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3">
                        <img src="/logo.svg" alt="logo" className="h-9 w-9 rounded-full shadow" />
                        <span className="font-extrabold text-lg">Frontend Play Ground</span>
                    </Link>
                </div>

                <nav className="hidden md:flex gap-6 items-center">
                    <a href="#events" className="text-sm text-gray-700 hover:text-primary">행사</a>
                    <a href="#about" className="text-sm text-gray-700 hover:text-primary">소개</a>
                    <a href="#contact" className="text-sm text-gray-700 hover:text-primary">연락</a>
                    <button className="ml-4 btn-primary">가입하기</button>
                </nav>
            </div>
        </header>
    )
}
