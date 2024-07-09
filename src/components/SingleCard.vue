<script>

export default{
    name: 'SingleCard',
    props:['info']
}

</script>

<template>

    <!-- contenuto delle cards -->
    <img :src="info.card_images[0].image_url" :alt="info.name">
    <h4 class="name">{{ info.name }}</h4>
    <h4 class="archetype">{{ info.archetype }}</h4>
</template>

<style scoped lang="scss">

@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as*;

img{
    max-width: 100%;
}

h4{
    text-align: center;
    margin: 10px;

}

.name{
    color: $background-container;
}

</style>