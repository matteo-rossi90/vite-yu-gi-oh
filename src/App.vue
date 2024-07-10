<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

//importare axios
import axios from 'axios';

//importare lo store
import { store } from './store';


export default{
  name: 'App',
  components:{
    AppHeader,
    AppMain
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getCards(){
      let endPoint = store.apiURL
      if(store.selectOptions !== ''){
        endPoint += `&${store.apiNameOptions}=${store.selectOptions}`
      }
      axios.get(endPoint)
      .then(res => {
        console.log(res.data.data);
        this.store.cardList = res.data.data;
      })
      .catch(error => {
          console.error(error);
        });
    },
    getOptions(){
      axios.get(this.store.apiURLOptions)
      .then(response => {
        console.log(response.data);
        this.store.cardArchetype = response.data;
        console.log(this.store.cardArchetype)
      })
    }
  },
  created(){
    this.getCards();
    this.getOptions();
  },
   watch: {
    'store.selectOptions': function (newVal, oldVal) {
      this.getCards();
    },
  }
}
</script>

<template>
  <AppHeader/>
  <main>
    <AppMain/>
  </main>
</template>

<style lang="scss">
@use './style/general.scss';
@use './style/partials/mixins.scss';
@use './style/partials/variables.scss';
</style>
