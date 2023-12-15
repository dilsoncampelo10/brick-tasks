import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <a href="">
                    <img src="logo.png" alt="Logo" />
                </a>
                <ul>
                    <li>
                        <a href="https://github.com/dilsoncampelo10" target='_blank'>
                            <img src="icons/github.png" alt="github" />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;