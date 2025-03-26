export type SettingType =
    | 'params'
    | 'boolean'
    | 'number'
    | 'range'
    | 'string'
    | 'options'
    | 'color-hue';

export type SettingValue = object | string | number | boolean;

export type SettingGroup = {
    name: string;
    key: string;
    order: number;
    icon?: string;
    groups?: SettingSubGroup[];
    description?: string;
};

export type SettingSubGroup = {
    name: string;
    key: string;
    icon?: string;
    description?: string;
};

export type BaseSetting = {
    id: string;
    group?: string;
    name: string;
    type: SettingType;
    defaultValue: SettingValue;
    description: string;
    value?: SettingValue;
};

export type ParamsSetting<V extends object = object, P extends object = object> = BaseSetting & {
    type: 'params';
    schema: string;
    defaultValue: V;
    params?: P;
    value?: V;
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
    options: string[];
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
    | ParamsSetting
    | ColorHueSetting;

export type SettingsServiceAPI = {
    addSettings: (settings: Setting[]) => void;
    addGroups: (groups: SettingGroup[]) => void;
    getGroups: () => SettingGroup[];
    getSettings: (key?: string) => Setting[];
    getValue: (idOrSetting: string | Setting) => SettingValue;
    setValue: (id: string, value: SettingValue) => void;
};
