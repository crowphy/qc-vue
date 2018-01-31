<template>
  <div class="question-collection">
    <nav-bar/>
    <div class="main">
      <div class="text-area">
        <div class="question">
          <span class="label"> 问题</span>
          <textarea name="answer-area" v-model="question" placeholder="请输入问题" autofocus id="" cols="30" rows="10"></textarea>
        </div>
        <div class="answer">
          <span class="label"> 答案</span>
          <textarea name="answer-area" v-model="answer" placeholder="请输入答案" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
      <div class="type">
      </div>
      <div class="submmit">
        <a class="btn" @click="submit">提交</a>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './common/NavBar.vue'
export default {
  name: 'CollectQuestion',
  data () {
    return {
      question: '',
      answer: '',
      type: ''
    }
  },
  components: {
    NavBar
  },
  methods: {
    submit () {
      if (this.question) {
        console.log(this.question, this.answer)
      }
    }
  }
}
</script>
<style scoped>
.question-collection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.main {
  margin-top: 100px;
}
.question, .answer {
  box-shadow: 0 2px 5px rgba(0,0,0,.26);
  flex-grow: 1;
}
.answer {
  box-shadow: 0 2px 2px rgba(0,0,0,.26);
}
.label {
  display: inline-block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #039be5;
}
.text-area {
  display: flex;
  width: 80vw;
}
textarea {
  width: 100%;
  outline: none;
  border: none;
  resize: none;
  padding: 10px;
  font-size: 16px;
  line-height: 24px;
  box-sizing: border-box;
}
.btn {
  margin-top: 30px;
  display: inline-block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  background-color: #039be5;
  box-shadow: 0 2px 2px rgba(0,0,0,.26);
}
.btn:active {
  background-color: #0f8cca;
}
</style>
