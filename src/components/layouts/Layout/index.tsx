import Navbar from "../Navbar";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <header>
                <Navbar />
            </header>

            {children}

            <footer>

            </footer>
        </>
    )
}

export default Layout;