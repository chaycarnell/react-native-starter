import React from 'react';
import * as S from './Example.styles';

interface Props {
  wrapperColor?: string;
  labelColor?: string;
  label?: string;
}

const Render = ({
  wrapperColor = '#0f62fe',
  labelColor = '#FFF',
  label = '',
}: Props) => (
  <S.Wrapper color={wrapperColor}>
    <S.Label color={labelColor}>{label}</S.Label>
  </S.Wrapper>
);

export default Render;
