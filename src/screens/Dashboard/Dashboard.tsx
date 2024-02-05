import { Example } from '@components';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { logger } from '@utils/logger';
import { RootStackParamList } from '@utils/navigation';
import i18n from 'i18next';
import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { DashboardView } from './Dashboard.styles';

type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

interface Props {
  navigation: DashboardScreenNavigationProp;
}

const Render = ({ navigation }: Props) => {
  useFocusEffect(() => {
    logger.info('Logging on screen focus!');
  });

  return (
    <View style={DashboardView.style}>
      <TouchableHighlight
        testID="DashboardNavigation"
        onPress={() => navigation.navigate('Auth', {})}>
        <Example
          wrapperColor="#007d79"
          labelColor="#FFF"
          label={i18n.t('DASHBOARD.DESC')}
        />
      </TouchableHighlight>
    </View>
  );
};

export default Render;
