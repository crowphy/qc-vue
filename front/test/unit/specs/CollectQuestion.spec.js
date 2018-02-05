import Vue from 'vue'
import CollectQuestion from '@/components/CollectQuestion'

describe('CollectQuestion.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(CollectQuestion)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
