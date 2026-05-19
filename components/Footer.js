export default function Footer() {
    return (
        <footer className="mt-16 border-t">
            <div className="container py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
                <div>© {new Date().getFullYear()} Frontend Play Ground</div>
                <div className="mt-2 md:mt-0">문의: president@example.com</div>
            </div>
        </footer>
    )
}
