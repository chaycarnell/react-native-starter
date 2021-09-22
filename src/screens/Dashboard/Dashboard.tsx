import React from 'react';
import i18n from 'i18next';
import env from 'react-native-config';
import { View, TouchableHighlight, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Example } from '@components';
import { RootStackParamList } from '@utils/navigation';

type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

interface Props {
  navigation: DashboardScreenNavigationProp;
}

const Render = ({ navigation }: Props) => {
  useFocusEffect(() => {
    console.log('Logging on screen focus!');
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableHighlight
        testID="DashboardNavigation"
        onPress={() => navigation.navigate('Auth', {})}
      >
        <Example
          wrapperColor="#007d79"
          labelColor="#FFF"
          label={i18n.t('DASHBOARD.DESC')}
        />
      </TouchableHighlight>
      <Text style={{ position: 'absolute', bottom: 0 }}>
        Built for {env.APP_ENV}
      </Text>
    </View>
  );
};

export default Render;
