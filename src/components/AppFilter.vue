<script>

import { store } from '../store';

    export default{
        name: 'AppFilter',
        data(){
            return{
                store,
            }
    }
}

</script>



<template>

    <!-- menu a tendina per la selezione -->
        
    <option value="#" v-for="(items, index) in store.cardArchetype" :key="index">
        {{ items.archetype_name }}
    </option>
        
        


</template>

<style scoped lang="scss">
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as*;


</style>

