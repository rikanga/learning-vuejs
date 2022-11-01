<template>
    <div>
        <CustomEvent @custom-event-name="setMessage" @new-component='renderVisibility' :visibility='visible' :title='title'></CustomEvent>
        <p>
            The message from the child component is: <br>
            <b>{{ message }}</b>
            <br/>
            Counter: {{ count }}
        </p>

        <p>{{ msg }}</p>
    </div>
</template>

<script>
import CustomEvent from "../components/CustomEvent.vue";

export default {
    name:'CustomEventView',
    data(){
        return {
            message:'',
            count:0,
            msg:'',
            title:"",
            visible:false,
        }
    },
    methods:{
        setMessage(payload){
            // Ecouteur d'événement (pour l'event 'custom-event-name')
            this.visible = false;
            this.count += 1;
            this.message = payload.message;
        },
        renderVisibility(payload){
            // Ecouteur d'événement (pour l'event 'new-component')
            this.visible = true;
            this.msg = payload.message;
            this.title = 'New component in action';
        }
    },
    components:{
        CustomEvent
    }
}
</script>


<style>
</style>