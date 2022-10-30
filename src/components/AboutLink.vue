<template>
    <div id='app'>
        <h1>About {{ namebox }}</h1>
    </div>
</template>

<script>
    export default {
        name:'AboutLink',
        data(){
            return {
                namebox:'Baobab'
            }
        },
        // computed:{
        //     nameEnteprise(){
        //         return this.namebox;
        //     }
        // }
    }
</script>