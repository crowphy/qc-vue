<template>
  <div class="nav">
    <ul class="main">
      <router-link class="list item" :class="{active : current === 'ListView'}" to="/" tag="li">列  表</router-link>
      <router-link class="collect item" :class="{active : current === 'CollectQuestion'}" to="/collect" tag="li">问题收集</router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      current: 'ListView'
    }
  },
  mounted () {
    console.log(this.$route.name)
    this.current = this.$route.name
  }
}
</script>

<style scoped lang="scss">
.nav {
  height: 60px;
  line-height: 60px;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  position: fixed;
  background-color: $theme-bck-color;
  box-shadow: 0 2px 5px rgba(0,0,0,.26);
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  width: 80vw;
  height: 60px;
  display: flex;
  justify-content: flex-start;
}
.item {
  margin-right: 3vw;
  color: #fff;
}
.active {
  border-bottom: 4px solid #fff;
}
</style>
