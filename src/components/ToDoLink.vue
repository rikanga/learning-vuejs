<template>
    <div id='app'>
        <h1> ToDo </h1>

        <button @click='changeVisibility' v-if='!visible'>Add a task</button>
        <input type='text' v-if='visible' v-model='task' autofocus='true' @keyup.enter='addTask'/>
        <button v-if='visible' @click='addTask'>Add it</button>
        <div>
            <table>
            <!-- {{ tasks}} -->
                <tr v-for='item, i in tasks' :key='i'>
                    <td> {{ i + 1 }} </td>
                    <td> {{ item }} </td>
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
                task:''
            }
        },
        methods:{
            changeVisibility(){
                console.log('Change it ...');
                this.visible = !this.visible;
            },
            addTask(){
                if(this.task.length >= 1){
                    this.tasks.push(this.task);
                    this.task = '';
                }
            }
        }
    }
</script>

<style>
    td{
        border: 1px solid silver;
        padding:3px
    }
    
    table{
        border-collapse: collapse;
    }
    #app{
        text-align:center;
    }
</style>