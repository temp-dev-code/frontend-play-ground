export default function ContactForm() {
    return (
        <form className="card-soft p-8 shadow-soft">
            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">이름</label>
                    <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="홍길동" />
                </div>
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">이메일</label>
                    <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="you@example.com" />
                </div>
            </div>
            <div className="mt-6">
                <label className="mb-2 block text-sm font-medium text-slate-700">문의 내용</label>
                <textarea rows="5" className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="궁금한 점을 남겨주세요." />
            </div>
            <button type="button" className="mt-6 btn-brand w-full">문의 보내기</button>
        </form>
    )
}
