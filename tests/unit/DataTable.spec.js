import {
  shallowMount
} from '@vue/test-utils';
import DataTable from '@/components/DataTable.vue';

describe('DataTable.vue', () => {
  const wrapper = shallowMount(DataTable);

  it('should render a button', () => {
    expect(wrapper.find('.btn-generate').length).toBe(1);
  });

  it('should show a message when no numbers have been generated', () => {
    expect(wrapper.find('.no-data')).toContain('No numbers generated yet!');
  });

  it('should have a div for generated numbers with 0 children', () => {
    expect(wrapper.find('.generated-numbers').children).toHaveLength(0);
  });
});
