import React from 'react';
import { Text, View } from 'react-native';
import { Label, Wrapper } from './Example.styles';

interface Props {
  wrapperColor?: string;
  labelColor?: string;
  label?: string | null;
}

const Render = ({
  wrapperColor = '#0f62fe',
  labelColor = '#FFF',
  label = '',
}: Props) => (
  <View style={Wrapper(wrapperColor).style}>
    <Text style={Label(labelColor).style}>{label}</Text>
  </View>
);

export default Render;
