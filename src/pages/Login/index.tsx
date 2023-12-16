
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {


    return (
        <>
            <section className={styles.container}>
                <div className={styles.card}>
                    <form action="">
                        <div className={styles.cardHeader}><img src='logo.png' alt='Logo' /></div>
                        <div className={styles.cardBody}>
                            <div className={styles.inputBox}>
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="email" placeholder='Digite seu e-mail' />
                            </div>
                            <div className={styles.inputBox}>
                                <label htmlFor="password">Senha</label>
                                <input type="password" name="password" id="password" placeholder='Digite sua senha' />
                            </div>
                            <div className={styles.inputBox}>
                                <button type='button'>Fazer Login</button>
                            </div>

                        </div>
                    </form>
                    <div className={styles.cardFooter}>
                        
                        <Link to="/register">Ainda não tem Login? Cadastre-se</Link>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Login;