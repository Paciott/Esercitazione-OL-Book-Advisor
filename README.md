# Progetto - Esercitazione API Open Library

## Descrizione

Lo scopo del progetto è quello di creare una pagina che, tramite delle chiamate API a [Open Library](https://openlibrary.org/), sia in grado di mostrare a schermo una serie di carte contenenti informazioni sui libri del genere indicato dall'utente nell'apposito campo di ricerca.

Una volta digitata nel campo di ricerca una parola chiave, si avvia una chiamata API che va a prendere i dati relativi alla parola chiave digitata e li mostra a schermo sotto fomra di carte. In ogni carta sono presenti tre dati:

- Il titolo di un'opera.

- Il relativo autore.

- Un bottone che, se premuto, avvierà in background una seconda chiamata API e mostrerà all'interno della carta del libro una piccola sinossi del libro in questione oppure, se questa non dovesse essere disponibile, mostrerà un apposito feedback visivo ("No description avaliable").

Nel momento in cui viene avviata la ricerca è mostrato a schermo un feedback visivo che indica che la ricerca è in corso. Se questa ha esito positivo vengono mostrati i risultati nel formato sopra descritto. Se invece ha esito negativo oppure se l'utente ha avviato la ricerca dopo aver digitato degli input non validi, la pagina mostra a schermo un nuovo feedback visivo ("No match found.").

## Screenshots

![active](/screenshots/Active.png)
![error](/screenshots/Error.png)

## Costruito con:

- HTML
- CSS
- JavaScript Vanilla

## Link

[Versione live del progetto](https://paciott.github.io/Esercitazione-OL-Book-Advisor/)
