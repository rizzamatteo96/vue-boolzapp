const app = new Vue({
    el : '#app',
    data : {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2021 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        readed: true
                    },
                    {
                        date: '10/01/2021 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        readed: true
                    },
                    {
                        date: '10/01/2021 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
                lastSeen: '',
                lastMsg: '',
                isWriting: false
            },
            {
                name: 'Giulia',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        readed: true
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        readed: true
                    }
                ],
                lastSeen: '',
                lastMsg: '',
                isWriting: false
            },
            {
                name: 'Daniele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '20/03/2021 16:30:00',
                        text: 'Lo zioooooooooooooooo',
                        status: 'sent',
                        readed: true
                    },
                    {
                        date: '20/03/2021 16:30:55',
                        text: 'Lo ziooooooooooooooooooooo',
                        status: 'received'
                    },
                    {
                        date: '20/03/2021 16:35:00',
                        text: 'Ciaooooooooooooo',
                        status: 'sent',
                        readed: true
                    }
                ],
                lastSeen: '',
                lastMsg: '',
                isWriting: false
            },
            {
                name: 'Stefano',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '20/03/2021 16:30:00',
                        text: 'Ciao Gino, come va la vita?',
                        status: 'sent',
                        readed: true
                    },
                    {
                        date: '20/03/2021 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2021 16:35:00',
                        text: 'Si può fare',
                        status: 'sent',
                        readed: true
                    }
                ],
                lastSeen: '',
                lastMsg: '',
                isWriting: false
            },
            {
                name: 'Francesco',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '20/03/2021 16:30:00',
                        text: 'Lo ziooooooooooooooooooo ',
                        status: 'sent',
                        readed: true
                    },
                    {
                        date: '20/03/2021 16:30:55',
                        text: 'Guarda qua lo ziooooooooooooooo',
                        status: 'received'
                    },
                    {
                        date: '20/03/2021 16:35:00',
                        text: 'Vado nell\'altra chat',
                        status: 'sent',
                        readed: true
                    }
                ],
                lastSeen: '',
                lastMsg: '',
                isWriting: false
            },
            {
                name: 'Valentina',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '20/03/2021 16:30:00',
                        text: 'Ehy! Pizzata stasera?',
                        status: 'sent',
                        readed: true
                    },
                    {
                        date: '20/03/2021 16:30:55',
                        text: 'Beh',
                        status: 'received'
                    },
                    {
                        date: '20/03/2021 16:38:00',
                        text: '👍',
                        status: 'sent',
                        readed: true
                    },
                    {
                        date: '20/03/2021 16:40:00',
                        text: 'A che ora?',
                        status: 'sent',
                        readed: true
                    },
                    {
                        date: '20/03/2021 16:40:30',
                        text: 'Vedi te, per me è uguale',
                        status: 'received'
                    }
                ],
                lastSeen: '',
                lastMsg: '',
                isWriting: false
            },
            {
                name: 'Roberto',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '20/03/2021 16:30:00',
                        text: 'Stasera cena liquida?',
                        status: 'sent',
                        readed: true
                    },
                    {
                        date: '20/03/2021 16:30:55',
                        text: 'Sempre sta fatta',
                        status: 'received'
                    },
                    {
                        date: '20/03/2021 16:35:00',
                        text: '🎉',
                        status: 'sent',
                        readed: true
                    }
                ],
                lastSeen: '',
                lastMsg: '',
                isWriting: false
            },
            {
                name: 'Flavio',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '20/03/2021 16:30:00',
                        text: 'Allora come va la vita?',
                        status: 'sent',
                        readed: true
                    },
                    {
                        date: '20/03/2021 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2021 16:35:00',
                        text: 'Mi piacerebbe.😊',
                        status: 'sent',
                        readed: true
                    }
                ],
                lastSeen: '',
                lastMsg: '',
                isWriting: false
            }
        ],
        // Varibile per tracciare il numero dell'utente selezionato
        selUser : 0,
        // filtro per lista utenti
        userFilter : '',
        // testo del messaggio
        userMessage : '',
        // risposte casuali da utente fake
        fakeUserMsg : [
            'Heyyyyyyy',
            'Si può fare',
            'Bella sta cosa',
            'Ok👍',
            'Ottima idea'
        ]
    },
    methods: {
        // funzione che mi seleziona l'utente quando ci vado a cliccare con il mouse
        selectUser : function(index) {
            this.selUser = index;
            // console.log(this.selUser);
        },

        // funzione che filtra la lista di utenti quando vado a scrivere nell'input
        filterUser : function(){
            // console.log('funzia?');
            this.contacts.forEach(element => {
                const userListSrc = element.name.toLowerCase();
                const filter = this.userFilter.toLowerCase();
                const found = userListSrc.indexOf(filter);
                element.visible = (found == -1) ? false : true;
            });
        },

        // funzione che mi restituisce la data e l'ora attuale
        actualDT : function(){
            let now = dayjs();
            return now.format('DD/MM/YYYY') + ' ' + now.format('HH:mm:ss')
        },

        // funzione che estrae un numero random
        randomNum : function(min,max){
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        },

        // funzione che mi inserisce il messaggio scritto SOLO SE c'è del testo all'interno dell'input
        // dopo aver inviato il messaggio, questa funzione si occupa di salvarlo all'interno dell'array e restituire una risposta dopo 1 secondo
        insertMsg : function() {
            let msg = this.userMessage;
            let arrayMsg = this.contacts[this.selUser].messages;

            if (msg != '') {
                arrayMsg.push({
                    date: this.actualDT(),
                    text: msg,
                    status: 'sent',
                    readed: false
                });

                app.userMessage = '';
                
                //! EASTER EGG
                setTimeout(function(){
                    // dopo un secondo l'utente fake legge il messaggio e inizia a scrivere
                    arrayMsg[arrayMsg.length - 1].readed = true;
                    app.contacts[app.selUser].isWriting = true;

                    setTimeout(function(){
                        if(msg == '/lozio'){
                            arrayMsg.push({
                                date: app.actualDT(),
                                text: 'LO ZIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO',
                                status: 'received'
                            });
                            app.contacts[app.selUser].isWriting = false;
                            app.updateLastSeen();
                        } else {
                            arrayMsg.push({
                                date: app.actualDT(),
                                text: app.fakeUserMsg[app.randomNum(0,app.fakeUserMsg.length-1)],
                                status: 'received'
                            });
                            
                            app.contacts[app.selUser].isWriting = false;
                            app.updateLastSeen();
                        }
                        msg = '';
                    },2000);
                }, 1000);               
            }

            this.updateLastSeen();
        },

        // funzione che fa apparire il dropdown menu del singolo messaggio
        msgMenu : function(index) {
            // console.log('funzia?');
            const elemento = document.getElementById('dropDown' + index).classList;
            
            if(elemento.value.includes('d-none')){
                elemento.remove('d-none');
                elemento.add('d-block');
            } else {
                elemento.remove('d-block');
                elemento.add('d-none');
            }

        },

        // funzione che cancella il messaggio dopo la conferma dell'utente
        deleteMsg : function(index) {
            const test = this.contacts[this.selUser].messages;
            setTimeout(function(){
                const userConf = confirm('SEI SICURO DI VOLER CANCELLARE IL MESSAGGIO?')
                if(userConf){
                    // console.log(index);
                    test.splice(index,1);
                }
            }, 10);

            this.updateLastSeen();
        },

        // funzione che aggiorna la variabile last seen e last message di tutti gli oggetti
        updateLastSeen : function(){
            this.contacts.forEach(item => {
                let indiceMsg = 0;
                // controllo qual'è l'ultimo messaggio RICEVUTO
                item.messages.forEach((item,index) => {
                    if(item.status == 'received'){
                        indiceMsg = index;
                    }
                });

                const lastSeen = item.messages[indiceMsg].date;
                item.lastSeen = lastSeen.substr(11, 5);

                const lastMsg = item.messages[indiceMsg].text;
                item.lastMsg = lastMsg;

            });
        }
    },
    created: function() {
        this.updateLastSeen();
    }
});