<template>
    <CustomBanner>
        Mon slot customiser {{msg}}
    </CustomBanner>
    <CustomBanner></CustomBanner>

    <CardSlot>
        <template v-slot:title>
            <h2>Mango</h2>
        </template>

        <template v-slot:text>
            <p>
                Text of this slot
            </p>
        </template>
        <template v-slot:action>
            <button> Action. Click here</button>
        </template>
    </CardSlot>
</template>

<script>
    import CustomBanner from '../components/CustomBanner.vue';
    import CardSlot from '../components/CardSlot.vue';

    export default {
        name:'CustomBannerView',
        data(){
            return {
                msg:"Your message customized",
            }
        },
        components:{
            CustomBanner,
            CardSlot,
        }
    }
</script>