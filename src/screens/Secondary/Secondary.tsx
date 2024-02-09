import { Example } from '@components';
import { ScreenNames } from '@types';
import { navigate } from '@utils/navigation';
import i18n from 'i18next';
import React from 'react';
import { TouchableHighlight, View } from 'react-native';

import { SecondaryViewStyles } from './Secondary.styles';

const Render = () => (
  <View style={SecondaryViewStyles}>
    <TouchableHighlight
      testID="SecondaryNavigationButton"
      onPress={() => navigate(ScreenNames.DASHBOARD, {})}>
      <Example
        wrapperColor="#0f62fe"
        labelColor="#FFF"
        label={i18n.t('Secondary.description')}
      />
    </TouchableHighlight>
  </View>
);

export default Render;
