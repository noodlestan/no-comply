import { JSX } from 'solid-js';

export type IconMap = Record<string, IconComponent>;

export type IconComponent = (props: object) => JSX.Element;
