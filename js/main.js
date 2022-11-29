// Aggiungere i tasks da fare
// Creare il bottone aggiungi task
// Aggiungere gli errori: stringa vuota e minimo di caratteri
// Evento da tastiera "Enter"
// Cancellare automaticamente il Task aggiunto dalla lable
// Eliminare i Tasks fatti 
// Se non ci sono Tasks: "messaggio"

// BONUS possibili (qualche idea ma sperimentate che volete):
// curare l’interfaccia e renderla più carina e/o funzionale;
// gestire anche lo stato “done” del task;
// far succedere qualcosa al completamento del caricamento dell’applicazione;
// etc..




const {createApp} = Vue;

    createApp({
        data() {
            return {
                imageLogo: './img/To-Do.jpg' ,
                newTask: '',
                activeItem: 0,
                tasks: [
                    { 
                        text: 'Fare i compiti', 
                        done: false
                    }, 
                    { 
                        text: 'Fare la spesa', 
                        done: true 
                    }, 
                    { 
                        text: 'Fare il bucato', 
                        done: false 
                    }
                ]
            }
        },
   
    }).mount('#myapp')