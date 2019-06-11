<template>
 <div class='content'>
    <section> </section>
 </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  computed: {
    ...mapState({
     
    })
  },
  methods: {
    ...mapActions({
   
    })
  },
  mounted() {

  },
}
</script>

<style scoped lang='scss'>
.content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    section{
        flex: 1;
        width: 100%;
    }
}
  
</style>
