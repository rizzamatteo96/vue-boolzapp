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
                        status: 'sent'
                    },
                    {
                        date: '10/01/2021 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2021 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Daniele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '20/03/2021 16:30:00',
                        text: 'Lo zioooooooooooooooo',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2021 16:30:55',
                        text: 'Lo ziooooooooooooooooooooo',
                        status: 'received'
                    },
                    {
                        date: '20/03/2021 16:35:00',
                        text: 'Ciaooooooooooooo',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Gino',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '20/03/2021 16:30:00',
                        text: 'Ciao Gino, come va la vita?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2021 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2021 16:35:00',
                        text: 'Si può fare',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Francesco',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '20/03/2021 16:30:00',
                        text: 'Lo ziooooooooooooooooooo ',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2021 16:30:55',
                        text: 'Guarda qua lo ziooooooooooooooo',
                        status: 'received'
                    },
                    {
                        date: '20/03/2021 16:35:00',
                        text: 'Vado nell\'altra chat',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Valentina',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '20/03/2021 16:30:00',
                        text: 'Ehy! Pizzata stasera?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2021 16:30:55',
                        text: 'Beh',
                        status: 'received'
                    },
                    {
                        date: '20/03/2021 16:38:00',
                        text: '👍',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2021 16:40:00',
                        text: 'A che ora?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2021 16:40:30',
                        text: 'Vedi te, per me è uguale',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Roberto',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '20/03/2021 16:30:00',
                        text: 'Stasera cena liquida?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2021 16:30:55',
                        text: 'Sempre sta fatta',
                        status: 'received'
                    },
                    {
                        date: '20/03/2021 16:35:00',
                        text: '🎉',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Flavio',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '20/03/2021 16:30:00',
                        text: 'Allora come va la vita?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2021 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2021 16:35:00',
                        text: 'Mi piacerebbe.😊',
                        status: 'sent'
                    }
                ],
            },
        ],
        selUser : 0,
        userFilter : ''
    },
    methods: {
        selectUser : function(index) {
            this.selUser = index;
            // console.log(this.selUser);
        },

        filterUser : function(){
            // console.log('funzia?');
            this.contacts.forEach(element => {
                const userListSrc = element.name.toLowerCase();
                const filter = this.userFilter.toLowerCase();
                const found = userListSrc.indexOf(filter);
                element.visible = (found == -1) ? false : true;
            });
        },

        insertMsg : function() {
            let msg = document.getElementById('msgText').value;
            let arrayMsg = this.contacts[this.selUser].messages;

            console.log(msg);
            if (msg != '') {
                let now = dayjs();
                console.log(now.format('DD/MM/YYYY'));
                console.log(now.format('HH:mm:ss'));
                arrayMsg.push({
                    date: now.format('DD/MM/YYYY') + ' ' + now.format('HH:mm:ss'),
                    text: msg,
                    status: 'sent'
                });
                msg = '';
                document.getElementById('msgText').value = msg;

                setTimeout(function(){ 
                    now = dayjs();
                    arrayMsg.push({
                        date: now.format('DD/MM/YYYY') + ' ' + now.format('HH:mm:ss'),
                        text: 'ok',
                        status: 'received'
                    });
                }, 1000);
            }
        }
    }
});