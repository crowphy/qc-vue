<template>
  <div class="question-collection">
    <div class="header">问题收集</div>
    <div class="question">
      <span class="label"> 问题：</span>
      <textarea name="question-area" id="" cols="30" rows="10"></textarea>
    </div>
    <div class="answer">
      <span class="label"> 答案：</span>
      <textarea name="answer-area" id="" cols="30" rows="10"></textarea>
    </div>
    <div class="type">
    </div>
    <div class="submmit">
      <a class="btn">提交</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
