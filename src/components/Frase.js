import styles from './Frase.module.css'
function Frase(){
    return(
        <div className={styles.fraseConteiner}>
            <p className={styles.fraseContent}></p>
            <p>Este é um componente com uma Frase</p>
        </div>
    )
}

export default Frase
