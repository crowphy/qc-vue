<template>
  <div class="question-collection">
    <nav-bar/>
    <div class="main">
      hello
    </div>
  </div>
</template>

<script>
import NavBar from './common/NavBar.vue'
export default {
  name: 'ListView',
  data () {
    return {
    }
  },
  components: {
    NavBar
  }
}
</script>
<style scoped>
.main {
  margin-top: 60px;
}
</style>
