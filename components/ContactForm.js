export default function ContactForm() {
    return (
        <form className="card p-6">
            <label className="block mb-2 text-sm text-gray-700">이름</label>
            <input className="w-full border border-gray-100 p-3 rounded-lg mb-4" />

            <label className="block mb-2 text-sm text-gray-700">이메일</label>
            <input className="w-full border border-gray-100 p-3 rounded-lg mb-4" />

            <label className="block mb-2 text-sm text-gray-700">메시지</label>
            <textarea className="w-full border border-gray-100 p-3 rounded-lg mb-4" rows="4"></textarea>

            <button type="button" className="btn-primary">전송 (데모)</button>
        </form>
    )
}
