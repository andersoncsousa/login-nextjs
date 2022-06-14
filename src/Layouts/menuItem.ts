import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  {
    title: 'LONAS',
    icon: { name: 'grid' },
    link: { href: '/lonas' },
  },
  {
    title: 'MODELOS',
    icon: { name: 'folder' },
    children: [
      {
        title: 'OPÇÃO 1',
        link: { href: '#' },
      },
      {
        title: 'OPÇÃO 2',
        link: { href: '#' },
      },
      {
        title: 'OPÇÃO 3',
        link: { href: '#' },
      },
    ],
  },
  {
    title: 'COFRE',
    icon: { name: 'lock' },
    link: { href: '/cofre' },
  },
  {
    title: 'FORNECEDORES',
    icon: { name: 'home' },
    children: [
      {
        title: 'OPÇÃO 1',
        link: { href: '#' },
      },
      {
        title: 'OPÇÃO 2',
        link: { href: '#' },
      },
      {
        title: 'OPÇÃO 3',
        link: { href: '#' },
      },
    ],
  },
  {
    title: 'ACADEMIA',
    icon: { name: 'award' },
    link: { href: '#' },
  },
  {
    title: 'DEFINIÇÕES',
    icon: { name: 'settings' },
    link: { href: 'definicoes' },
  },
];

export default items;
