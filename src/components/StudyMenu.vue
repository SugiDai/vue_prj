<template>
  <div class='study-menu' >
    <study-card></study-card>
  </div>
</template>


<script>
import StudyCard from './StudyCard.vue';

export default {
  name: 'studymenu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  components: { StudyCard },
    template: '<study-card></study-card>'
}
</script>


<style>
  .study-menu {
    margin: 5px;
    padding: 3px;
  }
</style>
