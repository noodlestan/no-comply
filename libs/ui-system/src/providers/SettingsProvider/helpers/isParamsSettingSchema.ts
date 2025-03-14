import { ParamsSetting, Setting } from '../types';

export const isParamsSettingSchema = <S extends object = object, P extends object = object>(
    setting: Setting,
    schema: string,
): setting is ParamsSetting<S, P> => {
    return setting.type === 'params' && setting.schema === schema;
};
