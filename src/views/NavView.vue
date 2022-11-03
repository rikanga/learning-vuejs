<template>
    <NavLink url='/link/bidon' text='Produit Articles'/>
    <div>
        {{ $route.params.name }}
        <!-- {{ nameItem }} -->

        <!-- Utilisation des données de vuex: -->

        <p>
            Data from state manager of vuex: <br/>
            {{ $store.state.day }} / {{ $store.state.month }} / {{ $store.state.year }}
        </p>

        <!-- Accès simplifier au state du store avec mapStore -->
        <p>
            Data from mapState
            {{ day }} - {{ month }} - {{ year }}
        </p>
        <p>
            Custom datas: 
            {{ customDay }} - {{ uniqueMonth }} - {{ customYear }}
        </p>

        <p>
            Using getters
            {{ $store.getters.formatteDate }}
        </p>
        <button @click='increment_day'>Incrémenter</button>
        <button @click='decrement_day'>Décrémenter</button>

        <p>
            Count {{ count }}
            <button @click="increment_count"> Compter </button>
            <button @click="decrement_count"> Décomptage </button>
            <button @click="updateCount(-1)"> Update Count </button>
        </p>
    </div>
</template>


<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import NavLink from '../components/NavLink.vue';

import { mapState, mapActions } from 'vuex';

export default {
    name:'NavView',
    components:{
        NavLink
    },
    computed:{
        ...mapState(['day', 'month', 'year']),
        // Customiser les noms de donneés
        ...mapState({
            customDay:'day',
            uniqueMonth:'month',
            customYear:'year',
            count:'count'
        })
    },
    methods:{
        increment_day(){
            this.$store.commit('INCREMENT_DAY')
        },
        decrement_day(){
            this.$store.commit('DECREMENT_DAY');
        },
        increment_count(){
            this.$store.dispatch('updateCount', 1);
        },
        decrement_count(){
            this.$store.dispatch('updateCount', -1);
        },
        ...mapActions(['updateCount'])
    }
}
</script>
