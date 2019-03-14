import { shallowMount } from '@vue/test-utils';
import DataTable from '@/components/DataTable.vue';

jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({ message: 'success' })),
}));

describe('DataTable.vue', () => {
  const wrapper = shallowMount(DataTable);

  it('should render a button', () => {
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button').text()).toBe('Generate');
  });

  it('should show a message when no numbers have been generated', () => {
    expect(wrapper.find('.no-data').text()).toBe('No numbers generated yet!');
  });

  it('should display a success message when request is successful', () => {
    expect(wrapper.find('.notify').exists()).toBe(false);
    wrapper.find('button').trigger('click');
    Promise.resolve(() => {
      expect(wrapper.find('.notify').exists()).toBe(true);
    })
  });
});
