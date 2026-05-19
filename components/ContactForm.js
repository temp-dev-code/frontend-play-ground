export default function ContactForm() {
  return (
    <form className="card-soft p-8 shadow-soft">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-3 text-sm font-medium text-slate-700">
          이름
          <input className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="홍길동" />
        </label>
        <label className="flex flex-col gap-3 text-sm font-medium text-slate-700">
          이메일
          <input className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="you@example.com" />
        </label>
      </div>
      <label className="mt-6 flex flex-col gap-3 text-sm font-medium text-slate-700">
        문의 내용
        <textarea rows="5" className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-4 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="궁금한 점을 남겨주세요." />
      </label>
      <button type="button" className="btn-brand mt-6 w-full">문의 보내기</button>
    </form>
  )
}
