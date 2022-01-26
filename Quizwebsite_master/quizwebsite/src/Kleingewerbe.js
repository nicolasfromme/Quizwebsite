import React from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';


class Kleingewerbe extends React.Component {
    constructor(probs) {
        super(probs);
        this.state = {
            count: 1,

            // Angaben zum Betriebsinhaber sind unwichtig für Kleingewerbe
            
            // Angaben zur Person
            Name: "",
            Vorname: "",
            Geschlecht: "", // m oder w
            Geburtsname: "", // nur falls anders
            Geburtsdatum: 0, //ddmmjjjj
            Geburtsortland: "",
            Staatsangehörigkeit: "",
            Anschrift: "",
            Telefon: 0,

            Betriebsstätte: "",
            Telefon_Betriebsstätte: 0,
            Hauptniederlassung: "",
            Telefon_Hauptniederlassung: 0,
            frühere_Betriebsstätte: "",
            Telefon_frühere_Betriebsstätte: 0,

            Tätigkeit: "",
            Nebenerwerb: "",
            beginn: 0,
            Betriebsart: "", // Industrie, Handwerk, Handel, sonstiges
            Vollzeit_beschäftigte: 0,
            Teilzeit_beschäftigte: 0,

            Art_Anmeldung: "", // Hauptniederlassung, Zweigniederlassung, unselbstständige Zweigstelle, Automatenaufstellungsgewerbe, Reisegewerbe
            Grund_Anmeldung: "", // Neugründung, Wiedereröffnung nach Verlegung aus einem anderen Meldebezirk, Gründung nach Umwandlungsgesetz, Wechsel der Rechtsform, Gesellschaftereintritt, Erbfolgen/ Kauf/ Pacht
            früherer_Firmenname: "",

            Erlaubnis: "", // nur falls Erlaubnis gebraucht wird
            Datum_Erlaubnis: 0,
            Behörde_Erlaubnis: "",

            Handwerkskarte: "", // nur falls Handwerksbetrieb
            Datum_Handwerkskarte: 0, 
            Handwerkskammer: "",

            Aufenthaltsgenemigung: true, // nur falls Ausländer
            Datum_Aufenthaltsgenemigung: 0,
            Behörde_Aufenthaltsgenemigung: "",
            Aufenthaltsgenemigung_beschränkt: true,
            Auflagen: ""


        }
    }

    increment = (val) => {
        this.setState({
          count: this.state.count + val,
          lastCount: this.state.count
        })
        console.log(this.state.count)
      }
  
    decrement = (val) => {
        this.setState({
          count: this.state.count - val,
          lastCount: this.state.count
        })
      }

    handleChange = (Name) => (event) => {
      var key = Name
        this.setState({
            [key]: event.target.value
        });
        
    }

    Startseite = () => { // id: 1 error: wird noch nicht returned
        return(
            <div id="quiz">
                <h2 id="text">Wir stellen deinen Antrag aufs Kleingewerbe für dich!</h2>
                <Button id="button" onClick={() => this.increment(1)} variant="contained" color="secondary">
                Jetzt Antrag stellen
                </Button>
            </div>
        )
    }

    AngabenPerson = () => { // id: 2
        return(
          <div id="quiz">
            <h2 id="text">Angaben zu deiner Person</h2>
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
                Geschlecht:
                <input type="text" value={this.state.Geschlecht} onChange={this.handleChange("Geschlecht")} />
              </label>

              <label>
              Geburtsname:
                <input type="text" value={this.state.Geburtsname} onChange={this.handleChange("Geburtsname")} />
              </label>

              <label>
              Geburtsdatum:
                <input type="text" value={this.state.Geburtsdatum} onChange={this.handleChange("Geburtsdatum")} />
              </label>

              <label>
              Geburtsort und Geburtsland:
                <input type="text" value={this.state.Geburtsortland} onChange={this.handleChange("Geburtsortland")} />
              </label>

              <label>
              Staatsangehörigkeit:
                <input type="text" value={this.state.Staatsangehörigkeit} onChange={this.handleChange("Staatsangehörigkeit")} />
              </label>

              <label>
              Anschrift:
                <input type="text" value={this.state.Anschrift} onChange={this.handleChange("Anschrift")} />
              </label>

              <label>
              Telefon:
                <input type="number" value={this.state.Telefon} onChange={this.handleChange("Telefon")} />
              </label>

            </form>
            <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
            Weiter
            </Button>
          </div>
        )
    }

    AngabenBetriebsstätte = () => { // id: 3
        return(
          <div id="quiz">
            <h2 id="text">Angaben zu deiner Betriebsstätte</h2>
            <form onSubmit={this.handleSubmit} >
              <label>
                Anschrift deiner Betriebsstätte:
                <input type="text" value={this.state.Betriebsstätte} onChange={this.handleChange("Betriebsstätte")} />
              </label>

              <label>
                Telefonnummer deiner Betriebsstätte:
                <input type="number" value={this.state.Telefon_Betriebsstätte} onChange={this.handleChange("Telefon_Betriebsstätte")} />
              </label>

              <label>
                Addresse deiner Hauptniederlassung(falls Betriebsstätte lediglich Zweigstelle ist):
                <input type="text" value={this.state.Hauptniederlassung} onChange={this.handleChange("Hauptniederlassung")} />
              </label>

              <label>
              Telefonnummer deiner Hauptniederlassung:
                <input type="number" value={this.state.Telefon_Hauptniederlassung} onChange={this.handleChange("Telefon_Hauptniederlassung")} />
              </label>

              <label>
              Adresse deiner früheren Betriebsstätte (falls vorhanden):
                <input type="text" value={this.state.frühere_Betriebsstätte} onChange={this.handleChange("frühere_Betriebsstätte")} />
              </label>

              <label>
              Telefonnummer deiner früheren Betriebsstätte:
                <input type="number" value={this.state.Telefon_frühere_Betriebsstätte} onChange={this.handleChange("Telefon_frühere_Betriebsstätte")} />
              </label>

              

            </form>
            <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
            Weiter
            </Button>
          </div>
        )
    }

    AngabenTätigkeit = () => { // id: 4
        return(
          <div id="quiz">
            <h2 id="text">Angaben zu deiner Tätigkeit</h2>
            <form onSubmit={this.handleSubmit} >
              <label>
                Genaue Beschreibung deiner Tätigkeit:
                <input type="text" value={this.state.Tätigkeit} onChange={this.handleChange("Tätigkeit")} />
              </label>

              <label>
                Betreibst du die Tätigkeit (vorerst) im Nebenerwerb?:
                <select value={this.state.Nebenerwerb} onChange={this.handleChange("Nebenerwerb")}>
                  <option value="ja">Ja</option>
                  <option value="nein">Nein</option>
                </select>
              </label>

              <label>
                Startdatum:
                <input type="text" value={this.state.beginn} onChange={this.handleChange("beginn")} />
              </label>

              <label>
              Betriebsart:
              <select value={this.state.Betriebsart} onChange={this.handleChange("Betriebsart")}>
                <option value="Industrie">Industrie</option>
                <option value="Handwerk">Handwerk</option>
                <option value="Handel">Handel</option>
                <option value="sonstiges">sonstiges</option>
              </select>
              </label>

              <label>
              Beschäftigte in Vollzeit:
                <input type="number" value={this.state.Vollzeit_beschäftigte} onChange={this.handleChange("Vollzeit_beschäftigte")} />
              </label>

              <label>
              Beschäftigte in Teilzeit:
                <input type="number" value={this.state.Teilzeit_beschäftigte} onChange={this.handleChange("Teilzeit_beschäftigte")} />
              </label>

              

            </form>
            <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
            Weiter
            </Button>
          </div>
        )
    }

    AngabenAnmeldung = () => { // id: 5
        return(
          <div id="quiz">
            <form onSubmit={this.handleSubmit} >
              <label>
                Art der Gewerbeanmeldung:
                <select value={this.state.Art_Anmeldung} onChange={this.handleChange("Art_Anmeldung")}>
                  <option value="Hauptniederlassung">Hauptniederlassung</option>
                  <option value="Zweigniederlassung">Zweigniederlassung</option>
                  <option value="unselbstständige Zweigstelle">unselbstständige Zweigstelle</option>
                  <option value="Automatenaufstellungsgewerbe">Automatenaufstellungsgewerbe</option>
                  <option value="Reisegewerbe">Reisegewerbe</option>
                </select>
              </label>

              <label>
              Grund der Anmeldung:
              <select value={this.state.Grund_Anmeldung} onChange={this.handleChange("Grund_Anmeldung")}>
                <option value="Industrie">Neugründung</option>
                <option value="Handwerk">Wiedereröffnung nach Verlegung aus einem anderen Meldebezirk</option>
                <option value="Handel">Gründung nach Umwandlungsgesetz</option>
                <option value="sonstiges">Wechsel der Rechtsform</option>
                <option value="sonstiges">Gesellschaftereintritt</option>
                <option value="sonstiges">Erbfolgen/ Kauf/ Pacht</option>
              </select>
              </label>

              <label>
              früherer Firmenname (falls vorhanden):
                <input type="text" value={this.state.früherer_Firmenname} onChange={this.handleChange("früherer_Firmenname")} />
              </label>

            </form>
            <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
            Weiter
            </Button>
          </div>
        )
    }

    AngabenErlaubnis = () => { // id: 6
        return(
          <div id="quiz">
            <h2 id="text">Erlaubnis, Gewerbe auszuführen</h2>
            <form onSubmit={this.handleSubmit} >
              <label>
                Hast du eine Erlaubnis, deine Gewerbetätigkeit auszuführen?:
                <select value={this.state.Erlaubnis} onChange={this.handleChange("Erlaubnis")}>
                  <option value="nein">Ich brauche keine Erlaubnis</option>
                  <option value="ja">Ja</option>
                  <option value="nein">Nein</option>
                </select>
              </label>

              <label>
                Datum der Erlaubnis:
                <input type="text" value={this.state.Datum_Erlaubnis} onChange={this.handleChange("Datum_Erlaubnis")} />
              </label>

              <label>
              Behörde, die die Erlaubnis erteilt hat:
                <input type="text" value={this.state.Behörde_Erlaubnis} onChange={this.handleChange("Behörde_Erlaubnis")} />
              </label>

            </form>
            <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
            Weiter
            </Button>
          </div>
        )
    }

    AngabenHandwerk = () => { // id: 7
        return(
          <div id="quiz">
            <h2 id="text">Handwerkskarte</h2>
            <form onSubmit={this.handleSubmit} >
              <label>
                Hast du eine Handwerkskarte?
                <select value={this.state.Handwerkskarte} onChange={this.handleChange("Handwerkskarte")}>
                  <option value="nein">Ich habe keinen Handwerksbetrieb</option>
                  <option value="ja">Ja</option>
                  <option value="nein">Nein</option>
                </select>
              </label>

              <label>
                Datum der Handwerkskarte:
                <input type="text" value={this.state.Datum_Handwerkskarte} onChange={this.handleChange("Datum_Handwerkskarte")} />
              </label>

              <label>
              Handwerkskammer:
                <input type="text" value={this.state.Handwerkskammer} onChange={this.handleChange("Handwerkskammer")} />
              </label>

            </form>
            <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
              Weiter
            </Button>
          </div>
        )
    }

    AngabenAusländer = () => { // id: 8
        return(
          <div id="quiz">
            <h2 id="text">Ausländer</h2>
            <form onSubmit={this.handleSubmit} >
              <label>
                Hast du eine Aufenthaltsgenemigung, falls du Ausländer bist?
                <select value={this.state.Aufenthaltsgenemigung} onChange={this.handleChange("Aufenthaltsgenemigung")}>
                  <option value="deutscher">Ich bin deutscher Staatsürger</option>
                  <option value="ja">Ja</option>
                  <option value="nein">Nein</option>
                </select>
              </label>

              <label>
                Datum der Aufenthaltsgenemigung:
                <input type="text" value={this.state.Datum_Aufenthaltsgenemigung} onChange={this.handleChange("Datum_Aufenthaltsgenemigung")} />
              </label>

              <label>
              Behörde, die Aufenthaltsgenemigung ausgestellt hat:
                <input type="text" value={this.state.Behörde_Aufenthaltsgenemigung} onChange={this.handleChange("Behörde_Aufenthaltsgenemigung")} />
              </label>

              <label>
                Ist deine Aufenthaltsgenemigung beschränkt?
                <select value={this.state.Aufenthaltsgenemigung_beschränkt} onChange={this.handleChange("Aufenthaltsgenemigung_beschränkt")}>
                  <option value="-">-</option>
                  <option value="ja">Ja</option>
                  <option value="nein">Nein</option>
                </select>
              </label>

              <label>
              Auflagen oder Beschränkungen der Aufenthaltsgenemigung:
                <input type="text" value={this.state.Auflagen} onChange={this.handleChange("Auflagen")} />
              </label>

            </form>
            <Button id="button" variant="contained" color="secondary" onClick = {() => this.increment(1)}>
              Abschicken
            </Button>
          </div>
        )
    }

    Ende = () => { // id: 9
        
        const d2 = {
          Name: this.state.Name,
          Vorname: this.state.Vorname,
          Geschlecht: this.state.Geschlecht,
          Geburtsname: this.state.Geburtsname,
          Geburtsdatum: this.state.Geburtsdatum,
          Geburtsortland: this.state.Geburtsortland,
          Staatsangehörigkeit: this.state.Staatsangehörigkeit,
          Anschrift: this.state.Anschrift,
          Telefon: this.state.Telefon,

          Betriebsstätte: this.state.Betriebsstätte,
          Telefon_Betriebsstätte: this.state.Telefon_Betriebsstätte,
          Hauptniederlassung: this.state.Hauptniederlassung,
          Telefon_Hauptniederlassung: this.state.Telefon_Hauptniederlassung,
          frühere_Betriebsstätte: this.state.frühere_Betriebsstätte,
          Telefon_frühere_Betriebsstätte: this.state.Telefon_frühere_Betriebsstätte,
          Tätigkeit: this.state.Tätigkeit,
          Nebenerwerb: this.state.Nebenerwerb,
          beginn: this.state.beginn,
          Betriebsart: this.state.Betriebsart,
          Vollzeit_beschäftigte: this.state.Vollzeit_beschäftigte,
          Teilzeit_beschäftigte: this.state.Teilzeit_beschäftigte,
          Art_Anmeldung: this.state.Art_Anmeldung,
          Grund_Anmeldung: this.state.Grund_Anmeldung,
          früherer_Firmenname: this.state.früherer_Firmenname,
          Erlaubnis: this.state.Erlaubnis,
          Datum_Erlaubnis: this.state.Datum_Erlaubnis,
          Behörde_Erlaubnis: this.state.Behörde_Erlaubnis,
          Handwerkskarte: this.state.Handwerkskarte,
          Datum_Handwerkskarte: this.state.Datum_Handwerkskarte, 
          Handwerkskammer: this.state.Handwerkskammer,
          Aufenthaltsgenemigung: this.state.Aufenthaltsgenemigung,
          Datum_Aufenthaltsgenemigung: this.state.Datum_Aufenthaltsgenemigung,
          Behörde_Aufenthaltsgenemigung: this.state.Behörde_Aufenthaltsgenemigung,
          Aufenthaltsgenemigung_beschränkt: this.state.Aufenthaltsgenemigung_beschränkt,
          Auflagen: this.state.Auflagen
      }

      const data = {d2}
      
      
        axios.post("http://localhost:5000/api", data)
        return(
          <div id="quiz">
            <h2 id="text">Fertig, dein Antrag wird bearbeitet!</h2>
          </div>
        )
    }
      
      
    getval = () => {
      console.log(this.state.Name)
      console.log(this.state.Telefon)
      return(<h1>test</h1>)
    }


    render() {
        if (this.state.count === 1){
            return(
                <div>
                    <this.Startseite />
                </div>
            )
        }

        else if (this.state.count === 2){
          return(
            <div>
              <this.AngabenPerson />
            </div>
          )
        }

        else if (this.state.count === 3){
          return(
              <div>
                  <this.AngabenBetriebsstätte />
              </div>
          )
      }

      else if (this.state.count === 4){
        return(
            <div>
                <this.AngabenTätigkeit />
            </div>
        )
    }

    else if (this.state.count === 5){
      return(
          <div>
              <this.AngabenAnmeldung/>
          </div>
      )
  }

      else if (this.state.count === 6){
        return(
            <div>
                <this.AngabenErlaubnis />
            </div>
        )
    }

      else if (this.state.count === 7){
        return(
            <div>
                <this.AngabenHandwerk />
            </div>
        )
      }

      else if (this.state.count === 8){
        return(
            <div>
                <this.AngabenAusländer />
            </div>
        )
      }

      else if (this.state.count === 9){
        return(
            <div>
                <this.Ende />
            </div>
        )
      }

        
    }
}

export default Kleingewerbe;