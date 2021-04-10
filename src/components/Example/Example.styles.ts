import styled from 'styled-components/native';
import { s, vs } from '@utils/scale';

interface Props {
  color?: string;
}

export const Wrapper = styled.View<Props>`
  height: ${vs(406)}px;
  width: ${s(375)}px;
  background-color: ${({ color }) => color};
  opacity: 1;
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const Label = styled.Text<Props>`
  font-size: ${s(24)}px;
  font-weight: bold;
  text-align: center;
  color: ${({ color }) => color};
`;
