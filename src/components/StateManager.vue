<template>
    <div class='state'>
        <input type='checkbox' v-model='isPushased'/>
        <label>{{ item }}</label>
    </div>
</template>

<script>
    export default {
        name:'StateManager',
        props:{
            item:String,
        },
        data(){
            return {
                isPushased:false,
            }
        }
    }
</script>

<style lang='scss'>
    .state{
        text-align:center;
    }
</style>