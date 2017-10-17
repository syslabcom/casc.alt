---
layout: page
title: FAQs zum Thema
name: rz-support-email-faq
description: 
category: rz
department: rz
section: Web Relaunch
color_scheme: orange
faq-pages:
- title: Error Mail zu groß 
  desc: <b>Problem</b><br />Beim Versenden von Mail erscheint die Fehlermeldung "Warnung / Popup - Die Größe der Nachricht, die Sie senden wollen, übersteigt das globale Größenlimit (20971520 Bytes) des Servers. Die Nachricht wurde nicht gesendet; reduzieren Sie die Nachrichtgengröße und versuchen Sie es nochmals. [OK]"<br />oder auch Fehlermeldungen der Art<br />...bounced by destination server. Reason 5.1.0 - Unknown address error('552', ['5.2.3 message size exceeds fixed maximum message size'])<br /><br /><b>Lösung</b><br />Die maximale Größe der Nachrichten, welche von Mailsystemen verarbeitet werden, ist begrenzt.<br />Die Mailrelays der UniBwM akzeptieren maximal 50 MBytes (brutto); vgl. Regelungen.<br />D.h. die Summe der Anhänge und/oder Bilder sollte keine 35 MBytes (netto) erreichen, da sie als ASCII-Daten übertragen werden müssen, wobei sie um bis zu einem Drittel anwachsen können. Mailing-Listen sind in der Regel sogar auf 4 Mbytes (brutto) begrenzt.
- title: Warum werden nicht alle meine IMAP Ordner angezeigt?
  desc: <b>Problem</b><br />Es gibt eine Inkonsistenz zwischen der Imap-Struktur und der Datei-Struktur.<br />Sie entsteht oft bei einer Manipulation der Dateien und (Unter-)verzeichnisse des Verzeichnis $HOME/Maildir, beispielsweise auf dem Server "applxsrv.rz.unibw-muenchen.de"; <br /><br /><b>Lösung</b><br />Konto-Namen anklicken.<br />Unter → Erweiterte Funktionen auf → IMAP-Ordner abonnieren klicken. Die gewünschten Ordner markieren → Abonnieren...
- title: Warum sind meine Nachrichten nicht mehr auf dem Server?
  desc: <b>Problem</b><br>Sie verwenden abwechselnd POP3 und IMAP um die Nachrichten von Server zu lesen, vermutlich jeweils von verschiedenen Rechnern aus.<br />Beim Abruf mit POP3, werden die Nachrichten vom Server auf das lokale System (Client) übertragen. Danach werden sie auf dem Server gelöscht. Kein Wunder, dass sie dort dann nicht mehr zu finden sind. Auch der Webmailer arbeitet mit IMAP.<br /><br /><b>Lösung</b><br />Immer dann wenn Sie Nachrichten von unterschiedlichen Maschinen aus abrufen bzw. lesen, benötigen Sie IMAP auf ALLEN Maschinen. Bitte achten Sie darauf, dass der Webmailer IMMER IMAP verwendet. Verwenden Sie den Webmailer, so müssen Sie IMAP auch sonst verwenden.
- title: Ich kann keine Nachrichten mehr empfangen, weil meine Quotas erschöpft sind.
  desc: <b>Problem</b><br />Die Quotas beinhalten all den Speicherplatz, den Sie im RZ belegen. Nicht nur für E-Mail sondern beispielsweise auch in den PC-Pools.<br /><br /><b>Lösung</b><br />Schaffen Sie Platz!<br />Löschen Sie nicht mehr gebrauchte Daten;d.h. bei Mail<ul><li>Löschen Sie den Inhalt des Papierkorbs</li><li>Verdichten / Komprimieren Sie Ihre E-Mail Ordner</li><li>Vergessen Sie nicht Ihren Sent-Ordner</li></ul><br />Weitere Informationen bietet der Punkt Quota.
- title: Outlook unter Windows 7 kann nicht senden oder Mails empfangen.
  desc: <b>Problem</b><br />Outlook startet, verlangt aber kein Passwort(Kennwort).<br />Auf der Statuszeile steht "Keine Verbindung zum Exchange-Server".<br />Es können auch keine E-Mails versendet werden.<br /><br /><b>Lösung</b><br />Outlook beenden und die Anmeldeinformationen der Benutzerkennung löschen unter<br />-> Systemsteuerung<br />-> Benutzerkonten<br />-> Eigene Anmeldeinformationen verwalten<br />-> Windows-Anmeldeinformationen.<br />Hier die Einträge für Outlook aus dem Tresor entfernen.<br />Starten Sie Outlook erneut und geben für Ihre "unibw\<Kennung>" das RZ-Kennwort ein.<br />Speichern Sie die Anmeldeinformationen NICHT, damit können Sie dieses Problem zukünftig vermeiden.
breadcrumbs:
- title: Home
  url: rz.html

---