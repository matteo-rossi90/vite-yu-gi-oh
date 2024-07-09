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
      axios.get(this.store.apiURL)
      .then(res => {
        console.log(res.data);
        this.store.cardList = res.data.data;
      })
      .catch(error => {
          console.error(error);
        });
    }
  },
  created(){
  this.getCards();
  }
}
</script>

<template>
  <AppHeader/>
  <main>
    <AppMain :cards="store.cardList"/>
  </main>
</template>

<style lang="scss">
@use './style/general.scss';
@use './style/partials/mixins.scss';
@use './style/partials/variables.scss';
</style>
