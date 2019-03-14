import {
  shallowMount,
} from '@vue/test-utils';
import History from '@/components/History.vue';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({
    data: {
      data: {
        '2019-3-14': [{
          gen_time: '09:17:51',
          data: [
            '0100553939',
          ],
        }],
      },
    },
  })),
}));

describe('History.vue', () => {
  const wrapper = shallowMount(History);

  it('should render the data fetched correctly', () => {
    expect(wrapper.find('.day-list').text()).toBe('2019-3-14');
    expect(wrapper.find('.time-list').text()).toBe('09:17:51');
    expect(wrapper.find('.num').text()).toBe('0100553939');
  });
});
