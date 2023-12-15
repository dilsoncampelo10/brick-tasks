import Layout from '../../components/layouts/Layout';
import styles from './Home.module.scss';
import Task from '../../components/utils/Task';

const Home = () => {
    return (
        <>
            <Layout>
                <section className={`container ${styles.taskArea}`}>
                    <hgroup className={styles.hgroup}>
                        <h1 className={styles.mainTitle}>Comece a construir seus sonhos!</h1>
                        <h2 className={styles.secondaryTitle}>Uma Tarefa de cada vez!</h2>
                    </hgroup>
                    <div className={styles.buttonArea}>
                        <button>+ Criar Nova Tarefa</button>
                    </div>
                    <main>
                        <Task />
                      
                    </main>
                </section>
            </Layout>
        </>
    )
}

export default Home;