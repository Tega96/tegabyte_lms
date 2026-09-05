import Navbar from "./_components/Navbar"

export default function LayoutPublic({children}: {children: React.ReactNode}) {
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <Navbar />
            <main>{children}</main>
        </div>
    )
}