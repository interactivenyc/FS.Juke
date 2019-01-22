import Album from '../client/Album';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';

import Adapter from 'enzyme-adapter-react-16.2';

Enzyme.configure({ adapter: new Adapter() });

const expect = require('chai').expect

describe('React components', () => {
  describe('<Album />', () => {
    it('renders a <p /> with the name from props', () => {
      const albumName = "something by dexter britain"
      const wrapper = shallow(
        <Album
          album={{artist:{}, name: albumName}}
          artist={{}}
          pickAlbum={() => null}
        />
      ) // React.createElement
      expect(wrapper.find('p').length).to.equal(1);
      expect(wrapper.text()).to.equal(albumName);
    })
  })
})
