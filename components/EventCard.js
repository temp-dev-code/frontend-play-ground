export default function EventCard({ event }) {
    return (
        <article className="card p-5">
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                    <p className="text-sm muted">{event.date}</p>
                </div>
                <div className="text-xs text-white bg-accent px-3 py-1 rounded-full">모집중</div>
            </div>

            <p className="mt-4 text-gray-700">{event.desc}</p>

            <div className="mt-6 flex items-center justify-between">
                <button className="text-sm text-primary font-semibold">자세히 보기</button>
                <button className="btn-primary">참가 신청</button>
            </div>
        </article>
    )
}
