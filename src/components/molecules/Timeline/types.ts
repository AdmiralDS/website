export interface EventPoint {
  text: string;
}

export interface YearPoint extends EventPoint {
  year: string;
  eventPoints?: Array<EventPoint>;
}

export type TimelineData = Array<YearPoint>;
