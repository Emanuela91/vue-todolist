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
        methods:{
            // nuova voce nella lista, se più corta di 5 caratteri non viene aggiunta
            addTask(){
                if(this.newTask.length < 5 || this.newTask === ''){ 
                    // messagio di errore 
                    this.error = true;
                } else{
                    // con push aggiunge la nuova voce alla fine della lista
                    // this.tasks.push({text:this.newTask});
                    // con unshift le aggiunge in cima
                    this.tasks.unshift({text:this.newTask});
                    // messaggio di errore 
                    this.error = false;
                }


            }
        }
   
    }).mount('#myapp')