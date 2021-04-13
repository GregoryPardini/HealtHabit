import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonItem,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import ExploreContainer from "../components/ExploreContainer";
  import HeaderLogo from "../components/HeaderLogo";
  import LinkUtili from "../components/LinkUtili";
  
  import { Plugins } from "@capacitor/core";
  import React from "react";
import Notifiche from "../components/Notifiche";
import { useHistory } from "react-router";
  const { Storage } = Plugins;
  
  const Impostazioni: React.FC = () => { 
    const data = async () => {
      const ret = await Storage.get({ key: "user" });
      console.log(ret);
    };
    const history = useHistory()
  
    data();
    function veloce(){
      Notifiche.schedule();
      history.push("/login");
    }
  
    return (
      <IonPage>
        <HeaderLogo />
        <IonContent>
          <IonItem lines="none">
          Demo
          </IonItem>
          <IonButton
          expand="block"
          onClick={() => {
            Storage.clear();
            console.log("Svuotato local storage");
          }}
        >
          SVUOTA LOCAL STORAGE
        </IonButton>
        <IonButton expand="block" onClick={() => veloce()}>Notifiche</IonButton>
        </IonContent>
        
         
      </IonPage>
    );
  };
  
  export default Impostazioni;
  