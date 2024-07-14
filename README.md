<!------------------------
    CONSEGNA ESERCIZIO
------------------------->
Ciao ragazzi,
esercizio di oggi: *Social Posts*
nome repo: **js-social-posts
Descrizione**
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
*Milestone 1* - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed attraverso javascript.
*Milestone 2* - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
Numero push minimo: 10/12
P.S. Occhio al nome della repo! Ricordatevi che deve essere js-social-posts!
***BONUS*
1. Formattare le date in formato italiano (gg/mm/aaaa)
2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
*Consigli del giorno:*
Ragioniamo come sempre a step.
Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
Buon lavoro!




<!----------------------------
    PSEUDOCODICE ESERCIZIO
----------------------------->

MILESTONE 1
1. Eliminare il codice del post di esempio dalla pagina.

2. Creare nuovi post dall'array `posts`:
    - Utilizzare un ciclo FOR per scorrere l'array `posts`.
    - Per ogni post, creare una nuova struttura HTML basata sul modello originale.

3. Aggiungere i nuovi post al contenitore principale:
    - Selezionare il contenitore principale con l'ID `container`.
    - Usare `appendChild` per aggiungere i nuovi post al contenitore.

MILESTONE 2
1. Recuperare gli elementi dalla pagina:
    - Selezionare tutti i bottoni "Mi Piace" con la classe `js-like-button` usando `querySelectorAll`.
    - Selezionare i contatori dei "Mi Piace" usando gli ID dinamici `like-counter-{postId}`.

2. Creare un array per i post a cui è stato messo "Mi Piace":
    - Dichiarare una variabile `likedPosts` come lista vuota.

3. Aggiungere un eventListener al click a ogni bottone "Mi Piace":
    - Scorrere tutti i bottoni `js-like-button` e aggiungere un ascoltatore per l'evento `click`.

4. Al click:
    - Cambiare il colore del testo del bottone a rosso:
        - Usare `classList.toggle` per aggiungere o rimuovere una classe che cambia il colore del bottone.
    - Incrementare il contatore dei "Mi Piace" di 1:
        - Selezionare il contatore relativo usando l'attributo `data-postid`.
        - Incrementare il valore del contatore e aggiornare il testo nella pagina.
    - Salvare l'ID del post nell'array `likedPosts` se non è già presente:
        - Controllare se l'ID del post è già presente in `likedPosts` prima di aggiungerlo.