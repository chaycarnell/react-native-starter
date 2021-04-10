import React from 'react';
import env from 'react-native-config';
import { View, TouchableHighlight, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Example } from '@components';
import { RootStackParamList, StackNavigationProp } from 'utils/navigation';

type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

interface Props {
  navigation: DashboardScreenNavigationProp;
}

const Render = ({ navigation }: Props) => {
  useFocusEffect(() => {
    console.log('Doing something on screen focus!');
  });
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableHighlight
        testID="DashboardNavigation"
        onPress={() => navigation.navigate('Auth', {})}>
        <Example
          wrapperColor="#007d79"
          labelColor="#FFF"
          label="Tap to navigate"
        />
      </TouchableHighlight>
      <Text style={{ position: 'absolute', bottom: 0 }}>
        Built for {env.APP_ENV}
      </Text>
    </View>
  );
};

export default Render;
