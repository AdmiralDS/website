export const BrowserNameArray = [
  '(n/a)',
  'IE Mobile',
  'Internet Explorer',
  'Firefox for Android',
  'Firefox',
  'Firefox for iOS',
  'Safari',
  'WebView on Android',
  'Chrome for Android',
  'Chrome',
  'Android Browser',
  'Edge',
  'UC Browser for Android',
  'Samsung Internet',
  'Opera Mobile',
  'Opera',
  'Blackberry',
] as const;

export type BrowserNameType = (typeof BrowserNameArray)[number];

type Version = { major: number; minor?: number };

const MinimalVersion: Partial<Record<BrowserNameType, number | Version>> = {
  Chrome: 84,
  Edge: 84,
  Firefox: 63,
  Opera: 70,
  Safari: { major: 14, minor: 1 },
  'Chrome for Android': 84,
  'Firefox for Android': 63,
  'Opera Mobile': 60,
  'Samsung Internet': 14,
  'WebView on Android': 84,
};

export const checkBrowserVersion = (name: string, version: string) => {
  const minVersion = MinimalVersion[name];
  if (minVersion) {
    const array = version.split('.');
    const versionValue: Version = { major: +array[0], minor: +array[1] };

    return typeof minVersion === 'number'
      ? minVersion <= versionValue.major
      : minVersion.major <= versionValue.major && minVersion.minor <= versionValue.minor;
  } else {
    return true;
  }
};
