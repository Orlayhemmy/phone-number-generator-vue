import { shallowMount } from '@vue/test-utils';
import Navbar from '@/components/Navbar.vue';

describe('Navbar.vue', () => {
  const wrapper = shallowMount(Navbar);

  it('should have a div named navbar with a length of 1', () => {

    expect(wrapper.find('.navbar').exists()).toBe(true);
  });

  it('should render navbar with 2 children layer', () => {
    expect(wrapper.find('.top-nav').exists()).toBe(true);
    expect(wrapper.find('.bottom-nav').exists()).toBe(true);
  });
});
