<script>
    export default{
        name: 'AppLoader',
        props: ['label'],
        isVisible: {
            type: Boolean,
            default: false
        }
    }
</script>

<template>

    <div class="loader">

        <div class="text">{{ label }}</div>
        
            <img src="../assets/spinner.svg" alt="">
        
        <div class="text">Loading...</div>
    </div>
    
</template>

<style scoped lang="scss">
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;
@use '../style/partials/variables' as*;

.loader{
    position: fixed;
    top:0;
    left:0;
    @include flexbox(horizontal);
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255, 0.6);
}

img{
    width: 100px;
    margin: 1rem 0;
    animation: spin 2s infinite linear;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.text{
    text-transform: uppercase;
    letter-spacing: 2px;
}

</style>