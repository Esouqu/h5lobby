import type { IUser } from "$lib/interfaces";

export enum SearchState {
  Idle,
  Searching,
  Found
}

export const rooms = ['ru', 'en', 'universe', 'rta', 'hrta', 'xrta', 'rw', 'te', 'frfb'];
export const myUser: IUser = {
  id: 9999,
  name: 'Esouqu',
  status: 'online',
  location: 'lobby',
  portrait: 'https://via.placeholder.com/150'
};
export const versionItems = [
  { value: 'vanilla', label: 'Vanilla 3.1+Rmg adv.' },
  { value: 'universe', label: 'Universe 1.2.1' },
  { value: 'rta', label: 'RTA 2.14.1' },
  { value: 'xrta', label: 'XRTA 3.42' },
  { value: 'rw', label: 'Random Wars 0.4' },
  { value: 'frfb', label: 'FRFB 1.3.1' },
  { value: 'te', label: 'TE 6.8' },
  { value: 'aa', label: 'Ashan Arena 2.3' }
];
export const roomTypeItems = [
  { value: '2', label: '2 Игрока' },
  { value: '3', label: '3 Игрока' },
  { value: '4', label: '4 Игрока' }
];
export const draftTypeItems = [
  { value: 'bargaining', label: 'Торги' },
  { value: 'draft', label: 'Драфт Героя' },
  { value: 'pickBan', label: 'Пик-Бан' },
  { value: 'crossingOut', label: 'Вычеркивание' }
];