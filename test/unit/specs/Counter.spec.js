import Vue from 'vue';
import Counter from '@/components/Counter';

describe('Counter.vue', () => {
  const Constructor = Vue.extend(Counter);
  const vm = new Constructor().$mount();

  it('should render Counter title', () => {
    expect(vm.$el.querySelector('h1').textContent).toEqual('Counter');
  });

  it('should render Un as starting translatedNumber', () => {
    expect(vm.$el.querySelector('.translatedNumber').textContent).toEqual('Un');
  });

  it('should render 0 0 0 1 as starting counter', () => {
    expect(vm.$el.querySelector('.counter').textContent).toEqual('0 0 0 1 ');
  });
});
