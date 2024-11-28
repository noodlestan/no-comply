import { IconComponent } from '../../icons';

export type SettingType =
    | 'ref'
    | 'boolean'
    | 'number'
    | 'range'
    | 'string'
    | 'options'
    | 'color-hue';

export type ParametricRef = {
    uuid: string;
    version: string;
};

export type SettingValue = ParametricRef | string | number | boolean;

export type SettingGroup = {
    name: string;
    key: string;
    order: number;
    icon?: IconComponent;
    groups?: SettingSubGroup[];
    description?: string;
};

export type SettingSubGroup = {
    name: string;
    key: string;
    icon?: IconComponent;
    description?: string;
};

export type BaseSetting = {
    id: string;
    name: string;
    type: SettingType;
    defaultValue: SettingValue;
    description: string;
    value?: SettingValue;
};

export type RefSetting = BaseSetting & {
    type: 'ref';
    defaultValue: ParametricRef;
    entityType: string;
    value?: ParametricRef;
};

export type BooleanSetting = BaseSetting & {
    type: 'boolean';
    defaultValue: boolean;
    value?: boolean;
};

export type NumberSetting = BaseSetting & {
    type: 'number';
    defaultValue: string;
    range: [number, number];
    step?: number;
    value?: string;
};

export type RangeSetting = BaseSetting & {
    type: 'range';
    defaultValue: number;
    range: [number, number];
    step?: number;
    value?: number;
};

export type StringSetting = BaseSetting & {
    type: 'string';
    defaultValue: string;
    value?: string;
};

export type OptionsSetting = BaseSetting & {
    type: 'options';
    defaultValue: string;
    options: [string, string, string?][];
    value?: string;
};

export type ColorHueSetting = BaseSetting & {
    type: 'color-hue';
    defaultValue: number;
    lightness: string;
    value?: number;
};

export type Setting =
    | BooleanSetting
    | NumberSetting
    | RangeSetting
    | StringSetting
    | OptionsSetting
    | RefSetting
    | ColorHueSetting;

export type SettingsAPI = {
    addSettings: (settings: Setting[]) => void;
    addGroups: (groups: SettingGroup[]) => void;
    getGroups: () => SettingGroup[];
    getSettings: (key?: string) => Setting[];
    getValue: (id: string) => SettingValue;
    setValue: (id: string, value: SettingValue) => void;
};
