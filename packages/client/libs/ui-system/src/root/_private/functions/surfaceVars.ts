import { getColorStyleByHue, getOpacityScale } from '../../../functions';
import { useSettings } from '../../../providers';

export const surfaceVars = (): Record<string, string | undefined> => {
    const { getValue } = useSettings();

    const style = () => {
        const actionHue = getValue('ui-system.colors.action');
        const selectedHue = getValue('ui-system.colors.selected');
        const focusedHue = getValue('ui-system.colors.focused');

        const opacityFg = getValue('ui-system.opacity.fg');
        const opacityBg = getValue('ui-system.opacity.bg');

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
