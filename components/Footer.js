export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white py-10">
            <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-base font-semibold text-slate-900">Frontend Play Ground</p>
                    <p className="text-sm text-slate-500">혁신적인 프론트엔드 커뮤니티</p>
                </div>
                <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                    <span>문의: hello@frontendplayground.kr</span>
                    <span>서울</span>
                </div>
            </div>
        </footer>
    )
}
