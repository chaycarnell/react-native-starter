import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react-native';
import AuthScreen from './Auth';

afterEach(cleanup);

describe('Auth screen', () => {
  describe('given default props', () => {
    let renderedComponent;

    const testProps = {
      navigation: {
        navigate: jest.fn(),
      },
    };

    beforeEach(() => {
      renderedComponent = render(
        <AuthScreen navigation={testProps.navigation} />,
      );
    });

    it('should render correctly', () => {
      const { toJSON } = renderedComponent;
      expect(toJSON()).toMatchSnapshot();
    });

    it('should navigate to dashboard page when touchable highlight is selected', () => {
      const { getByTestId } = renderedComponent;
      fireEvent.press(getByTestId('AuthNavigation'));

      expect(testProps.navigation.navigate).toHaveBeenCalled();
      expect(testProps.navigation.navigate).toHaveBeenCalledWith(
        'Dashboard',
        {},
      );
    });
  });
});
