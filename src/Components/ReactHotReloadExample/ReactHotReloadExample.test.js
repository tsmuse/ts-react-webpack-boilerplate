import React from 'react';
import { shallow } from 'enzyme';
import ReactHotReloadExample from './ReactHotReloadExample';

test('component renders', ()=>{
  shallow(<ReactHotReloadExample />);
});