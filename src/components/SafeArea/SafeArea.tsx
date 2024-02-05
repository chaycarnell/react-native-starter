import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaStyles } from './SafeArea.styles';

const Render = ({ children }: PropsWithChildren) => (
  <SafeAreaView style={SafeAreaStyles.style}>{children}</SafeAreaView>
);

export default Render;
