import styles from './Acoes.module.css'

export default function Acoes(){
    return (
        <div className={styles.acoes}>
            <div>
                <IonIcon name="heart-outline"/>
                <IonIcon name="chatbubble-outline"/>
                <IonIcon name="paper-plane-outline" />
            </div>
            <div>
                <IonIcon name="bookmark-outline" />
            </div>
        </div>
    );
}

function IonIcon(props){
    return (
        <ion-icon name={props.name}></ion-icon>
    );
}