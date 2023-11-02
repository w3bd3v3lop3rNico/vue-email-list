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
      fetchMail() {
        for(let i = 0; i < 10; i++) {
          axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                const mail = res.data.response;
                this.mail = mail;
                console.log(this.mail);
                setTimeout(() => {
                  this.mailList.push(mail)
                }, 3000);
          })
        }
        console.log(this.mailList)
      },
    },
    created() {
      this.fetchMail()
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