<script>
import SingleCard from './SingleCard.vue';

//importare lo store
import { store } from '../store';

    export default{
        name: 'AppCards',
        components:{
            SingleCard,
        },
        data(){
            return{
                store
            }
        }
    }

</script>

<template>
    <div v-for="(cards, index ) in store.cardList" :key="index" class="cards">
        
        <SingleCard :info="cards"/>
        
    </div>

</template>

<style scoped lang="scss">
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as*;

.cards{
    flex-basis: calc(100% / 5 - 20px);
    height: 400px;
    background-color: $background-main;

}



</style>