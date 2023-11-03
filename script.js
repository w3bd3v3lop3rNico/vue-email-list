const { createApp } = Vue

  createApp({
    data() {
      return {
        mailList: [],
        message: 'hello',
        mail: ''


      }
    },
    methods: {
      fetchMails(number) {
        for(let i = 0; i < number; i++) {
          axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                const mail = res.data.response;
                this.mail = mail;
                console.log(this.mail);
                setTimeout(() => {
                  this.mailList.push(mail)
                }, 5000);
          })
        }
        console.log(this.mailList)
      },
    },
    created() {
      this.fetchMails(10)
    },

  }).mount('#app')


// console.log('ciao2')
// for(let i = 0; i < 10; i++) {
//     axios
//         .get('https://flynn.boolean.careers/exercises/api/random/mail')
//         .then((res) => {
//         console.log(res.data.response)
//         // console.log(res)
//         // console.log('ciao')
    
//     })
// }