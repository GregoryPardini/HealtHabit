import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
	IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router";
import BasicSlideQuestion from "../components/BasicSlideQuestion";
import BasicSlide from "../components/BasicSlideQuestion";
import ExploreContainer from "../components/ExploreContainer";
import { AppContext } from "../components/use-reducer-context";
import '../components/firebase.js';
import { db } from "../components/firebase.js";


const Questionary: React.FC = () => {
  const [eta, setEta] = useState();
  const [sex, setSex] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [region, setRegion] = useState();
  const [fumo, setFumo] = useState();
  const [droga, setDroga] = useState();
  const [alcol, setAlcol] = useState();
  const [stileVita, setStileVita] = useState();
  const [familyDiabete, setFamilyDiabete] = useState();
  const [familyTumore, setFamilyTumore] = useState();
  const [isCeliaco, setIsCeliaco] = useState();
  const [gravidanza, setGravidanza] = useState();
  const [pillola, setPillola] = useState();
	

	const sendDataToFirebase = () => {
		/*
		var data = {
			eta: eta,
			sex: sex,
			height: height,
			weight: weight,
			region: region,
			f_fumo: fumo,
			f_droga: droga,
			f_alcol: alcol,
			stileVita: stileVita,
			familyDiabete: familyDiabete,
			familyTumore: familyTumore,
			gravidanza: gravidanza,
		};

		console.log(data);
		*/
		
		db.collection("users").doc("PRONTO").set({
			eta: eta,
			sex: sex,
			height: height,
			weight: weight,
			region: region,
			f_fumo: fumo,
			f_droga: droga,
			f_alcol: alcol,
			stileVita: stileVita,
			familyDiabete: familyDiabete,
			familyTumore: familyTumore,
			gravidanza: gravidanza,
		})
		.then(() => {
				console.log("Document successfully written!");
		})
		.catch((error) => {
				console.error("Error writing document: ", error);
		});
		
	}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
         <IonTitle>Questionario {sex}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSlides pager={true} className="fullscreen">
          <BasicSlideQuestion
            title={"Domanda 1"}
            question={"Data di nascita"}
            type={"age"}
            hook={setEta}
          />
          <BasicSlideQuestion
            title={"Domanda 2"}
            question={"Sesso"}
            type={"sex"}
            hook={setSex}
          />
          <BasicSlideQuestion
            title={"Domanda 3"}
            question={"Altezza"}
            type={"height"}
            hook={setHeight}
          />
          <BasicSlideQuestion
            title={"Domanda 4"}
            question={"Peso"}
            type={"weight"}
            hook={setWeight}
          />
          <BasicSlideQuestion
            title={"Domanda 5"}
            question={"Regione"}
            type={"region"}
            hook={setRegion}
          />
          <BasicSlideQuestion
            title={"Domanda 6"}
            question={"Frequenza fumo"}
            type={"freq"}
            hook={setFumo}
          />
          <BasicSlideQuestion
            title={"Domanda 7"}
            question={"Frequenza uso sostanze stupefacenti"}
            type={"freq"}
            hook={setDroga}
          />
          <BasicSlideQuestion
            title={"Domanda 8"}
            question={"Frequenza uso alcolici"}
            type={"freq"}
            hook={setAlcol}
          />
          <BasicSlideQuestion
            title={"Domanda 9"}
            question={"Frequenza stile di vita"}
            type={"freq"}
            hook={setStileVita}
          />
          <BasicSlideQuestion
            title={"Domanda 10"}
            question={"Diabete in famiglia"}
            type={"bool"}
            hook={setFamilyDiabete}
          />
          <BasicSlideQuestion
            title={"Domanda 11"}
            question={"Tumori in famiglia"}
            type={"bool"}
            hook={setFamilyTumore}
          />
          <BasicSlideQuestion
            title={"Domanda 12"}
            question={"Sei celiaco/a"}
            type={"bool"}
            hook={setIsCeliaco}
          />
          <BasicSlideQuestion
            title={"Domanda 13"}
            question={"Sei mai stato in gravidanza"}
            type={"bool"}
            hook={setGravidanza}
          />
					{/*
          <BasicSlideQuestion
            title={"Domanda 14"}
            question={"Hai mai usato la pillola"}
            type={"bool"}
            hook={setPillola}
          />
					*/}
					<IonSlide>
						<IonButton onClick={() => sendDataToFirebase()}>
							SEND
						</IonButton>
					</IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Questionary;
