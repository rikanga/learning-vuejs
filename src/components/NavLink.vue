<template>
    <a :href='url'>{{ text }}</a>
</template>

<script>
    export default{
        name:'NavLink',
        props:['url', 'text']
    }
</script>

<style>
a{
    text-align:center;
    text-decoration:none;
    margin:5px;
}
</style>