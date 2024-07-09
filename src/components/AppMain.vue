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
    // height: 700px;

    #container-wrapper{
        padding: 20px;
    }

    #box-main{
        background-color: $background-container;
        height: 100%;
        padding: 20px;

        #title{
            background-color: $primary;
            color: $background-container;
            padding: 10px;
        }

        #box-cards{
            @include flexbox(start);
            flex-wrap: wrap;
        }
    }
}
</style>