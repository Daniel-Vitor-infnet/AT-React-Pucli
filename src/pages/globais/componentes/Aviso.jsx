import styles from '../Styles/Aviso.module.css'; 

export default function Aviso({ fecharAviso }) {
    return (
        <div className={styles.avisoOverlay}>
            <div className={styles.avisoContent}>
                <p>Informação fictícia apenas para ilustrar</p>
                <button className={styles.avisoButton} onClick={fecharAviso}>Ok, Entendido</button>
            </div>
        </div>
    );
};
