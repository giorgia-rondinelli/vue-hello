const{createApp}=Vue 
createApp({
  data(){
    return{
      messaggio:'ciao!',
      countdown: 10,
      stop: 'fine',
      myClass:'red',
      isRed:true,
      nome: 'ludovico',
      nuovoSaluto:''

    }
  },
  methods:{
    startCountdown(){
      setInterval(() =>
       {  
        if(this.countdown<=0){
          this.countdown= 0
        }
        
        else{
          this.countdown--
        }
       
      },1000)}

   
  , 
    resetCountdown(){
      this.countdown=10

    },
    saluto(){
      this.nuovoSaluto=`ciao ${this.nome}!`

    }
},
mounted(){
  
  
}
}).mount('#app')