<script>
import AppCards from './AppCards.vue';
import AppFilter from './AppFilter.vue';
import AppLoader from './AppLoader.vue';
import Message from './Message.vue'

import { store } from '../store';


    export default{
        name: 'AppMain',
        components:{
            AppCards,
            AppFilter,
            AppLoader,
            Message
        },
        data(){
            return{
                store,
            }
        }
    }

</script>

<template>

    <section>

        <div v-if="!store.loading" id="container-wrapper" class="container">

            <AppFilter/>
        
            <!-- contenitore bianco -->
            <div id="box-main">

                <Message/>

                <div id="box-cards">
                    <AppCards/>
                </div>
            </div>

        </div>
        <AppLoader v-else label="Yu-Gi-Oh" :isVisible="store.loading"/>
    </section>

</template>

<style scoped lang="scss">
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as*;

section{
    background-color: $background-main;

    #container-wrapper{
        padding: 20px;
    }

    #box-main{
        background-color: $background-container;
        height: 100%;
        padding: 35px;

        #box-cards{
            @include flexbox(start);
            flex-wrap: wrap;
            gap: 25px;
        }
    }
}
</style>

