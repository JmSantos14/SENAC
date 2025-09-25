
import styles from './style.module.css'

function UserCard(props){
    return(
        <div className={styles.container}>
            <div className={styles.task}>
                <p>Nome: {props.nome}</p>
                <p>Cargo: {props.cargo}</p>
                <img src={props.imagem} alt={props.nome} />
                <p>Descrição: {props.desc}</p>
            </div>
        </div>
    )
};

export default UserCard