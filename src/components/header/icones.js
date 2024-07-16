import styles from './Icones.module.css'

export default function Icones(){
    return (
        <>
            <div className={styles.icones}>
                <IonIcon name="paper-plane-outline" />
                <IonIcon name="compass-outline" />
                <IonIcon name="heart-outline" />
                <IonIcon name="person-outline" />
            </div>
        </>
    );
}

function IonIcon(props){
    return (
        <ion-icon name={props.name}></ion-icon>
    );
}