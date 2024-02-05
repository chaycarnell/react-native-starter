import { s, vs } from '@utils/scale';
import { StyleSheet } from 'react-native';

export const Wrapper = (color: string) =>
  StyleSheet.create({
    style: {
      height: vs(406),
      width: s(375),
      backgroundColor: color,
      opacity: 1,
      display: 'flex',
      justifyContent: 'center',
      alignSelf: 'center',
    },
  });

export const Label = (color: string) =>
  StyleSheet.create({
    style: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color,
    },
  });
