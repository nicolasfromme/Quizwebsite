import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';



class Testbody extends React.Component {
    constructor(probs) {
      super(probs);
  
      this.state = {
        count: 1,
        VerdienstElternZsm: 0,
        lastCount: 1,
        bafog: 0,
        VerdienstElternGesch: 0,
        VerdienstStiefeltern: 0,
        Vermögen: 0,
        Zeitraum: 0,
        Einkommen: 0,
        EinkommenAusbildung: 0,
        VerdienstElternZsm: 0,

        //Daten für Formular
        Ausbildungsstätte: "",
        Ausbildungsort: "",
        Klasse: "",
        angestrebter_Abschluss: "",
        Vollzeit: "",
        vorherige_Anträge: "",

        Name: "",
        Vorname: "",
        Geburtsname: "",
        Geburtsort: "",
        Geschlecht: "", //männlich, weiblich, divers
        Geburtsdatum: 0, //ddmmjjjj
        Familienstand: "",
        Staatsangehörigkeit: "",
        Familienstand_letzter_Eintrag: 0,
        Staatsangehörigkeit_Partner: "",
        Kinder: "",

        Straße: "",
        Hausnummer: 0,
        Adresszusatz: "",
        Land: "", //Kürzel
        Plz: 0,
        Ort: "",
        
        //Adressdaten falls man während bafög auszieht
        Wohne_bei_Eltern: true,
        Wohnung_von_Eltern: true,
        StraßeA: "",
        HausnummerA: 0,
        AdresszusatzA: "",
        LandA: "", //Kürzel
        PlzA: 0,
        OrtA: "",

        Iban: "",
        Name_Bank: "",
        Name_Kontoinhaber: "", //optional falls nicht eigenes Konto

        Krankenversicherung: "",
        Pflegeversicherung: "",
        Steueridentnummer: 0,

        NameE1: "",
        VornameE1: "",
        GeschlechtE1:"",
        GeburtsdatumE1: 0, //ddmmjjjj
        SterbedatumE1: 0, //ddmmjjjj
        StaatsangehörigkeitE1: "",
        StraßeE1: "",
        HausnummerE1: 0,
        AdresszusatzE1: "",
        LandE1: "", //Kürzel
        PlzE1: 0,
        OrtE1: "",

        NameE2: "",
        VornameE2: "",
        GeschlechtE2:"",
        GeburtsdatumE2: 0, //ddmmjjjj
        SterbedatumE2: 0, //ddmmjjjj
        StaatsangehörigkeitE2: "",
        StraßeE2: "",
        HausnummerE2: 0,
        AdresszusatzE2: "",
        LandE2: "", //Kürzel
        PlzE2: 0,
        OrtE2: "",

        verheiratet: "", 

        Telefon: 0,
        Email: "",
        Übermittlung: "", 

        anwärterbezüge: "",
        leistungen_weiterbildung: "",
        Begabtenförderungswerk: "",
        
        //Einkommen
        Bewilligungszeitraum_Start: "",
        Bewilligungszeitraum_Ende: "",
        beantragte_Sozialleistungen: "",
        Riester_Rente: 0,
        Einnahmen: "", //Ja oder Nein
        Arbeitseinnahmen: 0,
        vl: "", // Ja oder Nein
        Ausbildungsvergütung: 0,
        Einkommen_Gewerbe: 0,
        Einkommen_Kapital: 0,
        Waisengeld: 0,
        Ausbildungsbeihilfen: 0,
        Unterhaltsleistungen: 0,
        Unterhaltsvorschussleistungen: 0,
        Weitere_Einnahmen: 0,

        // Vermögen
        Barvermögen: 0,
        Bankvermögen: 0,
        Bauspar: 0,
        Wertpapiere: 0,
        Kraftfahrzeuge: 0,
        Lebensversicherung: 0,
        Höhe_Riester_Rente: 0,
        Immobilien: 0,
        Betriebsvermögen: 0,
        Geldforderungen: 0,
        sonstiges_Vermögen: 0,

        anrechnungsfreie_Vermögenswerte: 0,
        Übergangsbeihilfen: 0,

        // Schulden
        Hypotheken: 0,
        Lasten: 0,
        sonstige_Schulden: 0,

        Schüler: "", // Ja oder Nein
        Sorge: "", // Ja oder Nein
        Name_Sorge: "",
        Vorname_Sorge: "",
        Straße_Sorge: "",
        Hausnummer_Sorge: 0,
        Adresszusatz_Sorge: "",
        Land_Sorge: "",
        Plz_Sorge: 0,
        Ort_Sorge: "",
        Ausbildungsstätte_nicht_erreichbar: "", // Ja oder Nein
        eigener_Haushalt: "", // Ja oder Nein
        eigener_Haushalt_Kind: "", // Ja oder Nein
        sonstiger_Grund_alleine_wohnen: ""

      };

      
    }

    
  
    increment = (val) => {
      this.setState({
        count: this.state.count + val,
        lastCount: this.state.count
      })
      console.log(this.state.bafog)
    }

    decrement = (val) => {
      this.setState({
        count: this.state.count - val,
        lastCount: this.state.count
      })
    }
  
    Goback = () => {
      console.log(this.state.count)
      console.log(this.state.lastCount)
      this.setState({
        count: this.state.count - this.state.lastCount
      });
    }

    postData = () => { 
      console.log("fhjkds")
      const d2 = "Hello"
      const data = {d2}
      axios.post("http://localhost:5000/api", data)
  }

    /*
        1004: 0 -> bei Eltern wohnend
        1013: 694 -> alleine wohnend
        1005: 356
        1014: 694
        1006: 557
        1015: 790
        1007:563
        1016: 832
        1008: 592
        1017: 861

        */

    bedarfsrechner = (val) => {
      this.setState({
        count: this.state.count + val
      })
      console.log(this.state.count);
      var bedarfssatz = 0;
      if (this.state.count === 1004) {
        bedarfssatz = 0
      }
      else if (this.state.count === 1005) {
        bedarfssatz = 356
      }
      else if (this.state.count === 1006) {
        bedarfssatz = 557
      }
      else if (this.state.count === 1007) {
        bedarfssatz = 563
      }
      else if (this.state.count === 1008) {
        bedarfssatz = 592
      }
      else if (this.state.count === 1013) {
        bedarfssatz = 694
      }
      else if (this.state.count === 1014) {
        bedarfssatz = 694
      }
      else if (this.state.count === 1015) {
        bedarfssatz = 790
      }
      else if (this.state.count === 1016) {
        bedarfssatz = 832
      }
      else if (this.state.count === 1017) {
        bedarfssatz = 861
      }

      this.setState({
        bafog: bedarfssatz,
        count: 1018
      })
      //console.log(this.state.count);
      console.log(this.state.bafog);
      console.log(bedarfssatz);
        
    } 

    logger = () => {
    
     var bedarfssatz; 
    if (this.state.count === 1013) {
      bedarfssatz = 11263
    }

      console.log("data:")
      console.log(this.state.count)
      //console.log(this.state.bafog)
      console.log(bedarfssatz)

      
    }

    handleSubmitVerdienstElternZsm = (event) => {
      var abzug = ((this.state.VerdienstElternZsm / 12) - 1890) / 2; 
      console.log("Verdienst Eltern Zusammen")
      console.log(abzug)

    if (abzug > 0) {
      this.setState({
        bafog: this.state.bafog - abzug,
        count: 1021
      });
    } else {
      this.setState({
        count: 1021
      })
    }

    if (this.state.bafog <= 0) {
      this.setState({
        count: 1999
      });
    }






  /*      if (VerdienstEltern > 0) {
        console.log("Verdienst über 0")
        var bafogAktuell = this.state.bafog - VerdienstEltern;
      } else {
        var bafogAktuell = this.state.bafog
      }

      console.log(bafogAktuell);
      






      if (bafogAktuell <= 0) {
        this.setState({
          count: 1999
        });
      } else {
        this.setState({
          bafog: this.state.bafog - VerdienstEltern,
          count: 1021
        });
      }
      */
    }

    handleSubmitVerdienstElternGesch = () => {
      var VerdienstEltern = this.state.VerdienstElternGesch;
      console.log(VerdienstEltern)
      VerdienstEltern = ((VerdienstEltern / 12) - 1260) / 2; 
      var bafogAktuell = this.state.bafog - VerdienstEltern;
      if (bafogAktuell <= 0) {
        this.setState({
          count: 1999
        });
      } else {
        this.setState({
          bafog: this.state.bafog - VerdienstEltern,
          count: 1023
        });
      }
    }

    handleSubmitVerdienstStiefeltern = () => {
      var VerdienstEltern = this.state.VerdienstStiefeltern;
      VerdienstEltern = ((VerdienstEltern / 12) - 630) / 2; 
      var bafogAktuell = this.state.bafog - VerdienstEltern;
      if (bafogAktuell <= 0) {
        this.setState({
          count: 1999
        });
      } else {
        this.setState({
          bafog: this.state.bafog - VerdienstEltern,
          count: 1021
        });
      }
    }

    handleSubmitVermögen = () => {
      var Vermögen = this.state.Vermögen;
      console.log(this.state.VerdienstElternZsm)
      
      if (Vermögen !== 0) {
        this.setState({
          count: 1031
        })
      }
      else {
        this.setState({
          count: 1032
        })
      }
    }

    handleSubmitBafögZeitraum = () => {
      var Zeitraum = this.state.Zeitraum;
      var AbzugVermögen = (this.state.Vermögen - 8200) / Zeitraum;
      console.log("Zeitraum")
      console.log(this.state.bafog)
      if (AbzugVermögen > 0) {
        this.setState({
          count: 1032,
          bafog: this.state.bafog - AbzugVermögen
        });
      } else {
        this.setState({
          count: 1032
        });
      }
    }

    handleSubmitEinkommen = () => { //id: 1032
      var Einkommen = this.state.Einkommen - 450;
      console.log("Einkommen")
      console.log(this.state.bafog)
      if (Einkommen > 0) {
        this.setState({
          count: 1033,
          bafog: this.state.bafog - Einkommen
        });
      } else {
        this.setState({
          count: 1033
        });
      }
    }

    handleSubmitEinkommenAusbildung = () => { // id: 1033
      var Einkommen = this.state.EinkommenAusbildung;
      console.log("Einkommen")
      console.log(this.state.bafog)
      if (Einkommen > 0) {
        this.setState({
          count: 1034,
          bafog: this.state.bafog - Einkommen
        });
      } else {
        this.setState({
          count: 1034
        });
      }
    }



    handleChangeElternZsm = (event) => {
      this.setState({
        VerdienstElternZsm: event.target.value
      });
      console.log(this.state.VerdienstElternZsm)
    }

    handleChangeElternGesch = (event) => {
      this.setState({
        VerdienstElternGesch: event.target.value
      });
    }

    handleChangeStiefeltern = (event) => {
      this.setState({
        VerdienstStiefeltern: event.target.value
      });
    }

    handleChangeVermögen = (event) => {
      this.setState({
        Vermögen: event.target.value
      });
      console.log(this.state.VerdienstElternZsm)
    }

    handleChangeBafögzeitraum = (event) => {
      this.setState({
        Zeitraum: event.target.value
      });
    }

    handleChangeEinkommen = (event) => {
      this.setState({
        Einkommen: event.target.value
      });
    }

    handleChangeEinkommenAusbildung = (event) => {
      this.setState({
        EinkommenAusbildung: event.target.value
      });
    }

    //Anspruch Bafög
  
    Startseite = () => { // id: 1
      return(
        <div id="quiz">
          <Typography variant="h3" id="uberschrift">Startseite</Typography>
          <Typography variant="body1" id="text">Finde in wenigen Minuten heraus ob und wenn ja wie viel Bafög dir zusteht - ohne kompliziertes Beamtendeutsch!</Typography>
          <div id="centerBtn">
            <Button onClick={() => this.increment(1)} variant="contained" color="secondary" id="button">
            Jetzt starten
            </Button>
            <Button onClick={() => this.postData()} variant="contained" color="secondary" id="button">
            Post Data
            </Button>
          </div>
            
          <div id="centerBtn">
            <Button onClick={() => this.increment(999)} color="secondary" id="buttonBack">
            Ich weiß dass ich Anspruch auf Bafög habe.
            </Button>
          </div>  
        </div>
      )
    }
  
    Frage1 = () => { // id: 2
      return(
        <div id="quiz">
          <h2 id="text">Was bist du in dem Zeitraum, für den du Bafög beantragst?</h2>
          <div id="centerBtn">
            <Button id="button" onClick={() => this.increment(9)} variant="contained" color="secondary">
            Schüler
            </Button>
          </div>
          <div id ="centerBtn">
            <Button id="button" onClick={() => this.increment(20)} variant="contained" color="secondary">
            Schulische Ausbildung
            </Button>
          </div>
          <div id ="centerBtn">
            <Button id="button" onClick={() => this.increment(3)} variant="contained" color="secondary">
            Student
            </Button>
          </div>

          

          <div id="centerBtn">
            <Button onClick={() => this.Goback()}  color="secondary" id="buttonBack">
            zurück
            </Button>
          </div>
        </div>
      )
    }
  
    Studentenrichtung = () => { //id: 5
      return(
        <div id="quiz">
          <h2 id="text">In welchem Studiengang befindest oder wirst Du Dich befinden?</h2>

          <div id ="centerBtn">
            <Button id="button" onClick={() => this.increment(1)} variant="contained" color="secondary">
            Bachelorstudiengang
            </Button>
          </div>

          <div id ="centerBtn">
            <Button id="button" onClick={() => this.increment(1)} variant="contained" color="secondary">
            Masterstudiengang
            </Button>
          </div>

          <div id ="centerBtn">
            <Button id="button" onClick={() => this.increment(1)} variant="contained" color="secondary">
            Diplom
            </Button>
          </div>

          <div id ="centerBtn">
            <Button id="button" onClick={() => this.increment(1)} variant="contained" color="secondary">
            Magister
            </Button>
          </div>

          <div id ="centerBtn">
            <Button id="button" onClick={() => this.increment(1)} variant="contained" color="secondary">
            Staatsexamen
            </Button>
          </div>

          <div id ="centerBtn">
            <Button id="button" onClick={() => this.increment(1)} variant="contained" color="secondary">
            Postgraduales Diplom
            </Button>
          </div>

          <div id ="centerBtn">
            <Button id="button" onClick={() => this.increment(95)} variant="contained" color="secondary">
            Promotion
            </Button>
          </div>

          
          <div id="centerBtn">
            <Button onClick={() => this.Goback()}  color="secondary" id="buttonBack">
            zurück
            </Button>
          </div>
        </div>
      )
    }
  
    FrageFortbildung = () => { // id: 6 oder 11 oder 22
      return(
        <div id="quiz">
          <h2 id="text">Ist die Ausbildung, für die du Bafög beantragen möchtest, eine Fortbildung z.B. Meisterprüfung oder staatlich geprüfter Fachwirt?</h2>
          <div id ="centerBtn">
            <Button id="button" onClick={() => this.increment(94)} variant="contained" color="secondary">
            Ja
            </Button>
          </div>

          <div id ="centerBtn">
            <Button id="button" onClick={() => this.increment(1)} variant="contained" color="secondary">
            Nein
            </Button>
          </div>

          
          <div id="centerBtn">
            <Button onClick={() => this.Goback()}  color="secondary" id="buttonBack">
            zurück
            </Button>
          </div>
        </div>
      )
    }

    FormularNichtMöglich = () => { //id: 100 oder 116
      return(
        <div id="quiz">
          <h2 id="text">Tut uns leid, leider können wir dieses Formular nicht für Sie ausfüllen.</h2>
         
          
          <div id="centerBtn">
            <Button onClick={() => this.Goback()}  color="secondary" id="buttonBack">
            zurück
            </Button>
          </div>
        </div>
      )
    }

    FrageArtHochschule = () => { // id: 7
      return(
        <div id="quiz">
          <h2 id="text">Welche Art von Hochschule besuchst du oder wirst du besuchen?</h2>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.increment(1)}  variant="contained" color="secondary">
            (Fach-)Hochschule / Universität
            </Button>
          </div>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.increment(1)}  variant="contained" color="secondary">
              Akademie
            </Button>
          </div>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.increment(1)}  variant="contained" color="secondary">
            Abendgymnasium
            </Button>
          </div>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.increment(1)}  variant="contained" color="secondary">
            Kolleg
            </Button>
          </div>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.increment(94)}  variant="contained" color="secondary">
            Anderes Ausbildungsverhältnis
            </Button>
          </div>

         
          <div id="centerBtn">
            <Button onClick={() => this.Goback()}  color="secondary" id="buttonBack">
            zurück
            </Button>
          </div>
            

        </div>
      )
    }

    KeinAnspruch = () => { //id: 101
      return(
        <div id="quiz">
          <h2 id="text">Tut uns leid, leider hast du keinen Anspruch auf Bafög.</h2>
         
          
          <div id="centerBtn">
            <Button onClick={() => this.Goback()}  color="secondary" id="buttonBack">
            zurück
            </Button>
          </div>
        </div>
      )
    }

    VollzeitTeilzeit = () => { //id: 8
      return(
        <div id="quiz">
          <h2 id="text">Absolvierst du dein Studium in Voll- oder Teilzeit?</h2>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.increment(94)}  variant="contained" color="secondary">
            Vollzeit
            </Button>
          </div>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.increment(93)}  variant="contained" color="secondary">
            Teilzeit
            </Button>
          </div>
         
          
          <div id="centerBtn">
            <Button onClick={() => this.Goback()}  color="secondary" id="buttonBack">
            zurück
            </Button>
          </div>
        </div>
      )
    }

    Anspruch = () => { //id: 102
      return(
        <div id="quiz">
          <h2 id="text">Hurra, du hast Anspruch auf Bafög.</h2>

          <div id="centerBtn">
            <Button onClick={() => this.increment(898)} variant="contained" color="secondary">
              Wie viel Bafög steht mir zu?
            </Button>
          </div>
         
          <div id="centerBtn">
            <Button onClick={() => this.Goback()}  color="secondary" id="buttonBack">
            zurück
            </Button>
          </div>
        </div>
      )
    }

    FrageArtSchule = () => { // id: 12
      return(
        <div id="quiz">
          <h2 id="text">Welche Art von Schule besuchst du oder wirst du besuchen?</h2>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.decrement(4)}  variant="contained" color="secondary">
            (Berufs-) Fachschule ohne Berufsausbildung als Voraussetzung
            </Button>
          </div>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.decrement(4)}  variant="contained" color="secondary">
            Abendhaupt- oder Abendrealschule
            </Button>
          </div>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.decrement(4)}  variant="contained" color="secondary">
            Berufsaufbauschule
            </Button>
          </div>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.decrement(4)}  variant="contained" color="secondary">
            Fachoberschule mit Berufsausbildung als Voraussetzung
            </Button>
          </div>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.decrement(4)}  variant="contained" color="secondary">
            Haupt-, Realschule oder Gymnasium (allg. bildende weiterführende Schule)
            </Button>
          </div>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.decrement(4)}  variant="contained" color="secondary">
            Pflichtpraktikum
            </Button>
          </div>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.increment(94)}  variant="contained" color="secondary">
            Anderes Ausbildungsverhältnis
            </Button>
          </div>

          
          <div id="centerBtn">
            <Button onClick={() => this.Goback()}  color="secondary" id="buttonBack">
            zurück
            </Button>
          </div>

       </div>
        )
    }

    FrageArtSchulischeAusbildung = () => { // id: 23
      return(
        <div id="quiz">
          <h2 id="text">Welche Art von Ausbildungsstätte besuchst du oder wirst du besuchen?</h2>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.decrement(15)}  variant="contained" color="secondary">
            (Berufs-) Fachschule ohne Berufsausbildung als Voraussetzung
            </Button>
          </div>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.decrement(15)}  variant="contained" color="secondary">
            Abendhaupt- oder Abendrealschule
            </Button>
          </div>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.decrement(15)}  variant="contained" color="secondary">
            Berufsaufbauschule
            </Button>
          </div>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.decrement(15)}  variant="contained" color="secondary">
            Fachoberschule mit Berufsausbildung als Voraussetzung
            </Button>
          </div>

          <div id="centerBtn">
            <Button id="button" id="button" onClick={() => this.decrement(15)}  variant="contained" color="secondary">
            Haupt-, Realschule oder Gymnasium (allg. bildende weiterführende Schule)
            </Button>
          </div>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.decrement(15)}  variant="contained" color="secondary">
            Pflichtpraktikum
            </Button>
          </div>

          <div id="centerBtn">
            <Button id="button" onClick={() => this.increment(79)}  variant="contained" color="secondary">
            Anderes Ausbildungsverhältnis
            </Button>
          </div>

          
          <div id="centerBtn">
            <Button onClick={() => this.Goback()}  color="secondary" id="buttonBack">
            zurück
            </Button>
          </div>

        </div>
        )
    }



    // Höhe Bafög ausrechnen

    StartseiteHöheBafög = () => { //id: 1000
      return(
        <div id="quiz">
          <h2 id="text">Finde hier heraus, wie viel Bafög dir zusteht.</h2>
          <Button onClick={() => this.increment(1)}>
            Start
          </Button>
        </div>
      )
    }

    FrageWohnenBeiEltern = () => { //id: 1001
      return(
        <div id="quiz">
          <h2 id="text">Wirst du für den Zeitraum, für den du Bafög beantragst bei deinen Eltern wohnen?</h2>
          <div id="text">
            <Button onClick={() => this.increment(1)}>
              Ja
            </Button>
          </div>
            
  
          <div id="text">
            <Button onClick={() => this.increment(10)}>
              Nein
            </Button>
          </div>
        </div>
      )
    }

    FrageAusbildung = () => { //id: 1002 - 1011
      return(
        <div id="quiz">
          <h2 id="text">Was bist du in dem Zeitraum, für den du Bafög beantragst?</h2>
          <div id="text">
            <Button onClick = {() => this.increment(2)}>
            Weiterführende allgemeinbildende Schulen und Berufsfachschulen ab Klasse 10 sowie Fach- und Fachoberschulen, wenn der Besuch keine abgeschlossene Berufsausbildung voraussetzt
            </Button>
          </div>
  
          <div id="text">
            <Button onClick = {() => this.increment(3)}>
            Berufsfachschul- und Fachschulklassen, die in einem zumindest zweijährigen Bildungsgang einen berufsqualifizierenden Abschluss vermitteln, wenn der Besuch keine abgeschlossene Berufsausbildung voraussetzt
            </Button>
          </div>

          <div id="text">
            <Button onClick = {() => this.increment(4)}>
            Abendhaupt- und Abendrealschulen, Berufsaufbauschulen, Fachoberschulklassen, deren Besuch eine abgeschlossene Berufsausbildung voraussetzt
            </Button>
          </div>

          <div id="text">
            <Button onClick = {() => this.increment(5)}>
            Fachschulklassen, deren Besuch eine abgeschlossene Berufsausbildung voraussetzt, Abendgymnasien, Kollegs
            </Button>
          </div>

          <div id="text">
            <Button onClick = {() => this.increment(6)}>
              Höhere Fachschulen, Akademien, Hochschulen
            </Button>
          </div>
        </div>
      )
    }

    StartEltern = () => { 
      return(
        <div id="quiz">
          <h2 id="text">Sehr gut, den ersten Teil hast du geschafft!</h2>
          <p id="text">Da dein individueller Bafög-Betrag von deinen Eltern abhängt, brauchen wir jetzt noch einige Information über diese.</p>
          <Button onClick = {() => this.bedarfsrechner()}>
            Weiter
          </Button>
        </div>
      )
    }

    Eltern1 = () => { // id: 1018
      return(
        <div id="quiz">
          <h2 id="text">Trifft eine der Folgenden Aussagen auf dich zu?</h2>
          <p id="text">Der Aufenthaltsort meiner Eltern ist unbekannt</p>
          <p id="text">Meine Eltern leben im Ausland und müssen rechtlich keinen Unterhalt zahlen</p>
          <p id="text">Die Ausbildungsförderung ist für den Besuch eines Abendgymnasiums oder eines Kollegs</p>
          <p id="text">Ich bin über 30 Jahre alt zum Beginn der Ausbildung</p>
          <p id="text">Ich habe bereits 5 Jahre vor Beginn der Ausbildung gearbeitet, nachdem ich bereits 18 Jahre alt war - in dieser Zeit hat mein Verdienst gereicht um mich vollständig zu versorgen</p>
          <Button onClick = {() => this.increment(3)}>
            Ja 
          </Button>
          <Button onClick = {() => this.increment(1)}>
            Nein
          </Button>
        </div>
      )
    }

    ElternGeschieden = () => { // id: 1019
      return(
        <div id="quiz">
          <h2 id="text">Sind deine Eltern geschieden?</h2>
          <Button onClick = {() => this.increment(3)}>
            Ja 
          </Button>
          <Button onClick = {() => this.increment(1)}>
            Nein
          </Button>
        </div>
      )
    }

    VerdienstElternZusammen = () => { // id: 1020
      return(
        <div id="quiz">
          <h2 id="text">Was haben deine Eltern zusammen 2 Jahre vor dem Zeitraum, für den du Bafög beantragen möchtest, verdient? </h2>
          <form>
        <label>
          Name:
          <input type="number" value={this.state.VerdienstElternZsm} onChange={this.handleChangeElternZsm} />
        </label>
        <input type="submit" value="Submit" />
        
      </form>
      <Button onClick = {() => this.handleSubmitVerdienstElternZsm()}>
            Weiter
        </Button>
          
          
        </div>
      )
    }

    BetragBafog0 = () => { // id: 1999
      return(
        <div id="quiz">
          <h2 id="text">Leider erhälst du kein Bafög :(</h2>
          <p id="text">Du hast zwar Anspruch auf Bafög, aber der Betrag den du erhalten würdest beträgt 0€. Dementsprechend macht es für dich keinen Sinn Bafög zu beantragen.</p>
        </div>
      )
    }

    ElternFertig = () => { // id: 1021
      return(
        <div id="quiz">
          <h2 id="text">Fast geschafft!</h2>
          <p id="text">Jetzt fehlen nur noch Informationen über deine Einkünfte, dann erfährst du wieviel Bafög dir zusteht.</p>
          <Button onClick = {() => this.increment(9)}>
            Weiter
          </Button>
        </div>
      )
    }

    VerdienstElternGesch = () => { // id: 1022
      return(
        <div id="quiz">
          <h2 id="text">Was hat deine Mutter/ dein Vater 2 Jahre vor dem Zeitraum, für den du Bafög beantragen möchtest, verdient? </h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Nettobetrag:
              <input type="number" value={this.state.VerdienstElternGesch} onChange={this.handleChangeElternGesch} />
            </label>
          </form>
          <Button onClick = {() => this.handleSubmitVerdienstElternGesch()}>
            Submit
          </Button>
        </div>
      )
    }

    VerdienstStiefEltern = () => { // id: 1023
      return(
        <div id="quiz">
          <h2 id="text">Was hat deine Stiefmutter/ dein Stiefvater 2 Jahre vor dem Zeitraum, für den du Bafög beantragen möchtest, verdient? </h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Nettobetrag:
              <input type="number" value={this.state.VerdienstElternGesch} onChange={this.handleChangeStiefeltern} />
            </label>
          </form>
          <Button onClick = {() => this.handleSubmitVerdienstStiefeltern()}>
            Submit
          </Button>
        </div>
      )
    }

    Vermögenstart = () => { // id: 1030
      return(
        <div id="quiz">
          <h2 id="text">Eigenes Vermögen</h2>
          <p id="text">Auch dein eigenes Vermögen kann deinen Bafög-Betrag beeinflussen. Falls dein momentanes Vermögen allerdings unter 8200€ liegt wird es nicht berücksichtigt - du kannst dieses Feld einfach auf 0 lassen.</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Privatvermögen
              <input type="number" value={this.state.Vermögen} onChange={this.handleChangeVermögen} />
            </label>
          </form>
          <Button onClick = {() => this.handleSubmitVermögen()}>
            Submit
          </Button>
        </div>
      )
    }

    Bafögzeitraum = () => { // id: 1031
      return(
        <div id="quiz">
          <h2 id="text">Bafög-Zeitraum</h2>
          <p id="text">Wie lange möchstest du Bafög beantragen?</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Monate
              <input type="number" value={this.state.Zeitraum} onChange={this.handleChangeBafögzeitraum} />
            </label>
          </form>
          <Button onClick = {() => this.handleSubmitBafögZeitraum()}>
            Submit
          </Button>
        </div>
      )
    }

    Einkommen = () => { // id: 1032
      return(
        <div id="quiz">
          <h2 id="text">Einkommen</h2>
          <p id="text">Verdienst du mehr als 450€ im Monat? Falls nicht kannst du das Feld einfach auf 0 lassen.</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Nettoeinkommen pro Monat:
              <input type="number" value={this.state.Einkommen} onChange={this.handleChangeEinkommen} />
            </label>
          </form>
          <Button onClick = {() => this.handleSubmitEinkommen()}>
            Submit
          </Button>
        </div>
      )
    }

    EinkommenAusbildung = () => { // id: 1033
      return(
        <div id="quiz">
          <h2 id="text">Verdienst in der Ausbildung</h2>
          <p id="text">Verdienst du in deiner Ausbildung Geld? Wenn nein kannst du das Feld einfach auf 0 lassen.</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Nettoeinkommen pro Monat:
              <input type="number" value={this.state.EinkommenAusbildung} onChange={this.handleChangeEinkommenAusbildung} />
            </label>
          </form>
          <Button onClick = {() => this.handleSubmitEinkommenAusbildung()}>
            Submit
          </Button>
        </div>
      )
    }

    BafögEnde = () => { // id: 1034
      return(
        <div id="quiz">
          <h2 id="text">Fertig!</h2>
          <p id="text">Du hast Anspruch auf {this.state.bafog}€ im Monat!</p>
          
        </div>
      )
    }

    // Daten

    AngabenAusbildung = () => { // id: 1100
      return(
        <div id="quiz">
          <h2 id="text">Informationen über die Ausbildung</h2>
          <form onSubmit={this.handleSubmit} >
            <label>
              Name deiner Ausbildungsstätte:
              <input type="text" value={this.state.Ausbildungsstätte} onChange={this.handleChange("Ausbildungsstätte")} />
            </label>

            <label>
            Ort deiner Ausbildungsstätte:
              <input type="text" value={this.state.Ausbildungsort} onChange={this.handleChange("Ausbildungsort")} />
            </label>

            <label>
            Klasse/Fachrichtung:
              <input type="text" value={this.state.Klasse} onChange={this.handleChange("Klasse")} />
            </label>

            <label>
            Dein angestrebter Abschluss:
              <input type="text" value={this.state.angestrebter_Abschluss} onChange={this.handleChange("angestrebter_Abschluss")} />
            </label>

            <label>
              Machst du eine Vollzeitausbildung? (mindestens 30 ECTS-Leistungspunkte durchschnittlich pro Semester oder 20 Zeitstunden in der Schule)
              <select value={this.state.Vollzeit} onChange={this.handleChange("Vollzeit")}>
                <option value="ja">Ja</option>
                <option value="nein">Nein</option>
              </select>
            </label>

            <label>
            Falls du schonmal einen Bafög-Antrag gestellt hast: was war dein bisheriges Amt für die Ausbildungsförderung?
              <input type="text" value={this.state.Klasse} onChange={this.handleChange("Klasse")} />
            </label>

            <label>
            Falls du schonmal einen Bafög-Antrag gestellt hast: was war deine bisherige Förderungsnummer?
              <input type="text" value={this.state.Klasse} onChange={this.handleChange("Klasse")} />
            </label>

          </form>
          <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
            Abschicken
          </Button>
        </div>
      )
    }

    AngabenPerson = () => { // id: 1101
    return(
      <div id="quiz">
        <h2 id="text">Informationen über dich</h2>
        <form onSubmit={this.handleSubmit} >
          <label>
            Name:
            <input type="text" value={this.state.Name} onChange={this.handleChange("Name")} />
          </label>

          <label>
          Vorname:
            <input type="text" value={this.state.Vorname} onChange={this.handleChange("Vorname")} />
          </label>

          <label>
          Geburtsname:
            <input type="text" value={this.state.Geburtsname} onChange={this.handleChange("Geburtsname")} />
          </label>

          <label>
          Geburtsort:
            <input type="text" value={this.state.Geburtsort} onChange={this.handleChange("Geburtsort")} />
          </label>

          <label>
          Geschlecht:
            <select value={this.state.Geschlecht} onChange={this.handleChange("Geschlecht")}>
              <option value="männlich">männlich</option>
              <option value="weiblich">weiblich</option>
              <option value="divers">divers</option>
            </select>
          </label>

          <label>
            Geburtsdatum:
            <input type="text" value={this.state.Geburtsdatum} onChange={this.handleChange("Geburtsdatum")} />
          </label>

          <label>
          Familienstand:
            <select value={this.state.Familienstand} onChange={this.handleChange("Familienstand")}>
              <option value="ledig">ledig</option>
              <option value="verheiratet">verheiratet</option>
              <option value="dauernd getrennt lebend">dauernd getrennt lebend</option>
              <option value="verwitwet">verwitwet</option>
              <option value="geschieden/aufgehoben">geschieden/aufgehoben</option>
            </select>
          </label>

          <label>
          Hat sich dein Familienstand seit der letzten Erklärung geändert? Wenn ja gib bitte das Datum der Änderung an:
            <input type="text" value={this.state.Familienstand_letzter_Eintrag} onChange={this.handleChange("Familienstand_letzter_Eintrag")} />
          </label>

          <label>
          Staatsangehörigkeit:
            <input type="text" value={this.state.Staatsangehörigkeit} onChange={this.handleChange("Staatsangehörigkeit")} />
          </label>

          <label>
          Staatsangehörigkeit Lebenspartner:
            <input type="text" value={this.state.Staatsangehörigkeit_Partner} onChange={this.handleChange("Staatsangehörigkeit_Partner")} />
          </label>

          <label>
          Hast du Kinder?
            <select value={this.state.Familienstand} onChange={this.handleChange("Familienstand")}>
              <option value="Ja">Ja</option>
              <option value="Nein">Nein</option>
            </select>
          </label>

        </form>
        <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
          Abschicken
        </Button>
      </div>
    )
    }
  
    AngabenAnschrift = () => { // id: 1102
    return(
      <div id="quiz">
        <h2 id="text">Anschrift deines ständigen Wohnsitzes</h2>
        <form onSubmit={this.handleSubmit} >
          <label>
            Straße:
            <input type="text" value={this.state.Straße} onChange={this.handleChange("Straße")} />
          </label>
  
          <label>
          Hausnummer:
            <input type="number" value={this.state.Hausnummer} onChange={this.handleChange("Hausnummer")} />
          </label>
  
          <label>
          Adresszusatz:
            <input type="text" value={this.state.Adresszusatz} onChange={this.handleChange("Adresszusatz")} />
          </label>
  
          <label>
          Ort:
            <input type="Number" value={this.state.Ort} onChange={this.handleChange("Ort")} />
          </label>
  
          <label>
          Postleitzahl:
            <input type="Number" value={this.state.Plz} onChange={this.handleChange("Plz")} />
          </label>
  
          <label>
          Land:
            <input type="text" value={this.state.Land} onChange={this.handleChange("Land")} />
          </label>
  
        </form>
        <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
          Abschicken
        </Button>
      </div>
    )
    }
  
    AngabenAnschrift2 = () => { // id: 1103
    return(
      <div id="quiz">
      <h2 id="text">Anschrift während deiner Ausbildung</h2>
      <form onSubmit={this.handleSubmit} >
      <label>
        Wohnst du während der Ausbildung, für die du Bafög beantragst, bei deinen Eltern/ einem Elternteil?
          <select value={this.state.Wohne_bei_Eltern} onChange={this.handleChange("Wohne_bei_Eltern")}>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </label>

        <label>
        Falls du nicht mit deinen Eltern wohnst: gehört dein Wohnraum deinen Eltern/ einem Elternteil?
          <select value={this.state.Wohnung_von_Eltern} onChange={this.handleChange("Wohnung_von_Eltern")}>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>

        </label>
        <p id="text">Bitte gib im folgenden die Adressdaten deiner Anschrift während des Studiums an.
        <br/>
        Du musst den Abschnitt nur ausfüllen, wenn deine Anschrift während deiner Ausbildung sich von deinem ständigen Wohnsitz unterscheidet.
        </p>
        <label>
          Straße:
          <input type="text" value={this.state.StraßeA} onChange={this.handleChange("StraßeA")} />
        </label>

        <label>
        Hausnummer:
          <input type="number" value={this.state.HausnummerA} onChange={this.handleChange("HausnummerA")} />
        </label>

        <label>
        Adresszusatz:
          <input type="text" value={this.state.AdresszusatzA} onChange={this.handleChange("AdresszusatzA")} />
        </label>

        <label>
        Ort:
          <input type="Number" value={this.state.OrtA} onChange={this.handleChange("OrtA")} />
        </label>

        <label>
        Postleitzahl:
          <input type="Number" value={this.state.PlzA} onChange={this.handleChange("PlzA")} />
        </label>

        <label>
        Land:
          <input type="text" value={this.state.LandA} onChange={this.handleChange("LandA")} />
        </label>

      </form>
      <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
        Abschicken
      </Button>
      </div>
      )
    }

    AngabenBank = () => { // id: 1104
      return(
        <div id="quiz">
          <h2 id="text">Kontoinformationen</h2>
          <form onSubmit={this.handleSubmit} >
            <label>
              IBAN:
              <input type="text" value={this.state.Iban} onChange={this.handleChange("Iban")} />
            </label>

            <label>
              Name der Bank:
              <input type="text" value={this.state.Name_Bank} onChange={this.handleChange("Name_Bank")} />
            </label>

            <label>
              Name des Kontoinhabers, falls das Konto nicht auf deinen Namen läuft:
              <input type="text" value={this.state.Name_Kontoinhaber} onChange={this.handleChange("Name_Kontoinhaber")} />
            </label>   
    
          </form>
          <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
          Weiter
          </Button>
        </div>
      )
    }

    AngabenAnschrift2 = () => { // id: 1105
      return(
        <div id="quiz">
        <h2 id="text">Anschrift während deiner Ausbildung</h2>
        <form onSubmit={this.handleSubmit} >
        <label>
          Deine Krankenversicherung während des Ausbildung:
            <select value={this.state.Krankenversicherung} onChange={this.handleChange("Krankenversicherung")}>
              <option value="gesetzlich familienversichert">gesetzlich familienversichert</option>
              <option value="studentisch gesetzlich versichert">studentisch gesetzlich versichert</option>
              <option value="privat versichert">privat versichert</option>
              <option value="freiwillig gesetzlich versichert">freiwillig gesetzlich versichert</option>
              <option value="anders versichert">anders versichert</option>
            </select>
          </label>
  
          <label>
          Bist du während der Ausbildung freiwillig beitragspflichtig pflegeversichert?
            <select value={this.state.Pflegeversicherung} onChange={this.handleChange("Pflegeversicherung")}>
              <option value="ja">Ja</option>
              <option value="nein">Nein</option>
            </select>
          </label>
          
          {this.state.Krankenversicherung === "gesetzlich familienversichert" &&
            <label>
              <input type="text" value={this.state.Steueridentnummer} onChange={this.handleChange("Steueridentnummer")} />
            </label>
          }
          
  
        </form>
        <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
          Abschicken
        </Button>
        </div>
        )
    }

    AngabenEltern1 = () => { // id: 1106
      return(
        <div id="quiz">
          <h2 id="text">Informationen über ein Elternteil</h2>
          <form onSubmit={this.handleSubmit} >
            <label>
              Name:
              <input type="text" value={this.state.NameE1} onChange={this.handleChange("NameE1")} />
            </label>
  
            <label>
            Vorname:
              <input type="text" value={this.state.VornameE1} onChange={this.handleChange("VornameE1")} />
            </label>
  
            <label>
            Geburtsdatum:
              <input type="text" value={this.state.GeburtsdatumE1} onChange={this.handleChange("GeburtsdatumE1")} />
            </label>
  
            <label>
            Sterbedatum:
              <input type="text" value={this.state.SterbedatumE1} onChange={this.handleChange("SterbedatumE1")} />
            </label>
  
            <label>
            Geschlecht:
              <select value={this.state.GeschlechtE1} onChange={this.handleChange("GeschlechtE1")}>
                <option value="männlich">männlich</option>
                <option value="weiblich">weiblich</option>
                <option value="divers">divers</option>
              </select>
            </label>
  
            <label>
            Staatsangehörigkeit:
              <input type="text" value={this.state.StaatsangehörigkeitE1} onChange={this.handleChange("StaatsangehörigkeitE1")} />
            </label>

            <label>
            Straße:
              <input type="text" value={this.state.StraßeE1} onChange={this.handleChange("StraßeE1")} />
            </label>
  
            <label>
            Hausnummer:
              <input type="number" value={this.state.HausnummerE1} onChange={this.handleChange("HausnummerE1")} />
            </label>
    
            <label>
            Adresszusatz:
              <input type="text" value={this.state.AdresszusatzE1} onChange={this.handleChange("AdresszusatzE1")} />
            </label>
    
            <label>
            Ort:
              <input type="Number" value={this.state.OrtE1} onChange={this.handleChange("OrtE1")} />
            </label>
    
            <label>
            Postleitzahl:
              <input type="Number" value={this.state.PlzE1} onChange={this.handleChange("PlzE1")} />
            </label>
    
            <label>
            Land:
              <input type="text" value={this.state.LandE1} onChange={this.handleChange("LandE1")} />
            </label>
  
          </form>
          <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
            Abschicken
          </Button>
        </div>
      )
    }

    AngabenEltern2 = () => { // id: 1107
      return(
        <div id="quiz">
          <h2 id="text">Informationen über dein anderes Elternteil</h2>
          <form onSubmit={this.handleSubmit} >
            <label>
              Name:
              <input type="text" value={this.state.NameE2} onChange={this.handleChange("NameE2")} />
            </label>
  
            <label>
            Vorname:
              <input type="text" value={this.state.VornameE2} onChange={this.handleChange("VornameE2")} />
            </label>
  
            <label>
            Geburtsdatum:
              <input type="text" value={this.state.GeburtsdatumE2} onChange={this.handleChange("GeburtsdatumE2")} />
            </label>
  
            <label>
            Sterbedatum:
              <input type="text" value={this.state.SterbedatumE2} onChange={this.handleChange("SterbedatumE2")} />
            </label>
  
            <label>
            Geschlecht:
              <select value={this.state.GeschlechtE2} onChange={this.handleChange("GeschlechtE2")}>
                <option value="männlich">männlich</option>
                <option value="weiblich">weiblich</option>
                <option value="divers">divers</option>
              </select>
            </label>
  
            <label>
            Staatsangehörigkeit:
              <input type="text" value={this.state.StaatsangehörigkeitE2} onChange={this.handleChange("StaatsangehörigkeitE2")} />
            </label>

            <label>
            Straße:
              <input type="text" value={this.state.StraßeE2} onChange={this.handleChange("StraßeE2")} />
            </label>
  
            <label>
            Hausnummer:
              <input type="number" value={this.state.HausnummerE2} onChange={this.handleChange("HausnummerE2")} />
            </label>
    
            <label>
            Adresszusatz:
              <input type="text" value={this.state.AdresszusatzE2} onChange={this.handleChange("AdresszusatzE2")} />
            </label>
    
            <label>
            Ort:
              <input type="Number" value={this.state.OrtE2} onChange={this.handleChange("OrtE2")} />
            </label>
    
            <label>
            Postleitzahl:
              <input type="Number" value={this.state.PlzE2} onChange={this.handleChange("PlzE2")} />
            </label>
    
            <label>
            Land:
              <input type="text" value={this.state.LandE2} onChange={this.handleChange("LandE2")} />
            </label>
  
          </form>
          <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
            Abschicken
          </Button>
        </div>
      )
    }

    AngabenElternWeitere = () => { // id: 1108
      return(
        <div id="quiz">
          
          <form onSubmit={this.handleSubmit} >
            <label>
            Meine Elternteile leben und sind miteinander
            verheiratet oder in eingetragener Lebenspartnerschaft verbunden:
              <select value={this.state.verheiratet} onChange={this.handleChange("verheiratet")}>
                <option value="ja">Ja</option>
                <option value="nein">nein</option>
                <option value="jagetrennt">Ja, aber dauerhaft getrennt lebend</option>
              </select>
            </label>
  
          </form>
          <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
            Abschicken
          </Button>
        </div>
      )
    }

    AngabenKontaktdaten = () => { // id: 1109
      return(
        <div id="quiz">
          <h2 id="text">Deine Kontaktdaten</h2>
          <form onSubmit={this.handleSubmit} >
          <label>
            Telefon:
            <input type="number" value={this.state.Telefon} onChange={this.handleChange("Telefon")} />
            </label>

            <label>
              Email:
              <input type="text" value={this.state.Email} onChange={this.handleChange("Email")} />
            </label>

            <label>
            Der Bescheid sowie sonstige Schreiben sollen übermittelt werden an:
              <select value={this.state.Übermittlung} onChange={this.handleChange("Übermittlung")}>
                <option value="mich (ständiger Wohnsitz) ">mich (ständiger Wohnsitz) </option>
                <option value="meinen ersten Elternteil">meinen ersten Elternteil</option>
                <option value="meinen zweiten Elternteil">meinen zweiten Elternteil</option>
                <option value="meine/-n Sorgeberechtigte/-n">meine/-n Sorgeberechtigte/-n</option>
                <option value="mich (Wohnsitz am Ausbildungsort)">mich (Wohnsitz am Ausbildungsort)</option>
                <option value="die von mir bevollmächtigte Person">die von mir bevollmächtigte Person</option>
              </select>
            </label>
  
          </form>
          <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
            Abschicken
          </Button>
        </div>
      )
    }

    AngabenLeistungen = () => { // id: 1110
      return(
        <div id="quiz">
          <h2 id="text">Konkurrierende Leistungen</h2>
          <p id="text">Beziehst du in dem Zeitraum, für den du Bafög beantragst, eine der folgenden Leistungen oder hast solche beantragt?</p>
          <form onSubmit={this.handleSubmit} >
              
            <label>
            Anwärterbezüge oder ähnliche Leistungen aus öffentlichen Mitteln 
              <select value={this.state.anwärterbezüge} onChange={this.handleChange("anwärterbezüge")}>
                <option value="nein">Nein</option>
                <option value="ja">Ja</option>
              </select>
            </label>

            <label>
            Leistungen für die berufliche Aus- oder Weiterbildung nach dem
            SGB II oder SGB III 
              <select value={this.state.leistungen_weiterbildung} onChange={this.handleChange("leistungen_weiterbildung")}>
                <option value="nein">Nein</option>
                <option value="ja">Ja</option>
              </select>
            </label>

            <label>
            Leistungen von einem Begabtenförderungswerk
              <select value={this.state.Begabtenförderungswerk} onChange={this.handleChange("Begabtenförderungswerk")}>
                <option value="nein">Nein</option>
                <option value="ja">Ja</option>
              </select>
            </label>
  
          </form>
          <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
            Abschicken
          </Button>
        </div>
      )
    }

    AngabenEinkommen = () => { // id: 1111
      return(
        <div id="quiz">
          <h2 id="text">Angaben zu deinem Einkommen</h2>
          <form onSubmit={this.handleSubmit} >
              
            <label>
            Startdatum für den Zeitraum, für den die Förderung zu bewilligen ist:
              <input type="text" value={this.state.Bewilligungszeitraum_Start} onChange={this.handleChange("Bewilligungszeitraum_Start")} />
            </label>

            <label>
            Enddatum für den Zeitraum, für den die Förderung zu bewilligen ist:
              <input type="text" value={this.state.Bewilligungszeitraum_Ende} onChange={this.handleChange("Bewilligungszeitraum_Ende")} />
            </label>

            <label>
            Ich habe folgende noch nicht bewilligte
            Sozialleistungen beantragt (z. B. Waisenrente,
            Leistungen nach dem Aufstiegsfortbildungsförderungsgesetz [AFBG] oder dem Unterhaltsvorschussgesetz [UhVorschG]):
              <input type="text" value={this.state.beantragte_Sozialleistungen} onChange={this.handleChange("beantragte_Sozialleistungen")} />
            </label>

            <label>
            Falls du Riester-Rente bezahlst, gib bitte hier den Jahresbetrag an:
              <input type="number" value={this.state.Riester_Rente} onChange={this.handleChange("Bewilligungszeitraum_Ende")} />
            </label>

            <label>
            Wirst du im oben genannten Zeitraum voraussichtlich Einnahmen erzielen?
              <select value={this.state.Einnamen} onChange={this.handleChange("Einnamen")}>
                <option value="nein">Nein</option>
                <option value="ja">Ja</option>
              </select>
            </label>

            {this.state.Einnahmen === "ja" &&
            <div>
              <p id="text">Bitte gib die folgenden Angaben als Gesamtbetrag für den oben genannten Zeitraum an.</p>
              <label>
                Bruttoeinnahmen aus bestehenden oder
                ruhenden Arbeitsverhältnissen, Gelegenheitsarbeiten, Ferien-, Minijobs:
                <input type="number" value={this.state.Arbeitseinnahmen} onChange={this.handleChange("Arbeitseinnahmen")} />
              </label>
  
              <label>
              Darin ist ein Arbeitgeberanteil zu vermögenswirksamen Leistungen enthalten: 
                <select value={this.state.vl} onChange={this.handleChange("vl")}>
                  <option value="nein">Nein</option>
                  <option value="ja">Ja</option>
                </select>
              </label>
  
              <label>
              Ausbildungs- und Praktikumsvergütung brutto – auch Sachbezüge:
                <input type="number" value={this.state.Einkommen_Gewerbe} onChange={this.handleChange("Einkommen_Gewerbe")} />
              </label>
  
              <label>
              Einkünfte aus selbstständiger Arbeit, Gewerbebetrieb, Vermietung und Verpachtung, Landund Forstwirtschaft:
                <input type="number" value={this.state.Bewilligungszeitraum_Ende} onChange={this.handleChange("Bewilligungszeitraum_Ende")} />
              </label>
  
              <label>
              Bruttoeinnahmen aus Kapitalvermögen (z. B.Sparzinsen):
                <input type="number" value={this.state.Einkommen_Kapital} onChange={this.handleChange("Einkommen_Kapital")} />
              </label>
  
              <label>
              Waisenrente und/oder Waisengeld (einschl. Weihnachtszuwendung), sonstige Renten (z. B. Unfallrenten):
                <input type="number" value={this.state.Waisengeld} onChange={this.handleChange("Waisengeld")} />
              </label>
  
              <label>
              Ausbildungsbeihilfen und gleichartige Leistungen sowie Leistungen nach dem AFBG:
                <input type="number" value={this.state.Ausbildungsbeihilfen} onChange={this.handleChange("Ausbildungsbeihilfen")} />
              </label>
  
              <label>
              Unterhaltsleistungen (nicht der Eltern), die für mich bestimmt sind:
                <input type="number" value={this.state.Unterhaltsleistungen} onChange={this.handleChange("Unterhaltsleistungen")} />
              </label>
  
              <label>
              Unterhaltsvorschussleistungen nach dem Unterhaltsvorschussgesetz (UhVorschG):
                <input type="number" value={this.state.Unterhaltsvorschussleistungen} onChange={this.handleChange("Unterhaltsvorschussleistungen")} />
              </label>
  
              <label>
              Weitere Einnahmen (nicht: laufende BAföGZahlungen):
                <input type="number" value={this.state.Weitere_Einnahmen} onChange={this.handleChange("Weitere_Einnahmen")} />
              </label>
            </div>

          }
  
          </form>
          <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
            Abschicken
          </Button>
        </div>
      )
    }

    AngabenVermögen = () => { // id: 1112
      return(
        <div id="quiz">
          <h2 id="text">Angaben zu deinen Vermögenswerten (in Euro)</h2>
          <form onSubmit={this.handleSubmit} >
            <label>
              Höhe des Barvermögens (Bargeld):
              <input type="number" value={this.state.Barvermögen} onChange={this.handleChange("Barvermögen")} />
            </label>

            <label>
            Höhe der Bank- und Sparguthaben, einschließlich der Guthaben auf Girokonten und OnlineKonten:
              <input type="number" value={this.state.Bankvermögen} onChange={this.handleChange("Bankvermögen")} />
            </label>

            <label>
            Höhe der Bauspar- und Prämiensparguthaben:
              <input type="number" value={this.state.Bauspar} onChange={this.handleChange("Bauspar")} />
            </label>

            <label>
            Wertpapiere (z. B. Aktien, Pfandbriefe, Schatzanweisungen, Wechsel, Schecks):
              <input type="number" value={this.state.Wertpapiere} onChange={this.handleChange("Wertpapiere")} />
            </label>

            <label>
            Kraftfahrzeuge (Netto-Händlereinkaufspreis):
              <input type="text" value={this.state.Kraftfahrzeuge} onChange={this.handleChange("Kraftfahrzeuge")} />
            </label>

            <label>
            Lebensversicherungen (aktueller Rückkaufswert):
              <input type="number" value={this.state.Lebensversicherung} onChange={this.handleChange("Lebensversicherung")} />
            </label>

            <label>
            Höhe von steuerlich gefördertem Altersvorsorgevermögen („Riester-Rente“) :
              <input type="number" value={this.state.Höhe_Riester_Rente} onChange={this.handleChange("Höhe_Riester_Rente")} />
            </label>

            <label>
            Grundstücke, Häuser, Eigentumswohnungen (auch Miteigentumsanteile):
              <input type="number" value={this.state.Immobilien} onChange={this.handleChange("Immobilien")} />
            </label>

            <label>
            Betriebsvermögen (auch Miteigentumsanteile) :
              <input type="number" value={this.state.Betriebsvermögen} onChange={this.handleChange("Betriebsvermögen")} />
            </label>

            <label>
            Geldforderungen, digitales Vermögen (z. B. Kryptowährungen) und sonstige Rechte:
              <input type="number" value={this.state.Geldforderungen} onChange={this.handleChange("Geldforderungen")} />
            </label>

            <label>
            Sonstige Vermögensgegenstände (hierzu zählen keine Haushaltsgegenstände wie Möbel, Laptop etc.):
              <input type="number" value={this.state.sonstiges_Vermögen} onChange={this.handleChange("sonstiges_Vermögen")} />
            </label>
            
            <p id="text">Von den oben genannten Werten sollen folgende anrechnungsfrei bleiben: (alle Angaben in Euro)</p>

            <label>
            Vermögenswerte, deren Verwertung aus rechtlichen Gründen ausgeschlossen ist:
              <input type="number" value={this.state.anrechnungsfreie_Vermögenswerte} onChange={this.handleChange("anrechnungsfreie_Vermögenswerte")} />
            </label>

            <label>
            Übergangsbeihilfen nach den §§ 12 und 13 Soldatenversorgungsgesetz (SVG) :
              <input type="number" value={this.state.Übergangsbeihilfen} onChange={this.handleChange("Übergangsbeihilfen")} />
            </label>

            <p id="text">Ich habe folgende Schulden und Lasten:</p>

            <label>
            Hypotheken, Grundschulden:
              <input type="number" value={this.state.Hypotheken} onChange={this.handleChange("Hypotheken")} />
            </label>

            <label>
            Lasten:
              <input type="number" value={this.state.Lasten} onChange={this.handleChange("Lasten")} />
            </label>

            <label>
            Sonstige Schulden:
              <input type="number" value={this.state.sonstige_Schulden} onChange={this.handleChange("sonstige_Schulden")} />
            </label>
          </form>
          <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
            Abschicken
          </Button>
        </div>
      )
    }

    AngabenSchüler = () => { // id: 1113
      return(
        <div id="quiz">
          <h2 id="text">Angaben zu deinem Einkommen</h2>
          <form onSubmit={this.handleSubmit} >
          <label>
            Bist du in dem Zeitraum, für den du Bafög beantragst Schüler?
              <select value={this.state.Schüler} onChange={this.handleChange("Schüler")}>
                <option value="nein">Nein</option>
                <option value="ja">Ja</option>
              </select>
            </label>
            
            {this.state.Schüler === "ja" &&
            <div>
              <label>
              Die elterliche Sorge / das Aufenthaltsbestimmungsrecht ist/war zuerkannt worden durch ein Vormundschafts- oder Familiengericht:
                <select value={this.state.Sorge} onChange={this.handleChange("Sorge")}>
                  <option value="nein">Nein</option>
                  <option value="ja">Ja</option>
                </select>
              </label>

              {this.state.Sorge === "ja" &&
              <div>
                <p id="text">Bitte gib hier die Daten deines Sorgeberechtigten an.</p>
                <label>
                Nachname:
                  <input type="text" value={this.state.Name_Sorge} onChange={this.handleChange("Name_Sorge")} />
                </label>
    
                <label>
                Vorname:
                  <input type="text" value={this.state.Vorname_Sorge} onChange={this.handleChange("Vorname_Sorge")} />
                </label>
    
                <label>
                Straße:
                  <input type="text" value={this.state.Straße_Sorge} onChange={this.handleChange("Straße_Sorge")} />
                </label>
        
                <label>
                Hausnummer:
                  <input type="number" value={this.state.Hausnummer_Sorge} onChange={this.handleChange("Hausnummer_Sorge")} />
                </label>
        
                <label>
                Adresszusatz:
                  <input type="text" value={this.state.Adresszusatz_Sorge} onChange={this.handleChange("Adresszusatz_Sorge")} />
                </label>
        
                <label>
                Ort:
                  <input type="Number" value={this.state.Ort_Sorge} onChange={this.handleChange("Ort_Sorge ")} />
                </label>
        
                <label>
                Postleitzahl:
                  <input type="Number" value={this.state.Plz_Sorge} onChange={this.handleChange("Plz_Sorge")} />
                </label>
        
                <label>
                Land:
                  <input type="text" value={this.state.Land_Sorge} onChange={this.handleChange("Land_Sorge")} />
                </label>
              </div>
              }
              <p id="text">Bitte füll diesen Bereich nur aus, wenn du nicht bei deinen Eltern / einem Elternteil wohnst und du eine der folgenden Schulen besuchst:
              weiterführende allgemeinbildende Schule (auch Studienkolleg), Fachoberschule, deren Besuch eine abgeschlossene Berufsausbildung nicht
              voraussetzt, Berufsfachschule oder Fachschule, deren Besuch eine abgeschlossene Berufsausbildung nicht voraussetzt, sofern deren Bildungsgang weniger als zwei Jahre dauert oder nicht zu einem berufsqualifizierenden Abschluss führt.
              </p>

              <label>
              Von der Wohnung meiner Eltern / meines Elternteils aus ist eine entsprechende zumutbare Ausbildungsstätte nicht erreichbar                
                <select value={this.state.Ausbildungsstätte_nicht_erreichbar} onChange={this.handleChange("Ausbildungsstätte_nicht_erreichbar")}>
                  <option value="-">-</option>
                  <option value="nein">Nein</option>
                  <option value="ja">Ja</option>
                </select>
              </label>

              <label>
              Ich führe einen eigenen Haushalt und bin oder war verheiratet oder in einer eingetragenen Lebenspartnerschaft verbunden                
                <select value={this.state.eigener_Haushalt} onChange={this.handleChange("eigener_Haushalt")}>
                  <option value="-">-</option>
                  <option value="nein">Nein</option>
                  <option value="ja">Ja</option>
                </select>
              </label>

              <label>
              Ich führe einen eigenen Haushalt und lebe mit mindestens einem Kind zusammen.                 
                <select value={this.state.eigener_Haushalt_Kind} onChange={this.handleChange("eigener_Haushalt_Kind")}>
                  <option value="-">-</option>
                  <option value="nein">Nein</option>
                  <option value="ja">Ja</option>
                </select>
              </label>

              <label>
                Sonstiger Grund:
                  <input type="text" value={this.state.sonstiger_Grund_alleine_wohnen} onChange={this.handleChange("sonstiger_Grund_alleine_wohnen")} />
                </label>
            </div>
          }
          </form>
          <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
            Abschicken
          </Button>
        </div>
      )
    }

    Ende = () => { // id: 1114
      const d2 = {
        Ausbildungsstätte: this.state.Ausbildungsstätte, 
        Ausbildungsort: this.state.Ausbildungsort,
        Klasse: this.state.Klasse,
        angestrebter_Abschluss: this.state.angestrebter_Abschluss,
        Vollzeit: this.state.Vollzeit,
        vorherige_Anträge: this.state.vorherige_Anträge,

        Name: this.state.Name,
        Vorname: this.state.Vorname,
        Geburtsname: this.state.Geburtsname,
        Geburtsort: this.state.Geburtsort,
        Geschlecht: this.state.Geschlecht,
        Geburtsdatum: this.state.Geburtsdatum,
        Familienstand: this.state.Familienstand,
        Staatsangehörigkeit: this.state.Staatsangehörigkeit,
        Familienstand_letzter_Eintrag: this.state.Familienstand_letzter_Eintrag,
        Staatsangehörigkeit_Partner: this.state.Staatsangehörigkeit_Partner,
        Kinder: this.state.Kinder,

        Straße: this.state.Straße,
        Hausnummer: this.state.Hausnummer,
        Adresszusatz: this.state.Adresszusatz,
        Land: this.state.Land,
        Plz: this.state.Plz,
        Ort: this.state.Ort,
                
        Wohne_bei_Eltern: this.state.Wohne_bei_Eltern,
        Wohnung_von_Eltern: this.state.Wohnung_von_Eltern,
        StraßeA: this.state.StraßeA,
        HausnummerA:  this.state.Hausnumme,
        AdresszusatzA: this.state.AdresszusatzA,
        LandA: this.state.LandA,
        PlzA: this.state.PlzA,
        OrtA: this.state.OrtA,

        Iban: this.state.Iban,
        Name_Bank: this.state.Name_Bank,
        Name_Kontoinhaber: this.state.Name_Kontoinhaber,

        Krankenversicherung: this.state.Krankenversicherung,
        Pflegeversicherung: this.state.Pflegeversicherung,
        Steueridentnummer: this.state.Steueridentnummer,

        NameE1: this.state.NameE1,
        VornameE1: this.state.VornameE1,
        GeschlechtE1:  this.state.GeschlechtE1,
        GeburtsdatumE1: this.state.GeburtsdatumE1,
        SterbedatumE1: this.state.SterbedatumE1,
        StaatsangehörigkeitE1: this.state.StaatsangehörigkeitE1,
        StraßeE1: this.state.StraßeE1,
        HausnummerE1: this.state.HausnummerE1,
        AdresszusatzE1: this.state.AdresszusatzE1,
        LandE1: this.state.LandE1,
        PlzE1: this.state.PlzE1,
        OrtE:  this.state.OrtE,

        NameE2: this.state.NameE2,
        VornameE2: this.state.VornameE2,
        GeschlechtE2: this.state.GeschlechtE2,
        GeburtsdatumE2: this.state.GeburtsdatumE2,
        SterbedatumE2: this.state.SterbedatumE2,
        StaatsangehörigkeitE2: this.state.StaatsangehörigkeitE2,
        StraßeE2: this.state.StraßeE2,
        HausnummerE2: this.state.HausnummerE2,
        AdresszusatzE2: this.state.AdresszusatzE2,
        LandE2: this.state.LandE2,
        PlzE2: this.state.PlzE2,
        OrtE2: this.state.OrtE2,

        verheiratet: this.state.verheiratet,

        Telefon: this.state.Telefon,
        Email: this.state.Email,
        Übermittlung: this.state.Übermittlung,

        anwärterbezüge: this.state.anwärterbezüge,
        leistungen_weiterbildung: this.state.leistungen_weiterbildung,
        Begabtenförderungswerk: this.state.Begabtenförderungswerk,
                
        Bewilligungszeitraum_Start: this.state.Bewilligungszeitraum_Start,
        Bewilligungszeitraum_Ende: this.state.Bewilligungszeitraum_Ende,
        beantragte_Sozialleistungen: this.state.beantragte_Sozialleistungen,
        Riester_Rente: this.state.Riester_Rente,
        Einnahmen: this.state.Einnahmen,
        Arbeitseinnahmen: this.state.Arbeitseinnahmen,
        vl: this.state.vl,
        Ausbildungsvergütung: this.state.Ausbildungsvergütung,
        Einkommen_Gewerbe: this.state.Einkommen_Gewerbe,
        Einkommen_Kapital: this.state.Einkommen_Kapital,
        Waisengeld: this.state.Waisengeld,
        Ausbildungsbeihilfen: this.state.Ausbildungsbeihilfen,
        Unterhaltsleistungen: this.state.Unterhaltsleistungen,
        Unterhaltsvorschussleistungen: this.state.Unterhaltsvorschussleistungen,
        Weitere_Einnahmen: this.state.Weitere_Einnahmen,

        Barvermögen: this.state.Barvermögen,
        Bankvermögen: this.state.Bankvermögen,
        Bauspar: this.state.Bauspar,
        Wertpapiere: this.state.Wertpapiere,
        Kraftfahrzeuge: this.state.Kraftfahrzeuge,
        Lebensversicherung: this.state.Lebensversicherung,
        Höhe_Riester_Rente: this.state.Höhe_Riester_Rente,
        Immobilien: this.state.Immobilien,
        Betriebsvermögen: this.state.Betriebsvermögen,
        Geldforderungen: this.state.Geldforderungen,
        sonstiges_Vermögen: this.state.sonstiges_Vermögen,

        anrechnungsfreie_Vermögenswerte: this.state.anrechnungsfreie_Vermögenswerte,
        Übergangsbeihilfen: this.state.Übergangsbeihilfen,

        Hypotheken: this.state.Hypotheken,
        Lasten: this.state.Lasten,
        sonstige_Schulden: this.state.sonstige_Schulden,

        Schüler: this.state.Schüler,
        Sorge: this.state.Sorge,
        Name_Sorge: this.state.Name_Sorge,
        Vorname_Sorge: this.state.Vorname_Sorge,
        Straße_Sorge: this.state.Straße_Sorge,
        Hausnummer_Sorge: this.state.Hausnummer_Sorge,
        Adresszusatz_Sorge: this.state.Adresszusatz_Sorge,
        Land_Sorge: this.state.Land_Sorge,
        Plz_Sorge: this.state.Plz_Sorge,
        Ort_Sorge: this.state.Ort_Sorge,
        Ausbildungsstätte_nicht_erreichbar: this.state.Ausbildungsstätte_nicht_erreichbar,
        eigener_Haushalt: this.state.eigener_Haushalt,
        eigener_Haushalt_Kind: this.state.eigener_Haushalt_Kind,
        sonstiger_Grund_alleine_wohnen: this.state.sonstiger_Grund_alleine_wohnen  
      }

      const data = {d2}
      
      axios.post("http://localhost:5000/api", data)
      return(
        <div id="quiz">
          <h2 id="text">Fertig, dein Antrag wird bearbeitet!</h2>
        </div>
      )
    }




  
    render() {
  
      if (this.state.count === 1) {
        return(
          <div>
            <this.Startseite/>
            
          </div>
        )
      } 
      else if (this.state.count === 2) {
        return(
          <div>
            <this.Frage1/>
            
          </div>
        )
      } 
      else if (this.state.count === 5) {
        return(
          <div>
            <this.Studentenrichtung />
          </div>
        )
      }
      else if (this.state.count === 6 || this.state.count === 11 || this.state.count === 22) {
          return(
            <div>
              <this.FrageFortbildung />
            </div>
          )
      }
      else if (this.state.count === 100 || this.state.count === 105 || this.state.count === 116) {
          return(
            <div>
              <this.FormularNichtMöglich />
            </div>
          )
      }
      else if (this.state.count === 7) {
          return(
            <div>
              <this.FrageArtHochschule />
            </div>
          )
      }
      else if (this.state.count === 8) {
          return(
            <div>
              <this.VollzeitTeilzeit />
            </div>
          )
      }
      else if (this.state.count === 101) {
          return(
            <div>
              <this.KeinAnspruch />
            </div>
          )
      }
      else if (this.state.count === 102) {
          return(
            <div>
              <this.Anspruch />
            </div>
          )
      }
      else if (this.state.count === 12) {
          return(
            <div>
              <this.FrageArtSchule />
            </div>
          )
      }
      else if (this.state.count === 23) {
          return(
            <div>
              <this.FrageArtSchulischeAusbildung />
            </div>
          )
      }
      // Höhe Bafög
      /*
      1004: 0 -> bei Eltern wohnend
      1013: 694 -> alleine wohnend
      1005: 356
      1014: 694
      1006: 557
      1015: 790
      1007:563
      1016: 832
      1008: 592
      1017: 861
      */
      else if (this.state.count === 1000) {
          return(
            <div>
              <this.StartseiteHöheBafög />
            </div>
          )
      }
      else if (this.state.count === 1001) {
          return(
            <div>
              <this.FrageWohnenBeiEltern />
            </div>
          )
      }
      else if (this.state.count === 1002 || this.state.count === 1011) {
          return(
            <div>
              <this.FrageAusbildung />
            </div>
          )
      }
      else if (this.state.count >= 1004 && this.state.count <= 1017) {
          return(
            <div>
              <this.StartEltern />
            </div>
          )
      }
      else if (this.state.count === 1018) {
        return(
          <div>
            <this.Eltern1 />
          </div>
        )
      }
      else if (this.state.count === 1019) {
        return(
          <div>
            <this.ElternGeschieden />
          </div>
        )
      }
      else if (this.state.count === 1020) {
        return(
          <div>
            <this.VerdienstElternZusammen />
          </div>
        )
      }
      else if (this.state.count === 1021) {
        return(
          <div>
            <this.ElternFertig />
          </div>
        )
      }
      else if (this.state.count === 1022) {
        return(
          <div>
            <this.VerdienstElternGesch />
          </div>
        )
      }
      else if (this.state.count === 1023) {
        return(
          <div>
            <this.VerdienstStiefEltern />
          </div>
        )
      }

      
      
      else if (this.state.count === 1030) {
        return(
          <div>
            <this.Vermögenstart />
          </div>
        )
      }

      else if (this.state.count === 1031) {
        return(
          <div>
            <this.Bafögzeitraum />
          </div>
        )
      }

      else if (this.state.count === 1032) {
        return(
          <div>
            <this.Einkommen />
          </div>
        )
      }

      else if (this.state.count === 1033) {
        return(
          <div>
            <this.EinkommenAusbildung />
          </div>
        )
      }

      else if (this.state.count === 1034) {
        return(
          <div>
            <this.BafögEnde />
          </div>
        )
      }
      
      
      else if (this.state.count === 1999) {
        return(
          <div>
            <this.BetragBafog0 />
          </div>
        )
      }

      else if (this.state.count === 1999) {
        return(
          <div>
            <this.BetragBafog0 />
          </div>
        )
      }
    
      // Daten
      else if (this.state.count === 1100) {
        return(
          <div>
            <this.AngabenAusbildung />
          </div>
        )
      }

      else if (this.state.count === 1101) {
        return(
          <div>
            <this.AngabenPerson />
          </div>
        )
      }

      else if (this.state.count === 1102) {
        return(
          <div>
            <this.AngabenAnschrift />
          </div>
        )
      }

      else if (this.state.count === 1103) {
        return(
          <div>
            <this.AngabenAnschrift2 />
          </div>
        )
      }

      else if (this.state.count === 1104) {
        return(
          <div>
            <this.AngabenBank />
          </div>
        )
      }

      else if (this.state.count === 1105) {
        return(
          <div>
            <this.AngabenAnschrift2 />
          </div>
        )
      }

      else if (this.state.count === 1106) {
        return(
          <div>
            <this.AngabenEltern1 />
          </div>
        )
      }

      else if (this.state.count === 1107) {
        return(
          <div>
            <this.AngabenEltern2 />
          </div>
        )
      }

      else if (this.state.count === 1108) {
        return(
          <div>
            <this.AngabenElternWeitere />
          </div>
        )
      }

      else if (this.state.count === 1109) {
        return(
          <div>
            <this.AngabenKontaktdaten />
          </div>
        )
      }

      else if (this.state.count === 1110) {
        return(
          <div>
            <this.AngabenLeistungen />
          </div>
        )
      }

      else if (this.state.count === 1111) {
        return(
          <div>
            <this.AngabenEinkommen />
          </div>
        )
      }

      else if (this.state.count === 1112) {
        return(
          <div>
            <this.AngabenVermögen />
          </div>
        )
      }

      else if (this.state.count === 1113) {
        return(
          <div>
            <this.AngabenVermögen />
          </div>
        )
      }
        
    }
}
  

  export default Testbody;