import {
  shallowMount
} from '@vue/test-utils';
import App from '@/components/App.vue';

describe('App.vue', () => {
  const wrapper = shallowMount(App);

  it('should have the navbar present', () => {
    expect(wrapper.find('Navbar')).toBeTruthy();
  });

  it('should have the datatable component active by default', () => {
    expect(wrapper.find('DataTable')).toBeTruthy();
  });

  it('should have the history table component in-active by default', () => {
    expect(wrapper.find('History')).toBeFalsy();
  });
});
