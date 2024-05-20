import * as React from 'react';

import {
  NotificationItem,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
  TextButton,
} from '@admiral-ds/react-ui';

const title = 'Заголовок';
const body = 'Текст короткого оповещения';
const linkText = 'Link';

export const AdmiralNotifications = () => {
  const displayStatusIcon = true;
  const isClosable = true;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '5px',
        width: '384px',
      }}
    >
      <NotificationItem status="info" displayStatusIcon={displayStatusIcon} isClosable={isClosable}>
        <NotificationItemTitle>Admiral 2.1 UI Kit</NotificationItemTitle>
        <NotificationItemContent>
          Встречайте, новый Admiral 2.1! Мы обновили дизайн-систему для того, чтобы обеспечить единообразие и
          узнаваемость визуального стиля во всех продуктах и сервисах компании.
        </NotificationItemContent>
        <NotificationItemButtonPanel>
          <TextButton
            dimension="s"
            text="Storybook"
            onClick={() => window.open('https://admiralds.github.io/react-ui/', '_blank')}
          />
        </NotificationItemButtonPanel>
      </NotificationItem>
      <NotificationItem status="info" displayStatusIcon={displayStatusIcon} isClosable={isClosable}>
        <NotificationItemTitle>Admiral 2.0 UI Kit</NotificationItemTitle>
        <NotificationItemContent>
          Спасибо за использование дизайн-системы Admiral 2.0. Желаем вам успехов в дальнейшей работе и благодарим за
          доверие.
        </NotificationItemContent>
      </NotificationItem>
    </div>
  );
};
