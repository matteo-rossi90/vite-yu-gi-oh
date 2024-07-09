<script>

    export default{
        name: 'AppCards',
    }

</script>

<template>

    <div class="cards">
        <h4>Series</h4>
        <h4>Type</h4>
    </div>

</template>

<style scoped lang="scss">
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as*;

.cards{
    flex-basis: calc(100% / 5 - 20px);
    height: 300px;
    background-color: $background-main;
    margin: 10px;
}



</style>