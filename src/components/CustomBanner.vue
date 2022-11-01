<template>
    <div>
        <slot>default Values</slot>
    </div>
    <div class='card'>
        <slot name='title'> Title of card</slot>
        <slot nmae='text'> Text of card</slot>
        <slot name='action'> Action of card</slot>
    </div>
</template>

<script>
    export default {
        name:'CustomBanner',
    }
</script>

<style>
</style>