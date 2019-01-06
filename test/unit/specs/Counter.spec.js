import Vue from 'vue';
import Counter from '@/components/Counter';

describe('Counter.vue', () => {
  let vm;

  beforeEach(() => {
    const Constructor = Vue.extend(Counter);
    vm = new Constructor().$mount();
  });

  // Rendering Tests
  it('should render Counter title', () => {
    expect(vm.$el.querySelector('h1').textContent).toEqual('Counter');
  });

  it('should render Un as starting translatedNumber', () => {
    expect(vm.$el.querySelector('.translatedNumber').textContent).toEqual('Un');
  });

  it('should render 0 0 0 1 as starting counter', () => {
    expect(vm.$el.querySelector('.counter').textContent).toEqual('0 0 0 1 ');
  });

  it('should match snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });

  // Variables Tests
  it('should have Un stored as numbertranslated', () => {
    expect(vm.$data.translatedNumber).toEqual('Un');
  });

  // -- Functions Tests
  // Increment Function
  it('should increment correctly', () => {
    vm.increment(0);
    expect(vm.$data.figures[0]).toEqual(1);
  });

  it('should translate after incrementing a figure twice', () => {
    vm.increment(0);
    vm.increment(0);
    expect(vm.$data.translatedNumber).toEqual('Deux mille un');
  });

  it('should translate after incrementing two figures', () => {
    vm.increment(3);
    vm.increment(0);
    expect(vm.$data.translatedNumber).toEqual('Mille deux');
  });

  // Decrement Function
  it('should decrement correctly', () => {
    vm.decrement(0);
    expect(vm.$data.figures[0]).toEqual(9);
  });

  it('should translate after decrementing a figure twice', () => {
    vm.decrement(0);
    vm.decrement(0);
    expect(vm.$data.translatedNumber).toEqual('Huit mille un');
  });

  it('should translate after decrementing two figures', () => {
    vm.decrement(3);
    vm.decrement(0);
    expect(vm.$data.translatedNumber).toEqual('Neuf mille');
  });
});
