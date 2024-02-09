import { cleanup, fireEvent, render } from '@testing-library/react-native';
import { ScreenNames } from '@types';
import * as NavModule from '@utils/navigation';
import React from 'react';

import AuthScreen from './Secondary';

afterEach(cleanup);

describe('Secondary screen', () => {
  describe('given default props', () => {
    let navSpy;
    let renderedComponent;

    beforeEach(() => {
      navSpy = jest.spyOn(NavModule, 'navigate').mockImplementation(jest.fn);
      renderedComponent = render(<AuthScreen />);
    });

    afterAll(() => {
      navSpy.mockRestore();
    });

    it('should render correctly', () => {
      const { toJSON } = renderedComponent;
      expect(toJSON()).toMatchSnapshot();
    });

    it('should navigate to dashboard page when touchable highlight is selected', () => {
      const { getByTestId } = renderedComponent;
      fireEvent.press(getByTestId('SecondaryNavigationButton'));
      expect(NavModule.navigate).toHaveBeenCalledWith(
        ScreenNames.DASHBOARD,
        {},
      );
    });
  });
});
