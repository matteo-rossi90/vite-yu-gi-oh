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
            addSelect(e) {
                this.store.selectOptions = e.target.value;
            },
             resetSelect(){
                //svuotare il campo della ricerca
                store.selectOptions = "";

                //ripristinare la scritta di default
                this.$refs.selectRef.value = "";
            }
        }
}

</script>



<template>

    <!-- menu a tendina per la selezione --> 
    <form action="#">

        <select ref="selectRef" @change="addSelect">

            <option value="" disabled selected>Seleziona un archetipo</option>
            <option v-for="(item, index) in store.cardArchetype" :key="index" :value="item.archetype_name">
                {{ item.archetype_name }}
            </option>

        </select>
        
        <button @click.prevent="resetSelect">Reset</button>
    </form>


</template>

<style scoped lang="scss">
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as*;

form{
    padding: 10px 0;
    @include flexbox(start);
    gap: 5px;

    select{
        padding: 5px;
        width: 15%;
        border-radius: 5px;

    }

    button{
        background-color: darkcyan;
        color: $background-container;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
        border: 1px solid darkcyan;
    }

}




</style>

