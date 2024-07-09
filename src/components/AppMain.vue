<script>
import AppCards from './AppCards.vue';

    export default{
        name: 'AppMain',
        components:{
            AppCards
        }
    }

</script>

<template>

    <section>
        <div id="container-wrapper" class="container">

            <!-- menu a tendina per la selezione -->
            <form action="#">

                <select name="Select">
                    <option value="#">Nessun tipo</option>
                    <option value="Alien">Alien</option>
                    <option value="inferboble_arm">Infernoble Arm</option>
                    <option value="noble_knight">Noble Knight</option>
                    <option value="melodius">Melodius</option>
                    <option value="archfiend">Archfiend</option>
                </select>
                
            </form>

            <!-- contenitore bianco -->
            <div id="box-main">
                <div id="title">Found 20 cards</div>

                <div id="box-cards">
                    <AppCards/>
                </div>
            </div>
        </div>
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

        form{
            padding: 10px 0;

            select{
                padding: 5px;
                width: 15%;
                border-radius: 5px;
            }
        }
    }

    #box-main{
        background-color: $background-container;
        height: 100%;
        padding: 35px;

        #title{
            background-color: $primary;
            color: $background-container;
            padding: 10px;
            margin-bottom: 10px;
        }

        #box-cards{
            @include flexbox(start);
            flex-wrap: wrap;
            gap: 25px;
        }
    }
}
</style>