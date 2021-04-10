import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react-native';
import { NavigationContext } from '@react-navigation/native';
import DashboardScreen from './Dashboard';

afterEach(cleanup);

describe('Dashboard screen', () => {
  describe('given default props', () => {
    let renderedComponent;

    const testProps = {
      navigation: {
        navigate: jest.fn(),
      },
    };

    const navContext = {
      isFocused: () => true,
      addListener: jest.fn(() => jest.fn()),
    };

    beforeEach(() => {
      renderedComponent = render(
        <NavigationContext.Provider value={navContext}>
          <DashboardScreen navigation={testProps.navigation} />
        </NavigationContext.Provider>,
      );
    });

    it('should render correctly', () => {
      const { toJSON } = renderedComponent;
      expect(toJSON()).toMatchSnapshot();
    });

    it('should navigate to dashboard page when touchable highlight is selected', () => {
      const { getByTestId } = renderedComponent;
      fireEvent.press(getByTestId('DashboardNavigation'));

      expect(testProps.navigation.navigate).toHaveBeenCalled();
      expect(testProps.navigation.navigate).toHaveBeenCalledWith('Auth', {});
    });
  });
});
