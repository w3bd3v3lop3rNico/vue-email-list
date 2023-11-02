// const { createApp } = Vue

//   createApp({
//     data() {
//       return {
//         message: 'Hello Vue!'
//       }
//     }
//   }).mount('#app')


console.log('ciao2')
for(let i = 0; i < 10; i++) {
    axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
        console.log(res.data)
        // console.log(res)
        // console.log('ciao')
    
    })
}