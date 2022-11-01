<template>
    <div>
        <slot name='title'>Title of card</slot>
        <slot name='text'>Text for this card</slot>
        <slot name='action'>Action to do</slot>
    </div>
</template>

<script>
    export default {
        name:"CardSlot",
    }
</script>