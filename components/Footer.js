export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-slate-500">
        <div>
          <p className="font-semibold text-slate-950">Frontend Play Ground</p>
          <p className="text-sm">프론트엔드 개발과 협업을 연결하는 모던 커뮤니티</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm">
          <span>📧 hello@frontendplayground.kr</span>
          <span>📍 서울</span>
        </div>
      </div>
    </footer>
  )
}
