import { IonButton, IonContent, IonHeader, IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonToolbar, IonTitle, IonButtons, IonImg, IonFab, IonFabButton } from '@ionic/react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { AppContext } from '../components/use-reducer-context';
import {Redirect, Route} from 'react-router-dom';
import {ellipse, square, triangle} from 'ionicons/icons'

import '../theme/Home.css';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Login from './Login';

import { IonReactRouter } from '@ionic/react-router';
import Questionary from './Questionary';

const Home: React.FC = () => {

  const {state, dispatch} = useContext(AppContext)
  const history = useHistory();
  return (
    <div>
      <IonFab vertical="bottom" horizontal="center" slot="fixed" className="fab-margin" >
          <IonFabButton>
            <IonImg src="assets/images/logo.png" />
         </IonFabButton>
        </IonFab>
      <IonTabs>
           
        <IonRouterOutlet>
          
          <Route exact path="/home/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/home/tab2">
            <Tab2 />
          </Route>
          <Route path="/home/tab3">
            <Tab3 />
          </Route>
          <Route path="/home/questionary">
            <Questionary />
          </Route>
          <Route exact path="/home">
            <Redirect to="/home/tab1" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/home/tab1">
            <IonIcon icon={triangle} />
      
          </IonTabButton>
          <IonTabButton tab="tab2" href="/home/tab2">
            <IonIcon icon={ellipse} />
        
          </IonTabButton>
          <IonTabButton tab="tab3" >
           
          </IonTabButton>
          <IonTabButton tab="tab4" href="/home/tab4">
            <IonIcon icon={square} />
           
          </IonTabButton>
          <IonTabButton tab="tab5" href="/home/tab5">
            <IonIcon icon={square} />
          
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
</div>


  );
};

export default Home;
