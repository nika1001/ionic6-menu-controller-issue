import { menuController } from '@ionic/core'
import { IonApp, IonButton,  IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonTitle, IonToolbar, setupConfig } from '@ionic/react';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useRef } from 'react';

setupConfig({});

const App: React.FC = () => {
  const firstMenuRef = useRef<HTMLIonMenuElement | null>(null)
  const secondMenuRef = useRef<HTMLIonMenuElement | null>(null)

  const toggleMenu = async (menuId: string) => {
    await menuController.enable(true, menuId)
    await menuController.toggle(menuId)
  }

  return (
    <IonApp>
      <IonMenu
        side="start"
        menuId="first-menu"
        contentId="main-content"
        ref={firstMenuRef}
      >
        <IonHeader>
          <IonToolbar>
            <IonTitle>First Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonLabel>Inbox</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Outbox</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonMenu
        side="start"
        menuId="second-menu"
        contentId="main-content"
        ref={secondMenuRef}
      >
        <IonHeader>
          <IonToolbar>
            <IonTitle>Second Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonLabel>Inbox2</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Outbox2</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <div className="ion-page" id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Test</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <section>
            <header>Toggle menu directly</header>
            <IonButton onClick={() => firstMenuRef.current?.toggle()}>Toggle First Menu</IonButton>
            <IonButton onClick={() => secondMenuRef.current?.toggle()}>Toggle Second Menu</IonButton>
          </section>
          <section>
            <header>Toggle menu by MenuController</header>
            <IonButton onClick={() => toggleMenu('first-menu')}>Toggle First Menu</IonButton>
            <IonButton onClick={() => toggleMenu('second-menu')}>Toggle Second Menu</IonButton>
          </section>
        </IonContent>
      </div>
    </IonApp>
  )
}

export default App;
