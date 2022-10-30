<template>
    <NavLink url='/link/bidon' text='Produit Articles'/>
    <div>
        {{ $route.params.name }}
        <!-- {{ nameItem }} -->
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
