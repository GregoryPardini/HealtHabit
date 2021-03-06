# <h1 align="center">HealtHabit</h1>
<p align="center"><img align="center" src="https://github.com/GregoryPardini/HealtHabit/blob/master/ios/App/App/Assets.xcassets/AppIcon.appiconset/1024.png" width="25%" style="text-align: center"></p>


<h3 align="center">Challenge: Beyond Covid-19 MSD Italia</h3>

# Link Utili
  1. [Video presentazione (formato verticale)](https://youtu.be/9a3hPKswI5Y)
  1. [Video presentazione (formato landscape)](https://www.youtube.com/watch?v=xqUfsBED6OQ)
  2. [Dashboard per le analytics](https://public.tableau.com/profile/giulia.ciardi#!/vizhome/HealtHabit/Stat)
  3. [Presentazione Powerpoint](https://github.com/gerti98/HealtHabit/blob/master/Healthabit.pdf)

# Descrizione
A causa dell'emergenza sanitaria causata dal Covid-19, a partire da Marzo 2020, molti pazienti sono rimasti indietro nei percorsi di cura diagnostici terapeutici, nelle nuove diagnosi, nelle visite di follow-up o negli esami di routine. Ad aggravare la situazione, inoltre, c'è la totale mancanza di dati che impedisce di poter quantificare il danno di salute provocato ai cittadini che non hanno potuto sottoporsi a tali servizi

Il progetto *HealtHabit* si prefigge l'obiettivo di aiutare l'utente a tenere traccia di tutti gli esami che deve eseguire durante l'anno. Tramite un'app sviluppata ad-hoc e **già funzionante**, l'utente è invitato a compilare vari sondaggi relativi ad esami di routine o allo stile di vita in modo tale da dare consigli mirati riguardo possibili visite da effettuare.

I dati dell'applicazione vengono raccolti in modo anonimo e vengono presentati in una dashboard per fini statistici.


## Features
  * Supportata dai component del framework [Ionic](https://ionicframework.com/),  l'app si presenta con un'interfaccia facile ed intuitiva, adatta ad ogni età.
  * L'applicazioni si predispone inoltre per essere integrata con l'APP IO, essendo creata con la stessa tecnologia, ed con il portale MioDottore.it per prenotare in modo facile e veloce gli esami consigliati dall'applicazione.
  * Dashboard che aggrega i dati generati dagli utenti e ne permette la consultazione per fini statistici a chi detiene la proprietà del dato.


# WorkFlow
Per garantire una demo dell'usabilità dell'applicazione, sono stati generati dati artificiali che simulano gli inserimenti da parte di utenti immaginari.
I dati sono stati generati secondo delle logiche e i valori assegnati alle variabili seguono delle precise condizioni, esposte nel file Excel "albero_variabili" nella cartella assets. Le logiche usate per generare i dati sono state estrapolate da fonti ufficiali, quali Ministero della Salute, Fondazione Umberto Veronesi.
I dati generati sono stati poi immessi in Cloud Firestore, un database di Google cloud, di tipologia NoSQL, flessibile e scalabile per archiviare e sincronizzare i dati per lo sviluppo lato client e lato server.
E' stata inoltre inizializzata una libreria python (HealtHapy) che in futuro potrà contenere moduli e funzioni utili per il calcolo degli indicatori a partire dal database, costantemente aggiornato grazie alle azioni degli utenti.


# Stack tecnologico
  * **App Mobile**: Ionic React Framework
  * **Data Lake**: Firebase
  * **Dashboard**: Tableau Public
  * **Code**: Python, Typescript
  * **Project Management**: Trello

# Team
 * *Gregory Pardini*: Frontend App Developer
 * *Gaia Businaro*: UX Architect
 * *Olgerti Xhanej*: Frontend App Developer
 * *Giulia Ciardi*: Data Scientist
 * *Alessandro Jin*: Backend App Developer
