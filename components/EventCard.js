export default function EventCard({ event }) {
    return (
        <article className="card-soft p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">{event.type}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-900">{event.title}</h3>
                </div>
                <p className="text-sm font-medium text-slate-500">{event.date}</p>
            </div>
            <p className="mt-5 text-slate-600">{event.desc}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">프론트엔드</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">초급/중급</span>
            </div>
        </article>
    )
}
