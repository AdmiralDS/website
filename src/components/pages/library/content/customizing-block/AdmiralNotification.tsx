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
      }}
    >
      <NotificationItem status="info" displayStatusIcon={displayStatusIcon} isClosable={isClosable}>
        <NotificationItemTitle>{title}</NotificationItemTitle>
        <NotificationItemContent>{body}</NotificationItemContent>
        <NotificationItemButtonPanel>
          <TextButton dimension="s" text={linkText} />
        </NotificationItemButtonPanel>
      </NotificationItem>
      <NotificationItem status="warning" displayStatusIcon={displayStatusIcon} isClosable={isClosable}>
        <NotificationItemTitle>{title}</NotificationItemTitle>
        <NotificationItemContent>{body}</NotificationItemContent>
        <NotificationItemButtonPanel>
          <TextButton dimension="s" text={linkText} />
        </NotificationItemButtonPanel>
      </NotificationItem>
      <NotificationItem status="error" displayStatusIcon={displayStatusIcon} isClosable={isClosable}>
        <NotificationItemTitle>{title}</NotificationItemTitle>
        <NotificationItemContent>{body}</NotificationItemContent>
        <NotificationItemButtonPanel>
          <TextButton dimension="s" text={linkText} />
        </NotificationItemButtonPanel>
      </NotificationItem>
      <NotificationItem status="success" displayStatusIcon={displayStatusIcon} isClosable={isClosable}>
        <NotificationItemTitle>{title}</NotificationItemTitle>
        <NotificationItemContent>{body}</NotificationItemContent>
        <NotificationItemButtonPanel>
          <TextButton dimension="s" text={linkText} />
        </NotificationItemButtonPanel>
      </NotificationItem>
    </div>
  );
};
