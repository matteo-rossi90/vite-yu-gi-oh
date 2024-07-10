<script>

import { store } from '../store';


export default{
    name: 'Message',
    data(){
        return  { 
            store,
        }
    },
    computed: {
        resultNumber(){
            return store.cardList.length;
        }
    }
}

</script>

<template>

    <div id="title">Carte trovate: {{ resultNumber }}</div>

</template>

<style scoped lang="scss">
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as*;

#title{
    background-color: $primary;
    color: $background-container;
    padding: 10px;
    margin-bottom: 10px;
}

</style>