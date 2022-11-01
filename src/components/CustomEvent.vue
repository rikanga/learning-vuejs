<template>
    <div class='customization'>
        <div v-if='!visibility'>
            <h1>Customize Event</h1>
            
        </div>
        <div v-if='visibility'>
            <h1>{{ title }}</h1>
        </div>

        <button @click='emitCustomevent'>Emit event</button>
        <button @click='changeComponent'>Change event</button>

        
    </div>
</template>

<script>   
    export default {
        name:'CustomEvent',
        props:{
            title:{
                type:String,
                default:''
            },
            visibility:{
                default:false,
            }
        },

        methods:{
            emitCustomevent(){
                // Création d'un événement
                this.$emit('custom-event-name', {message:"Mon événement personnalisé."})
            },
            changeComponent(){
                this.$emit('new-component', {message:"The component was changed"})
            }
        }
    }
</script>

<style>
    .customization{
        text-align:center;
    }

    button{
        padding:10px;
        margin:10px;
    }
</style>