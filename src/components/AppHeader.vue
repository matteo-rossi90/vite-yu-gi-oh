<script>

    export default{
        name: 'AppHeader',
    }

</script>

<template>
    <header>

        <!-- logo -->
        <div id="logo">
            <a href="#">
                <img src="../assets/logo.jpg" alt="logo Yu-gi-oh">
            </a>
        </div>

        <!-- titolo -->
        <h2>Yu-Gi-Oh API</h2>
    </header>
</template>

<style scoped lang="scss">
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as*;

header{
    background-color: $background-container;
    height: 60px;
    @include flexbox(start);
    gap: 20px;
    padding: 10px;
    font-size: 20px;
}

#logo{

    width: 60px;
    img{
        width: 100%;
    }
}

</style>