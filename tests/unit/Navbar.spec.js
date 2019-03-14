import {
  shallow
} from '@vue/test-utils';
import Navbar from '@/components/Navbar.vue';

describe('Navbar.vue', () => {
  const wrapper = shallow(Navbar);

  it('should have a div named navbar with a length of 1', () => {
    expect(wrapper.find('.navbar').length).toBe(1);
  });

  it('should render navbar with 2 children layer', () => {
    expect(wrapper.find('.navbar').children).to.have.lengthOf(2);
    expect(wrapper.find('.top-nav').length).toBe(1);
    expect(wrapper.find('.bottom-nav').length).toBe(1);
  });

  it('renders 2 nav items ', () => {
    expect(wrapper.find('ul li').length).toBe(2);
  });
});
