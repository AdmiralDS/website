import * as React from 'react';

import { T } from '@admiral-ds/react-ui';
import type { ThemeTypographyType } from '@admiral-ds/react-ui';

export interface TProps {
  textType: 'Header' | 'Subtitle' | 'Body' | 'Caption';
  text: string;
}

function getTTypeName(textType: string): keyof ThemeTypographyType {
  switch (textType) {
    case 'Body':
      return 'Body/Body 2 Long';
    case 'Caption':
      return 'Caption/Caption 2';
    case 'Subtitle':
      return 'Subtitle/Subtitle 1';
    case 'Header':
    default:
      return 'Header/H1';
  }
}

export const AdmiralT = ({ textType, text }: TProps) => {
  return (
    <T font={getTTypeName(textType)} style={{ color: '#35383a' }} as="div">
      {text}
    </T>
  );
};
