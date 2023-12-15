import Navbar from "../Navbar";

interface IProps {
    children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
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