export default function Icones(){
    return (
        <div>
            <div className="icones">
                <IonIcon name="paper-plane-outline" />
                <IonIcon name="compass-outline" />
                <IonIcon name="heart-outline" />
                <IonIcon name="person-outline" />
            </div>
        </div>
    );
}

function IonIcon(props){
    return (
        <ion-icon name={props.name}></ion-icon>
    );
}