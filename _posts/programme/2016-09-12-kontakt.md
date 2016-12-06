---
layout: form
title: Antragsformular
nav_title: Antragsformular
name: programme
category: antrag
parent: Antrag auf Aufnahme
---

<form  data-disable="false" role="form" novalidate="true">

        <div class="row">
            <div class="col-sm-2">
                <div class="form-group">
                        <select class="form-control" required="" data-required-error="Füllen Sie dieses Feld aus.">
                            <option>Herr</option>
                            <option>Frau</option>
                        </select>
                </div> 
            </div>
            <div class="col-sm-5">
                <div class="form-group">
                        <input type="text" class="form-control" id="firstName" placeholder="Vorname" required="" pattern="^[a-zA-Z- ]+$" data-pattern-error="Es sind ausschließlich Buchstaben und Bindestrich erlaubt." data-required-error="Füllen Sie dieses Feld aus." />
                </div>
            </div>
            <div class="col-sm-5">
                <div class="form-group">
                        <input type="text" class="form-control" id="lastName" placeholder="Nachname" required="" pattern="^[a-zA-Z- ]+$" data-pattern-error="Es sind ausschließlich Buchstaben und Bindestrich erlaubt." data-required-error="Füllen Sie dieses Feld aus." />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3">
                <div class="form-group">
                        <input type="text" class="form-control" id="birthday" placeholder="Geburtsdatum" required="" pattern="^\d{2}[./-]\d{2}[./-]\d{4}$" data-pattern-error="Bitte geben Sie Ihr Geburtsdatum im Format TT.MM.YYYY an." data-required-error="Füllen Sie dieses Feld aus." />
                </div>
            </div>
            <div class="col-sm-5">
                <div class="form-group">
                        <input type="text" class="form-control" id="birthLocation" placeholder="Geburtsort" required="" pattern="^[a-zA-Z- ]+$" data-pattern-error="Es sind ausschließlich Buchstaben und Bindestrich erlaubt." data-required-error="Füllen Sie dieses Feld aus." />
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                        <input type="text" class="form-control" id="nationality" placeholder="Staatsangehörigkeit" required="" pattern="^[a-zA-Z- ]+$" data-pattern-error="Es sind ausschließlich Buchstaben und Bindestrich erlaubt." data-required-error="Füllen Sie dieses Feld aus." />
                </div>
            </div>
        </div>                    
        <div class="row">
            <div class="col-sm-8">
                <div class="form-group">
                        <input type="text" class="form-control" id="street" placeholder="Straße" required="" pattern="^[a-zA-Z- ]+$" data-pattern-error="Es sind ausschließlich Buchstaben und Bindestrich erlaubt." data-required-error="Füllen Sie dieses Feld aus." />
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">

                        <input type="text" class="form-control" id="street-number" placeholder="Hausnummer" required="" data-required-error="Füllen Sie dieses Feld aus." />

                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <div class="form-group">

                        <input type="text" class="form-control" id="plz" placeholder="PLZ" required="" data-required-error="Füllen Sie dieses Feld aus." pattern="^[0-9 ]*$" data-pattern-error="Es sind ausschließlich Zahlen erlaubt." />
                </div>
            </div>
            <div class="col-sm-9">
                <div class="form-group">            
                        <input type="text" class="form-control" id="city" placeholder="Ort" required="" pattern="^[a-zA-Z- ]+$" data-pattern-error="Es sind ausschließlich Buchstaben und Bindestrich erlaubt." data-required-error="Füllen Sie dieses Feld aus." />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">

                        <input type="text" class="form-control" id="phone" placeholder="Tel" required="" data-required-error="Füllen Sie dieses Feld aus." pattern="^[0-9 ]*$" data-pattern-error="Es sind ausschließlich Zahlen erlaubt." />
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                        <input type="email" class="form-control" id="email" placeholder="Email" required="" data-required-error="Füllen Sie dieses Feld aus." data-error="Bitte geben Sie eine gültige Emailadresse ein." />
                </div>
            </div>
        </div>


        <div class="heading-line-bottom">
          <h4 class="heading-title">Anlagen</h4>
        </div>

        <ul class="list">
            <li><b>Nachweis der Hochschulzugangsberechtigung</b> durch die allgemeine
                Hochschulreife oder einschlägige fachgebundene Hochschulreife, die
                Fachhochschulreife oder die einschlägige fachgebundene Hochschulreife
                oder durch den Nachweis der erfolgreich bestandenen Meister- oder
                Technikerprüfung nach näherer Maßgabe von Art. 45 Abs. 1 Bayerisches
                Hochschulgesetz (BayHSchG) i. V. m. der Qualifikationsverordnung oder
                durch den Nachweis der sonstigen beruflichen Qualifizierung gemäß Art.
                45 Abs. 2 BayHSchG) i. V. m. der Qualifikationsverordnung
            </li>
            <li><b>Tabellarischer Lebenslauf</b> (mit Original-Unterschrift)</li>
            <li><b>Lichtbild</b></li>
            <li>Ausgefüllter <b>Immatrikulationsantrag</b></li>
        </ul>

        <div class="form-group">
            <label for="exampleInputFile">Dateianhang</label>
            <input type="file" id="RequestInputFile">
            <p class="help-block">Laden Sie hier bitte Scans aller geforderten Unterlagen als einzelne ZIP Datei hoch.</p>
        </div>


        <div class="form-group">
            <div class="checkbox">
              <label>
                <input type="checkbox" value="">
                Hiermit erkenne ich die anliegenden <a class="form-link" href="#">Bedingungen</a> und die <a class="form-link" href="#">Prüfungsordnung</a> des Bachelor-Studiengangs Wirtschaftsingenieurwesen an und bestätige die Richtigkeit und Vollständigkeit meiner Angaben.</label>
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" value="">
                Von der <a class="form-link" href="#">Widerrufsbelehrung</a> habe ich Kenntnis genommen.</label>
            </div>
        </div>

        <p>
            Hiermit beantrage ich die Aufnahme in den von der UniBw M und der Hochschule Reutlingen gemeinsam getragenen Bachelor-Studiengang Wirtschaftsingenieurwesen (B. Eng.).
        </p>

        <p class="button-bar">
            <button type="submit" class="btn btn-primary">Formular absenden</button>
        </p>
    </div>
  </div>
</form>
