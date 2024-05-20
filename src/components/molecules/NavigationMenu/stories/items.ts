import type { NavigationItem } from '../types.ts';
import { joinAbsoluteUrlPath } from '@components/tools';

const BASE_URL = import.meta.env.BASE_URL;

export const navItems: Array<NavigationItem> = [
  {
    href: BASE_URL,
    anchor: 'ds-info',
    label: 'Дизайн-система',
    children: [
      {
        anchor: 'abilities',
        label: 'Возможности',
      },
      {
        anchor: 'team',
        label: 'Команда',
      },
      {
        anchor: 'products',
        label: 'Наши продукты',
      },
      {
        anchor: 'platforms',
        label: 'Платформы',
      },
    ],
  },
  {
    href: joinAbsoluteUrlPath(BASE_URL, 'users'),
    anchor: `users`,
    label: 'Пользователи',
    children: [
      {
        anchor: 'designers',
        label: 'Дизайнеры',
      },
      {
        anchor: 'developers',
        label: 'Разработчики',
      },
      {
        anchor: 'business',
        label: 'Бизнес',
      },
    ],
  },
  {
    href: joinAbsoluteUrlPath(BASE_URL, 'library'),
    anchor: `library`,
    label: 'Библиотека',
    children: [
      {
        anchor: 'fonts',
        label: 'Шрифт',
      },
      {
        anchor: 'palette',
        label: 'Палитра',
      },
      {
        anchor: 'icons',
        label: 'Иконки',
      },
      {
        anchor: 'accessibility',
        label: 'Доступность',
      },
      {
        anchor: 'customizing',
        label: 'Кастомизация',
      },
    ],
  },
];
