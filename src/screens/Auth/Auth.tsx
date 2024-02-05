import { Example } from '@components';
import { StackNavigationProp } from '@react-navigation/stack';
import i18n from 'i18next';
import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { RootStackParamList } from 'utils/navigation';
import { AuthView } from './Auth.styles';

type AuthScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Auth'>;

interface Props {
  navigation: AuthScreenNavigationProp;
}

const Render = ({ navigation }: Props) => (
  <View style={AuthView.style}>
    <TouchableHighlight
      testID="AuthNavigation"
      onPress={() => navigation.navigate('Dashboard', {})}>
      <Example
        wrapperColor="#0f62fe"
        labelColor="#FFF"
        label={i18n.t('AUTH.DESC')}
      />
    </TouchableHighlight>
  </View>
);

export default Render;
