import React from 'react';
import { render } from '@testing-library/react-native';
import Example from './Example';

describe('Example component', () => {
  describe('given default props', () => {
    let renderedComponent;

    beforeEach(() => {
      renderedComponent = render(<Example />);
    });

    it('should render correctly', () => {
      const { toJSON } = renderedComponent;
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
