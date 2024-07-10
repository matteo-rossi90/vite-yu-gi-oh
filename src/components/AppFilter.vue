<script>

import { store } from '../store';

    export default{
        name: 'AppFilter',
        data(){
            return{
                store,
            }
        },
        methods: {
            updateSelectOptions(event) {
                this.store.selectOptions = event.target.value;
            },
        }
}

</script>



<template>

    <!-- menu a tendina per la selezione -->
    <select @change="updateSelectOptions">
        <option value="" disabled selected>Seleziona un archetipo</option>
        <option v-for="(item, index) in store.cardArchetype" :key="index" :value="item.archetype_name">
        {{ item.archetype_name }}
        </option>
    </select>


</template>

<style scoped lang="scss">
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as*;

select{
    padding: 5px;
    width: 15%;
    border-radius: 5px;
}


</style>

