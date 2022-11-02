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
    </div>
</template>


<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import NavLink from '../components/NavLink.vue';

export default {
    name:'NavView',
    components:{
        NavLink
    }
}
</script>
