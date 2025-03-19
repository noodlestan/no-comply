import { getColorStyleByHue, getOpacityScale } from '../../../functions';
import { useSettings } from '../../../providers';

export const surfaceVars = (): Record<string, string | undefined> => {
    const { getValue } = useSettings();

    const style = () => {
        const actionHue = getValue('theme-base.colors.action');
        const selectedHue = getValue('theme-base.colors.selected');
        const focusedHue = getValue('theme-base.colors.focused');

        const opacityFg = getValue('theme-base.opacity.fg');
        const opacityBg = getValue('theme-base.opacity.bg');

        return {
            ...getColorStyleByHue('--color-i-rest-hue-sat', Number(actionHue)),
            ...getColorStyleByHue('--color-selected-hue-sat', Number(selectedHue)),
            ...getColorStyleByHue('--color-focused-hue-sat', Number(focusedHue)),
            ...getOpacityScale('fg', Number(opacityFg)),
            ...getOpacityScale('bg', Number(opacityBg)),
        };
    };

    return style();
};
