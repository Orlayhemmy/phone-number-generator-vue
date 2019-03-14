import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import DataTable from '@/components/DataTable.vue';
import Navbar from '@/components/Navbar.vue';
import History from '@/components/History.vue';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({
    message: 'an error occured',
  })),
}));

describe('App.vue', () => {
  const wrapper = mount(App);

  it('should have the navbar present', () => {
    expect(wrapper.find(Navbar).exists()).toBe(true);
  });

  it('should have the datatable component active by default', () => {
    expect(wrapper.find(DataTable).exists()).toBe(true);
  });

  it('should have the history table component in-active by default', () => {
    expect(wrapper.find(History).exists()).toBe(false);
  });

  it('should have make history nav item active', () => {
    const menuItem = wrapper.findAll('.nav-items li').at(1);
    expect(menuItem.classes('is-active')).toBe(false);
    wrapper.findAll('.nav-items li').at(1).trigger('click');
    expect(menuItem.classes('is-active')).toBe(true);
  });
});
