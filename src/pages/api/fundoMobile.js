export default function FundoMobile(){
    return (
        <div className="fundo-mobile">
            <IonIcon name = "home"/>
            <IonIcon name = "search-outline"/>
            <IonIcon name = "add-circle-outline"/>
            <IonIcon name = "heart-outline"/>
            <IonIcon name = "person-outline"/>
        </div>
    );
}

function IonIcon(props){
    return (
        <ion-icon name={props.name}></ion-icon>
    );
}