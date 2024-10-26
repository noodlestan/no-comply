import { ComponentName } from '../../data';

const url = (path: string) => path;

export const ROUTES = {
    home: (): string => url(`/`),
    component: (name: ComponentName): string => url(`/component/${name}`),
    settings: (): string => url(`/settings`),
};
