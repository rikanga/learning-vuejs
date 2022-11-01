<template>
    <div id='todo'>
        <h1> ToDo </h1>

        <button @click='changeVisibility' v-if='!visible'>Add a task</button>
        <input type='text' v-if='visible' v-model='task' autofocus='true' @keyup.enter='addTask'/>
        <button v-if='visible' @click='addTask'>Add it</button>

        <p v-if='update'>
            Update Task 
            <input type='text' v-model='updateValue' autofocus='true' v-if='update' @keyup.enter='updateTask'/>
            <button v-if='update' @click='updateTask'>Change</button>
        </p>
        <div class='tableau'>
            <table>
            <!-- {{ tasks}} -->
                <tr v-for='item, i in tasks' :key='i'>
                    <td> {{ i + 1 }} </td>
                    <td :class='tagTaskDid(i)' id='itemContent'> {{ item }} </td>
                    <td>
                        <button @click='askUpdate(i)' class='update' id='update'></button><label for='' class='label' @click='askUpdate(i)'>update</label>
                    </td>
                    <td>
                        <button @click='deleteTask(i)' class='delete' id='delete'></button> <label for='' class='label' @click='deleteTask(i)'>delete</label>
                    </td>
                    
                    <td>
                        <!-- <input type='checkbox' v-model='underlineTastDid' @click='taskDid(i)'/> Did -->
                        <input type='checkbox' @click='taskDid(i)' id='taskdid'/> <label for=''>Did</label>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>


<script>
    export default {
        name:'ToDoLink',
        data(){
            return {
                tasks: ['Go to church', 'Work About memory'],
                visible:false,
                update:false,
                task:'',
                updateValue:'',
                indexToUpdate:Number,
                classTaskDid:'',
                underlineTastDid:false,
                indexTaskDid:[],
            }
        },
        methods:{
            emitCustomEvent(){
                this.$emit('custom-event-name', {message:'Mon message personnalisé'})
            },
            changeVisibility(){
                console.log('Change it ...');
                this.visible = !this.visible;
                this.update = false;
            },
            addTask(){
                if(this.task.length >= 1){
                    this.tasks.push(this.task);
                    this.task = '';
                }
            },
            deleteTask(index){
                this.tasks.splice(index, 1);
                if(this.indexTaskDid.includes(index)){
                    this.indexTaskDid.splice(this.indexTaskDid.indexOf(index), 1);
                }
            },
            askUpdate(index){
                this.updateValue = this.tasks[index]
                this.update = true;
                this.indexToUpdate = index;
                this.visible = false;
            },
            updateTask(){
                this.tasks[this.indexToUpdate] = this.updateValue;
                this.update = false;
                // this.visible = true;
            },
            taskDid(index){
                // this.underlineTastDid = !this.underlineTastDid;
                // if (this.underlineTastDid && index === this.tasks.indexOf(this.tasks[index])){
                //     this.classTaskDid = 'task-did';
                //     return this.classTaskDid;
                // }
                // return '';
                console.log(index);
                if(this.indexTaskDid.includes(index)){
                    this.indexTaskDid.splice(this.indexTaskDid.indexOf(index), 1);
                }else{
                    this.indexTaskDid.push(index);
                }
                console.log(this.indexTaskDid);
            },
            tagTaskDid(index){
                if(this.indexTaskDid.includes(index)){
                    return 'task-did';
                }
                return '';
            }
            
        },
        computed:{
            underlineTast(){
                // this.underlineTastDid = !this.underlineTastDid;
                if(this.underlineTastDid){
                    return 'task-did'
                }
                return ''
            },
            
        },
        beforeCreated(){
            console.log('Je ne suis pas encore monté ...');
        },
        created(){
            console.log("Je suis créé ...");
        },
        beforeMounted(){
            console.log("Je ne suis pas encore monté ..");
        },
        mounted(){
            console.log("Je suis monté ...");
        },
        // beforeDestroy(){
            beforeUnmounted(){
            console.log("Je ne suis pas encore détruit ...");
        },
        destroy(){
            console.log("Je suis rétiré de la liste ...");
        }
    }
</script>

<style scoped>
    td{
        border: 1px solid silver;
        padding:10px;
        text-align:center;
    }
    
    table{
        border-collapse: collapse;
        padding:0px;
        width:80%;
        margin:auto;
        margin-top:10px;
    }
    tr{
        border:1px solid silver;
    }
    tr:hover{
        background-color:rgba(0, 0, 0, 0.1);
    }
    #todo{
        text-align:center;
        width:80%;
        margin:auto;
    }
    input, button{
        padding:10px;
    }
    .task-did{
        text-decoration:line-through;
    }
    .tableau{
        text-align:center;
    }
    .delete, .update{
        background-color:inherit;
        border:0px none none;
        cursor:pointer;
    }
    .delete{
        background-image:url('../assets/icons/trash.svg');
        background-repeat:no-repeat;
        object-fit:cover;
        border:0px white none;
    }
    .update{
        background-image:url('../assets/icons/pen.svg');
        background-repeat:no-repeat;
        object-fit:cover;
        border:0px white none;
    }
    .did{
        text-align:center;
        padding:10px;
    }
    .label{
        padding-top:10px;
        cursor:pointer; 
    }
    #itemContent{
        width:70%;
        text-align:justify;
    }
</style>