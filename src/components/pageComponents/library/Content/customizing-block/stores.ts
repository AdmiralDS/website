import type { ItemColor } from '@components/pageComponents/library/Content/customizing-block/color-picker';
import { writable } from 'svelte/store';

export const activeColor = writable<ItemColor>('blue');
export const colorPickerValueHex = writable('#ff00bb');
export const colorPickerValueHsv = writable({ h: 316, s: 100, v: 100, a: 1 });
