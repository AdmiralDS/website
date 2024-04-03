import * as React from 'react';

import { Calendar } from '@admiral-ds/react-ui';

export const AdmiralCalendar = () => {
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  return (
    <>
      <Calendar
        range
        startDate={startDate}
        endDate={endDate}
        onChange={(value: any) => {
          setStartDate(value[0]);
          setEndDate(value[1]);
        }}
      />
    </>
  );
};
