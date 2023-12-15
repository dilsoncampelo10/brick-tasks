import styles from './Modal.module.scss';
import upload from './icons/upload.png';

interface ModalProps {
    id?: string,
    title: string,
    handleButton: ()=>{}
}
const Modal = ({ title,handleButton }: ModalProps) => {

    return (
        <>
            <div className={styles.modal}>
                <div className={styles.modal_content}>
                    <div className={styles.modal_header}>
                        <h3>{title}</h3>
                    </div>
                    <div className={styles.modal_body}>
                        <form>
                            <input type="text" placeholder='Descrição' />
                            <select name="" id="">
                                <option value="">Pendente</option>
                                <option value="">Finalizada</option>
                            </select>
                            <label className={styles.labelFile} htmlFor="file">
                                <img src={upload} alt="upload" />
                                Imagem
                            </label>
                            <input type="file" id="file" />
                            <div>
                                <button onClick={handleButton} className={styles.cancelButton}>Cancelar</button>
                                <button>Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;