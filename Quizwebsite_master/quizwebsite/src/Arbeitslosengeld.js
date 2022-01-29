import React from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';


class Arbeitslosengeld extends React.Component {
    constructor(probs) {
        super(probs);
        this.state = {
            count: 1,
            ArbeitslosengeldB: 0,
            Bruttogehalt: 0,
            Steuerklasse: "",
            Faktor: 0,
            Kind: "",
            Lohnsteuer: 0,


            // Daten: 
            Anrede: "",
            Vorname: "",
            Familienname: "",
            Geburtsname: "", // sofern abweichend
            Geburtsort: "", 
            Geburtsdatum: "",
            Geburtsland: "",
            Staatsangehörigkeit: "",
            Rentenversicherungsnummer: "",
            Adresse: "",
            Telefon: 0,
            email: "",
            Familienstand: "",
            Familienstand_seit: "",

            Wohnsituation: "",
            Anzahl_Personen_Wohnung: 0,
            Wohnart: "Miete",
            Miete_seit: "",
            Grundmiete: 0,
            Nebenkosten: 0,
            Heizkosten: 0,
            sonstige_Wohnkosten_Miete: 0,
            Schuldzinsen: 0,
            Nebenkosten_Eigenheim: 0,
            Heizkosten_Eigenheim: 0,
            Heizart: "",
            sonstige_Wohnkosten_Eigentum: 0,

            sonstige_Leistungen: "", // Ja oder Nein
            arbeitsfähig: "", // Ja oder Nein
            Berechtigter: "", // Ja oder Nein
            Schüler: "", // Ja oder Nein
            Wohnheim: "", // Ja oder Nein
            stationäre_Einrichtung: "", // Ja oder Nein
            dauer_Unterbringung: "", // von - bis
            Art_stationäre_Einrichtung: "",

            alleinerziehend: "", // Ja oder Nein
            schwanger: "", // Ja oder Nein
            Warmwasser_dezentral: "", // Ja oder Nein
            teure_Ernährung: "", // Ja oder Nein
            Behinderung: "", // Ja oder Nein
            nicht_erwerbsfähig: "", // Ja oder Nein

            Einkommen: "", // Ja oder Nein
            Vermögen: "", // Ja oder Nein

            selbstständige_Tätigkeit_Jahre: 0,
            andere_Anträge: "",
            Erläuterung_andere_Anträge: "",
            Ansprüche_Dritte: "",
            Verpflichtungserklärung: "", // Ja oder Nein

            Versicherung: "", // gesetzlich, privat, nicht verischert
            Krankenkasse_ändern: "", // Ja oder Nein, nur falls gesetzliche
            Krankenkasse: "", // entweder bestehende oder neue

            Kontoinhaber: "",
            Iban: "",

            Betreuer: "" // Ja oder Nein

        }
    }

    increment = (val) => {
        this.setState({
          count: this.state.count + val,
          lastCount: this.state.count
        })
      }
  
    decrement = (val) => {
        this.setState({
          count: this.state.count - val,
          lastCount: this.state.count
        })
      }

    


    // Change-Functions

    handleChangeArbeitslosengeld1 = (event) => {
        this.setState({
            Bruttogehalt: event.target.value
        })
    }

    handleChangeArbeitslosengeld2 = (event) => {
        this.setState({
            Lohnsteuer: event.target.value
        })
    }

    handleChangeArbeitslosengeld3 = (event) => {
        this.setState({
            Kind: event.target.value
        })
    }

    handleChange = (Name) => (event) => {
        var key = Name
          this.setState({
              [key]: event.target.value
          });
          
    }

    //Submit-Functions

    handleSubmitArbeitslosengeld = (event) => {
        console.log(this.state.Bruttogehalt)
        console.log(this.state.Kind)
        

        var Leistungsentgelt = ((this.state.Bruttogehalt - (this.state.Bruttogehalt * 0.2)) - this.state.Lohnsteuer) / 30
        console.log(Leistungsentgelt)
        if (this.state.Kind === "Ja") {
            var AblgTag = Leistungsentgelt * 0.67 
        } else {
            var AblgTag = Leistungsentgelt * 0.6
        }
        
        var Arbeitslosengeld = AblgTag * 30

        this.setState({
            count: 201,
            ArbeitslosengeldB: Arbeitslosengeld
        })
    }
    
    // Start Quiz
    Startseite = () => { // id: 1
        return(
            <div id="quiz">
                <h2 id="text">Arbeitslosengeld</h2>
                <Button id="button" onClick={() => this.increment(1)} variant="contained" color="secondary">
                Start
                </Button>
                <br/>
                <Button id="button" onClick={() => this.increment(5)} variant="contained" color="secondary">
                Ich weiß dass ich Anspruch auf Arbeitslosengeld habe
                </Button>
            </div>
        )
    }

    AnspruchB1 = () => { // id: 2
        return(
            <div id="quiz">
                <h2 id="text">Hast du in den letzten 30 Monaten vor der Arbeitslosmeldung mindestens 12 Monate versicherungspflichtig gearbeitet?</h2>
                <p>Hierzu zählt auch wenn du selbstständig warst und freiwillig in die Arbeitslosenversicherung eingezahlt hast.</p>
                <Button id="button" onClick={() => this.increment(1)} variant="contained" color="secondary">
                Ja
                </Button>
                <Button id="button" onClick={() => this.increment(8)} variant="contained" color="secondary">
                Nein
                </Button>
            </div>
        )
    }

    AnspruchB2 = () => { // id: 3
        return(
            <div id="quiz">
                <h2 id="text">Hast du dich bei deiner Agentur für Arbeit als arbeitslos gemeldet?</h2>
                <Button id="button" onClick={() => this.increment(1)} variant="contained" color="secondary">
                Ja
                </Button>
                <Button id="button" onClick={() => this.increment(97)} variant="contained" color="secondary">
                Nein
                </Button>
            </div>
        )
    }

    AnspruchB3 = () => { // id: 4
        return(
            <div id="quiz">
                <h2 id="text">Du hast momentan keine Beschäftigung, kannst aber mindestens 15 Stunden/ Woche einer versicherungspflichtigen Arbeit nachgehen</h2>
                <Button id="button" onClick={() => this.increment(1)} variant="contained" color="secondary">
                Ja
                </Button>
                <Button id="button" onClick={() => this.increment(96)} variant="contained" color="secondary">
                Nein
                </Button>
            </div>
        )
    }

    AnspruchB4 = () => { // id: 5
        return(
            <div id="quiz">
                <h2 id="text">Du suchst eine versicherungspflichtige Beschäftigung und arbeitest dabei mit der Agentur für Arbeit zusammen.</h2>
                <Button id="button" onClick={() => this.increment(1)} variant="contained" color="secondary">
                Ja
                </Button>
                <Button id="button" onClick={() => this.increment(95)} variant="contained" color="secondary">
                Nein
                </Button>
            </div>
        )
    }

    Anspruch = () => { // id: 6
        return(
            <div id="quiz">
                <h2 id="text">Glückwunsch, dir steht Arbeitslosengeld zu!</h2>
                <p>Unter 'Weiter' kannst du ausrechnen wie viel Arbeitslosengeld dir zusteht.</p>
                <Button id="button" onClick={() => this.increment(194)} variant="contained" color="secondary">
                Weiter
                </Button>
            </div>
        )
    }

    KeinAnspruch = () => { // id: 100
        return(
            <div id="quiz">
                <h2 id="text">Leider hast du keinen Anspruch :(</h2>
                <a id="text" href="https://www.arbeitsagentur.de/finanzielle-hilfen/arbeitslosengeld-anspruch-hoehe-dauer">Bitte erfülle erst alle hier aufgelisteten Kriterien, damit du Anspruch auf Arbeitslosengeld erhälst.</a>
            </div>
        )
    }

    SonderB1 = () => { // id: 10
        return(
            <div id="quiz">
                <h2 id="text">Trifft eine oder mehrere der folgenden Aussagen auf dich zu?</h2>
                <p>Um Anspruch auf Arbeitslosengeld zu bekommen musst du 12 Monate entweder gearbeitet oder einer (oder mehrerer) der folgenden Aktivitäten nachgegangen sein.</p>
                <p>Ich habe ein Kind erzogen (bis zum 3. Lebensjahr)</p>
                <p>Ich habe Krankengeld erhalten</p>
                <p>Ich habe freiwilligen Wehrdienst, Bundesfreiwilligendienst oder Jugendfreiwilligendienst geleistet.</p>
                <Button id="button" onClick={() => this.decrement(7)} variant="contained" color="secondary">
                Ich habe 12 Monate mit eine oder mehrern der aufgelisteten Aktivitäten verbracht
                </Button>
                <Button id="button" onClick={() => this.increment(90)} variant="contained" color="secondary">
                Ich habe KEINE 12 Monate mit eine oder mehrern der aufgelisteten Aktivitäten verbracht
                </Button>
            </div>
        )
    }

    //Höhe Arbeitslosengeld
    HöheArbeitslosengeld = () => { // id: 200
        return(
            <div id="quiz">
                <h2 id="text">Bitte füll das Formular aus, um dein Arbeitslosengeld auszurechnen</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        monatliches durchschnittliches Brottogehalt
                        <input type="number" value={this.state.Bruttogehalt} onChange={this.handleChangeArbeitslosengeld1} />
                    </label>
                    <label>
                        Lohnsteuer (monatlich):
                        <input type="number" value={this.state.Lohnsteuer} onChange={this.handleChangeArbeitslosengeld2} />
                    </label>
                    <label>
                        Hast du oder dein Ehegatte/ Lebenspartner ein Kind, für dass du Kindergeld bekommst?
                        <select value={this.state.Kind} onChange={this.handleChangeArbeitslosengeld3}>
                            <option value="true">
                                Ja
                            </option>
                            <option option="false">
                                Nein
                            </option>
                        </select>
                    </label>
                </form>
                <Button id="button" variant="contained" color="secondary" onClick = {() => this.handleSubmitArbeitslosengeld()}>
                Submit
                </Button>
            </div>
        )
    }

    ErgebnisArbeitslosengeld = () => { // id: 201 
        return(
            <div id="quiz">
                <h2 id="text">Dir steht {Math.round(this.state.ArbeitslosengeldB)}€ Arbeitslosengeld zu!</h2>
                <Button id="button" onClick={() => this.increment(1)} variant="contained" color="secondary">
                Jetzt Antrag stellen
                </Button>
            </div>
        )
    }

    // Antrag ausfüllen

  AngabenPerson = () => { // id: 202
        return(
          <div id="quiz">
            <h2 id="text">Angaben zu deiner Person</h2>
            <form onSubmit={this.handleSubmit} >
              <label>
                Anrede:
                <input type="text" value={this.state.Anrede} onChange={this.handleChange("Anrede")} />
              </label>

              <label>
                Vorname:
                <input type="text" value={this.state.Vorname} onChange={this.handleChange("Vorname")} />
              </label>

              <label>
              Familienname:
                <input type="text" value={this.state.Familienname} onChange={this.handleChange("Familienname")} />
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
              Geburtsdatum:
                <input type="text" value={this.state.Geburtsdatum} onChange={this.handleChange("Geburtsdatum")} />
              </label>

              <label>
              Geburtsland:
                <input type="text" value={this.state.Geburtsland} onChange={this.handleChange("Geburtsland")} />
              </label>

              <label>
              Staatsangehörigkeit:
                <input type="text" value={this.state.Staatsangehörigkeit} onChange={this.handleChange("Staatsangehörigkeit")} />
              </label>

              <label>
              Rentenversicherungsnummer:
                <input type="text" value={this.state.Rentenversicherungsnummer} onChange={this.handleChange("Rentenversicherungsnummer")} />
              </label>

              <label>
              Adresse:
                <input type="text" value={this.state.Adresse} onChange={this.handleChange("Adresse")} />
              </label>

              <label>
              Telefon:
                <input type="number" value={this.state.Telefon} onChange={this.handleChange("Telefon")} />
              </label>

              <label>
              E-mail:
                <input type="text" value={this.state.email} onChange={this.handleChange("email")} />
              </label>

              <label>
                Familienstand:
                <select value={this.state.Familienstand} onChange={this.handleChange("Familienstand")}>
                  <option value="ledig">ledig</option>
                  <option value="verheiratet">verheiratet</option>
                </select>              
              </label>

              <label>
              Heiratsdatum (falls vorhanden):
                <input type="text" value={this.state.Familienstand_seit} onChange={this.handleChange("Familienstand_seit")} />
              </label>

            </form>
            <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
            Weiter
            </Button>
          </div>
        )
  }

  AngabenWohnen = () => { // id: 203 -> muss noch implementiert werden
        return(
          <div id="quiz">
            <h2 id="text">Angaben zu deiner Wohnsituation</h2>
            <form onSubmit={this.handleSubmit} >
              <label>
                Wie wohnst du?
                <select value={this.state.Wohnsituation} onChange={this.handleChange("Wohnsituation")}>
                  <option value="alleine">alleine</option>
                  <option value="mit Ehegattin/ Ehegatte">mit Ehegattin/ Ehegatte</option>
                  <option value="Lebenspartner">mit meiner eingetragenen Lebenspartnerin /meinem eingetragenen Lebenspartner</option>
                  <option value="Partner">mit meiner Partnerin/meinem Partner in einer Verantwortungs- und Einstehensgemeinschaft („eheähnliche Gemeinschaft“)</option>
                  <option value="Kind(ern) zwischen 15 Jahren und 24">mit unverheirateten Kind(ern) zwischen 15 Jahren und 24 Jahren</option>
                  <option value="Kind(ern) unter 15">mit unverheirateten Kind(ern) unter 15 Jahren</option>
                  <option value="Eltern">mit meinen Eltern bzw. einem Elternteil</option>
                  <option value="Verwandten">mit sonstigen Verwandten oder Verschwägerten </option>
                  <option value="sonstigen Personen">mit sonstigen Personen (zum Beispiel andere Personen in einer Wohngemeinschaft)</option>
                </select>              
              </label>

              <label>
              Wie viele weitere Personen wohnen zusätzlich zu dir mit dir zusammen?
                <input type="number" value={this.state.Anzahl_Personen_Wohnung} onChange={this.handleChange("Anzahl_Personen_Wohnung")} />
              </label>

              <label>
                Wie wohnst du?
                <select value={this.state.Wohnart} onChange={this.handleChange("Wohnart")}>
                  <option value="Miete">zur Miete</option>
                  <option value="Eigenheim">Im Eigenheim</option>
                </select>              
              </label>

              {this.state.Wohnart === "Miete" &&
                <div>
                  <label>
                  Seit wann wohnst du zur Miete?
                  <input type="text" value={this.state.Miete_seit} onChange={this.handleChange("Miete_seit")} />
                  </label>

                  <label>
                    Grundmiete (ohne Nebenkosten):
                    <input type="number" value={this.state.Grundmiete} onChange={this.handleChange("Grundmiete")} />
                  </label>
  
                  <label>
                    Nebenkosten (ohne Heizkosten):
                    <input type="number" value={this.state.Nebenkosten} onChange={this.handleChange("Nebenkosten")} />
                  </label>
  
                  <label>
                    Heizkosten:
                    <input type="number" value={this.state.Heizkosten} onChange={this.handleChange("Heizkosten")} />
                  </label>
  
                  <label>
                    sonstige Wohnkosten:
                    <input type="number" value={this.state.sonstige_Wohnkosten_Miete} onChange={this.handleChange("sonstige_Wohnkosten_Miete")} />
                  </label>
                </div>
              }

              {this.state.Wohnart === "Eigenheim" &&
                <div>
                  <label>
                    Schuldzinsen ohne Tilgungsraten:
                    <input type="number" value={this.state.Schuldzinsen} onChange={this.handleChange("Schuldzinsen")} />
                  </label>
  
                  <label>
                    Nebenkosten (ohne Heizkosten):
                    <input type="number" value={this.state.Nebenkosten_Eigenheim} onChange={this.handleChange("Nebenkosten_Eigenheim")} />
                  </label>
  
                  <label>
                    Heizkosten:
                    <input type="number" value={this.state.Heizkosten_Eigenheim} onChange={this.handleChange("Heizkosten_Eigenheim")} />
                  </label>
  
                  <label>
                    Heizart (z.B. Strom, Gas):
                    <input type="text" value={this.state.Heizart} onChange={this.handleChange("Heizart")} />
                  </label>

                  <label>
                    sonstige Wohnkosten:
                    <input type="number" value={this.state.sonstige_Wohnkosten_Eigentum} onChange={this.handleChange("sonstige_Wohnkosten_Eigentum")} />
                  </label>
                </div>
              }

            </form>
            <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
            Weiter
            </Button>
          </div>
        )
  }

  AngabenTätigkeit = () => { // id: 204
        return(
          <div id="quiz">
            <h2 id="text">Weitere Angaben</h2>
            <form onSubmit={this.handleSubmit} >
            <label>
            Ich habe für den Monat der Antragstellung bereits Leistungen
            bei einem anderen Jobcenter beantragt oder von diesem bezogen.
                <select value={this.state.sonstige_Leistungen} onChange={this.handleChange("sonstige_Leistungen")}>
                  <option value="ja">Ja</option>
                  <option value="nein">Nein</option>
                </select>
              </label>

              <label>
                Ich fühle mich gesundheitlich in der Lage,
                eine Tätigkeit von mindestens drei Stunden täglich auszuüben.
                <select value={this.state.arbeitsfähig} onChange={this.handleChange("arbeitsfähig")}>
                  <option value="ja">Ja</option>
                  <option value="nein">Nein</option>
                </select>
              </label>

              <label>
              Ich bin Berechtigte/Berechtigter nach dem Asylbewerberleistungsgesetz.
                <select value={this.state.Berechtigter} onChange={this.handleChange("Berechtigter")}>
                  <option value="ja">Ja</option>
                  <option value="nein">Nein</option>
                </select>
              </label>

              <label>
                Ich bin Schülerin/Schüler, Studentin/Student
                oder Auszubildende/Auszubildender. 
                <select value={this.state.Schüler} onChange={this.handleChange("Schüler")}>
                  <option value="ja">Ja</option>
                  <option value="nein">Nein</option>
                </select>
              </label>

              <label>
              Während der Ausbildung bin ich in einem Wohnheim, Internat, einer besonderen 
              Einrichtung für Menschen mit Behinderung oder beim Ausbilder mit voller Verpflegung 
              oder anderweitig mit Kostenerstattung für Unterkunft und Verpflegung untergebracht. 
                <select value={this.state.Wohnheim} onChange={this.handleChange("Wohnheim")}>
                  <option value="ja">Ja</option>
                  <option value="nein">Nein</option>
                </select>
              </label>

              <label>
                Ich befinde mich derzeit oder demnächst in einer stationären
                Einrichtung (z. B. Krankenhaus, Altenheim, Justizvollzugsanstalt).
                <select value={this.state.stationäre_Einrichtung} onChange={this.handleChange("stationäre_Einrichtung")}>
                  <option value="ja">Ja</option>
                  <option value="nein">Nein</option>
                </select>
              </label>

              <label>
              Dauer der Unterbringung (von - bis):
                <input type="text" value={this.state.dauer_Unterbringung} onChange={this.handleChange("dauer_Unterbringung")} />
              </label>

              <label>
              Art der stationären Einrichtung:
                <input type="text" value={this.state.Art_stationäre_Einrichtung} onChange={this.handleChange("Art_stationäre_Einrichtung")} />
              </label>

            </form>
            <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
            Weiter
            </Button>
          </div>
        )
  }

  AngabenMehrbedarf = () => { // id: 205
      return(
        <div id="quiz">
          <h2 id="text">Weitere Angaben</h2>
          <h4 id="text">Alle Angaben hier sind freiwillig und dienen nur zur Prüfung eines Mehrbedarfs</h4>
          <form onSubmit={this.handleSubmit} >
          <label>
          Bist du alleinerziehend?
              <select value={this.state.alleinerziehend} onChange={this.handleChange("alleinerziehend")}>
                <option value="ja">Ja</option>
                <option value="nein">Nein</option>
              </select>
            </label>

            <label>
              Bist du schwanger?
              <select value={this.state.schwanger} onChange={this.handleChange("schwanger")}>
                <option value="ja">Ja</option>
                <option value="nein">Nein</option>
              </select>
            </label>

            <label>
            Erzeugst du dein Warmwasser dezentral?
              <select value={this.state.Warmwasser_dezentral} onChange={this.handleChange("Warmwasser_dezentral")}>
                <option value="ja">Ja</option>
                <option value="nein">Nein</option>
              </select>
            </label>

            <label>
              Benötigst du aus medizinischen Gründen eine kostenaufwändige Ernährung? 
              <select value={this.state.teure_Ernährung} onChange={this.handleChange("teure_Ernährung")}>
                <option value="ja">Ja</option>
                <option value="nein">Nein</option>
              </select>
            </label>

            <label>
            Hast du eine Behinderung und erhälst eines der folgenden?
            <ul>
              <li>Leistungen zur Teilhabe am Arbeitsleben nach § 49 Neuntes Buch Sozialgesetzbuch (SGB IX) oder</li>
              <li>sonstige Hilfen zur Erlangung eines geeigneten Arbeitsplatzes oder</li>
              <li>Eingliederungshilfen nach § 112 SGB IX.</li>
            </ul>
              <select value={this.state.Behinderung} onChange={this.handleChange("Behinderung")}>
                <option value="ja">Ja</option>
                <option value="nein">Nein</option>
              </select>
            </label>

            <label>
            Bist du nicht erwerbsfähig und Inhaberin/Inhaber eines Ausweises nach § 152 Abs. 5 SGB IX mit dem Merkzeichen G oder aG?
              <select value={this.state.nicht_erwerbsfähig} onChange={this.handleChange("nicht_erwerbsfähig")}>
                <option value="ja">Ja</option>
                <option value="nein">Nein</option>
              </select>
            </label>

          </form>
          <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
          Weiter
          </Button>
        </div>
      )
  }

  AngabenGeld = () => { // id: 206
    return(
      <div id="quiz">
        <h2 id="text">Angaben zum Einkommen und Vermögen</h2>
        <form onSubmit={this.handleSubmit} >
        <label>
        Hast du oder ein anderes Mitglied deiner Bedarfsgemeinschaft Einkommen?
            <select value={this.state.Einkommen} onChange={this.handleChange("Einkommen")}>
              <option value="ja">Ja</option>
              <option value="nein">Nein</option>
            </select>
          </label>

          <label>
            Besitzt du ein Vermögen über 60.000€(30.000€ für jede weitere Person der Bedarfsgemeinscahft), welches du für deinen Lebensunterhalt nutzen kannst?
            <select value={this.state.Vermögen} onChange={this.handleChange("Vermögen")}>
              <option value="ja">Ja</option>
              <option value="nein">Nein</option>
            </select>
          </label>

        </form>
        <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
        Weiter
        </Button>
      </div>
    )
  }

  AngabenWeitere = () => { // id: 207
  return(
    <div id="quiz">
      <h2 id="text">Weitere Angaben</h2>
      <form onSubmit={this.handleSubmit} >
        <label>
          Wie viele Jahre hast du schon eine selbstständige Tätigkeit ausgeübt?
          <input type="number" value={this.state.selbstständige_Tätigkeit_Jahre} onChange={this.handleChange("selbstständige_Tätigkeit_Jahre")} />
        </label>

        <label>
          Hast du Anträge auf andere (Sozial-)Leistungen gestellt? Wenn ja, gib bitte an welche.
          <input type="text" value={this.state.andere_Anträge} onChange={this.handleChange("andere_Anträge")} />
        </label>

        <label>
          Falls über die Anträge noch nicht entschieden wurde erläutere bitte, warum du Anspruch auf die bereits gestellten Anträge hast.
          <input type="text" value={this.state.Erläuterung_andere_Anträge} onChange={this.handleChange("Erläuterung_andere_Anträge")} />
        </label>

        <label>
         Hast du (mögliche) Ansprüche gegenüber Dritten (z.B. Arbeitgeber, Unterhaltsverpflichtete, Schädiger (z.B. aus einem Unfall))? Falls ja gib diese bitte an.
          <input type="text" value={this.state.Ansprüche_Dritte} onChange={this.handleChange("Ansprüche_Dritte")} />
        </label>
  
        <label>
        Für mich wurde eine Verpflichtungserklärung gegenüber der Ausländerbehörde oder der Auslandsvertretung abgegeben.
          <select value={this.state.Verpflichtungserklärung} onChange={this.handleChange("Verpflichtungserklärung")}>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </label>

      </form>
      <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
      Weiter
      </Button>
    </div>
  )
  }
  
  AngabenVersicherung = () => { // id: 208
  return(
    <div id="quiz">
      <h2 id="text">Angaben zur Versicherung</h2>
      <form onSubmit={this.handleSubmit} >
        <label>
          Versicherungsart
          <select value={this.state.Versicherung} onChange={this.handleChange("Versicherung")}>
            <option value="gesetzlich">gesetzlich</option>
            <option value="privat">privat</option>
            <option value="nicht versichert">nicht versichert</option>
          </select>
        </label>

        <label>
        Möchtest du deine Krankenkasse ändern?
          <select value={this.state.Krankenkasse_ändern} onChange={this.handleChange("Krankenkasse_ändern")}>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </label>

        <label>
          Falls du deine Krankenkasse ändern möchtest gibt hier die Krankenkasse an, zu der du wechseln willst. Ansonsten trage hier deine bestehende Krankenkasse ein.
          <input type="text" value={this.state.Krankenkasse} onChange={this.handleChange("Krankenkasse")} />
        </label>

      </form>
      <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
      Weiter
      </Button>
    </div>
  )
  }
  
  AngabenBank = () => { // id: 209
    return(
      <div id="quiz">
        <h2 id="text">Kontoinformationen zur Überweisung des Arbeitslosengeldes</h2>
        <form onSubmit={this.handleSubmit} >
          <label>
            Name des Kontoinhabers:
            <input type="text" value={this.state.Kontoinhaber} onChange={this.handleChange("Kontoinhaber")} />
          </label>

          <label>
            IBAN:
            <input type="text" value={this.state.Iban} onChange={this.handleChange("Iban")} />
          </label>
  
        </form>
        <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
        Weiter
        </Button>
      </div>
    )
  }

  AngabenBetreuer = () => { // id: 210
    return(
      <div id="quiz">
        <h2 id="text">Betreuer</h2>
        <form onSubmit={this.handleSubmit} >
          <label>
          Hast du eine Betreuerin/ einen Betreuer vom Betreuungsgericht/ Amtsgericht bestellt?
          <select value={this.state.Betreuer} onChange={this.handleChange("Betreuer")}>
            <option value="ja">Ja</option>
            <option value="nein">Nein</option>
          </select>
        </label>
  
        </form>
        <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
        Weiter
        </Button>
      </div>
    )
  }

  Ende = () => { // id: 211
    return(
      <div id="quiz">
        <h2 id="text">Mitwirkungspflichten</h2>
        <p id="text">
          Personen, die Leistungen nach dem SGB II beantragen oder erhalten, sind mitwirkungspflichtig: Das bedeutet, alle Angaben im Antrag und in den hierzu
          eingereichten Anlagen müssen richtig und vollständig sein. Änderungen, die nach der Antragstellung eintreten und sich auf die Leistungen auswirken können
          (z. B. Arbeitsaufnahme, Umzug), sind dem zuständigen Jobcenter unverzüglich mitzuteilen. Die Mitwirkungspflichten sind von allen Mitgliedern einer
          Bedarfsgemeinschaft zu beachten.
          Bei Verstoß gegen diese Mitwirkungspflichten werden in aller Regel von allen leistungsberechtigten Personen einer Bedarfsgemeinschaft zu viel gezahlte
          Leistungen zurückgefordert. Sofern zu Ihrer Bedarfsgemeinschaft noch weitere Personen gehören, sollten Sie als Vertreterin/Vertreter beim Ausfüllen des
          Antrags alle Mitglieder einbeziehen und die wesentlichen sowie die sie betreffenden Angaben mit ihnen abstimmen. Stellen Sie zudem bitte sicher, dass alle
          Mitglieder alle notwendigen Informationen (z. B. Bescheide) erhalten.
          Ein Verstoß gegen die Mitwirkungspflichten kann zusätzlich zu einem Ordnungswidrigkeiten- oder Strafverfahren gegen die Person führen, die die oben genannten
          Pflichten missachtet hat. Das Jobcenter holt im Wege eines automatisierten Datenabgleichs bei verschiedenen Stellen Auskünfte über Einkommen und Vermögen
          ein (z. B. Arbeitsentgelte, Kapitalerträge, Renten). Verschwiegene Einkommen und Vermögen werden daher regelmäßig nachträglich bekannt.
        </p>

        <h5 id="text">Wenn sie auf "Jetzt Abschicken" klicken bestätigen sie, dass Sie oben stehendes bestätigen.</h5>

        <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
        Jetzt Abschicken
        </Button>
      </div>
    )
  }

  Senden = () => { // id: 212
        
    const d2 = { // data anpassen
      Anrede: this.state.Anrede,
      Vorname: this.state.Vorname,
      Familienname: this.state.Familienname,
      Geburtsname: this.state.Geburtsname,
      Geburtsort: this.state.Geburtsort,
      Geburtsdatum: this.state.Geburtsdatum,
      Geburtsland: this.state.Geburtsland,
      Staatsangehörigkeit: this.state.Staatsangehörigkeit,
      Rentenversicherungsnummer: this.state.Rentenversicherungsnummer,
      Adresse: this.state.Adresse,
      Telefon: this.state.Telefon,
      email: this.state.email,
      Familienstand: this.state.Familienstand,
      Familienstand_seit: this.state.Familienstand_seit,

      Wohnsituation: this.state.Wohnsituation,
      Anzahl_Personen_Wohnung: this.state.Anzahl_Personen_Wohnung,
      Wohnart: this.state.Wohnart,
      Miete_seit: this.state.Miete_seit,
      Grundmiete: this.state.Grundmiete,
      Nebenkosten: this.state.Nebenkosten,
      Heizkosten: this.state.Heizkosten,
      sonstige_Wohnkosten_Miete: this.state.sonstige_Wohnkosten_Miete,
      Schuldzinsen: this.state.Schuldzinsen,
      Nebenkosten_Eigenheim: this.state.Nebenkosten_Eigenheim,
      Heizkosten_Eigenheim: this.state.Heizkosten_Eigenheim,
      Heizart:this.state.Heizart,
      sonstige_Wohnkosten_Eigentum: this.state.sonstige_Wohnkosten_Eigentum,

      sonstige_Leistungen: this.state.sonstige_Leistungen,
      arbeitsfähig: this.state.arbeitsfähig,
      Berechtigter: this.state.Berechtigter,
      Schüler: this.state.Schüler,
      Wohnheim: this.state.Wohnheim,
      stationäre_Einrichtung: this.state.stationäre_Einrichtung,
      dauer_Unterbringung: this.state.dauer_Unterbringung,
      Art_stationäre_Einrichtung: this.state.Art_stationäre_Einrichtung,
      alleinerziehend: this.state.alleinerziehend,
      schwanger: this.state.schwanger,
      Warmwasser_dezentral: this.state.Warmwasser_dezentral,
      teure_Ernährung: this.state.teure_Ernährung,
      Behinderung: this.state.Behinderung ,
      nicht_erwerbsfähig: this.state.nicht_erwerbsfähig,
      Einkommen: this.state.Einkommen,
      Vermögen: this.state.Vermögen,
      selbstständige_Tätigkeit_Jahre: this.state.selbstständige_Tätigkeit_Jahre,
      andere_Anträge: this.state.andere_Anträge,
      Erläuterung_andere_Anträge: this.state.Erläuterung_andere_Anträge,
      Ansprüche_Dritte: this.state.Ansprüche_Dritte,
      Verpflichtungserklärung: this.state.Verpflichtungserklärung,
      Versicherung: this.state.Versicherung,
      Krankenkasse_ändern: this.state.Krankenkasse_ändern,
      Krankenkasse: this.state.Krankenkasse,
      Kontoinhaber: this.state.Kontoinhaber,
      Iban: this.state.Iban,
      Betreuer:this.state.Betreuer
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
        if (this.state.count === 1){
            return(
                <div>
                    <this.Startseite />
                </div>
            )
        }

        if (this.state.count === 2){
            return(
                <div>
                    <this.AnspruchB1 />
                </div>
            )
        }

        if (this.state.count === 3){
            return(
                <div>
                    <this.AnspruchB2 />
                </div>
            )
        }

        if (this.state.count === 4){
            return(
                <div>
                    <this.AnspruchB3 />
                </div>
            )
        }

        if (this.state.count === 5){
            return(
                <div>
                    <this.AnspruchB4 />
                </div>
            )
        }

        if (this.state.count === 6){
            return(
                <div>
                    <this.Anspruch />
                </div>
            )
        }

        if (this.state.count === 10){
            return(
                <div>
                    <this.SonderB1 />
                </div>
            )
        }

        if (this.state.count === 100){
            return(
                <div>
                    <this.KeinAnspruch />
                </div>
            )
        }

        if (this.state.count === 200){
            return(
                <div>
                    <this.HöheArbeitslosengeld />
                </div>
            )
        }

        if (this.state.count === 201){
            return(
                <div>
                    <this.ErgebnisArbeitslosengeld />
                </div>
            )
        }

        // Daten

        if (this.state.count === 202){
            return(
                <div>
                    <this.AngabenPerson />
                </div>
            )
        }

        if (this.state.count === 203){
          return(
              <div>
                  <this.AngabenWohnen />
              </div>
          )
        }

        if (this.state.count === 204){
          return(
            <div>
              <this.AngabenTätigkeit />
            </div>
          )
        }

        if (this.state.count === 205){
          return(
            <div>
              <this.AngabenMehrbedarf />
            </div>
          )
        }

        if (this.state.count === 206){
          return(
            <div>
              <this.AngabenGeld />
            </div>
          )
        }

        if (this.state.count === 207){
          return(
            <div>
              <this.AngabenWeitere />
            </div>
          )
        }

        if (this.state.count === 208){
          return(
            <div>
              <this.AngabenVersicherung />
            </div>
          )
        }

        if (this.state.count === 209){
            return(
              <div>
                <this.AngabenBank />
              </div>
            )
          }

        if (this.state.count === 210){
          return(
            <div>
              <this.AngabenBetreuer />
            </div>
          )
        }

        if (this.state.count === 211){
          return(
            <div>
              <this.Ende />
            </div>
          )
        }

        if (this.state.count === 212){
          return(
            <div>
              <this.Senden />
            </div>
          )
        }
    }

}


export default Arbeitslosengeld;