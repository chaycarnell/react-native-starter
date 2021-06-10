import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Example } from '@components';
import { RootStackParamList } from 'utils/navigation';

type AuthScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Auth'>;

interface Props {
  navigation: AuthScreenNavigationProp;
}

const Render = ({ navigation }: Props) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TouchableHighlight
      testID="AuthNavigation"
      onPress={() => navigation.navigate('Dashboard', {})}>
      <Example
        wrapperColor="#0f62fe"
        labelColor="#FFF"
        label="Tap to navigate"
      />
    </TouchableHighlight>
  </View>
);

export default Render;
