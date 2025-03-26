import type { JSX } from 'solid-js';

export type IconComponent = (props: object) => JSX.Element;

export type IconComponentValue = { component: IconComponent };

export type IconValue<A extends unknown[] = []> =
    | IconComponentValue
    | ((...args: A) => IconComponent);

export type IconMap = Record<string, IconValue>;

export type IconsServiceAPI = {
    addIcon: (name: string, icon: IconComponent) => void;
    addIcons: (map: Record<string, IconComponent>) => void;
    getIcon: (name: string) => IconComponent;
};
