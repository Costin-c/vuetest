<template>
    <div>
        狗焱
        {{ msg }}
        <base-son></base-son>
    </div>
</template>



<script>
import baseSon from './son';

export default {
    components: {
        baseSon
    },
    data() {
        return {
            msg: 'xxx',
        }
    },
}
</script>


<style>
    div{
        width: 100px;
        height: 100px;
        background: red;
    }
</style>