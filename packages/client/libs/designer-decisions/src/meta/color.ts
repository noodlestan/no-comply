import {
    createColorHueDecision,
    createColorLightnessDecision,
    createColorLightnessScaleDecision,
    createColorSaturationDecision,
    createColorScaleDecision,
    createColorValueDecision,
} from '../decisions';
import { DecisionTypeMeta } from '../types';

export const ColorDecisionTypes: DecisionTypeMeta[] = [
    {
        category: 'value',
        domain: 'color',
        type: 'color-saturation',
        name: 'Color Saturation Decision',
        description: 'A decision to define the saturation of a color.',
        factory: createColorSaturationDecision,
        models: [
            {
                model: 'static-value',
                description: 'Defines the saturation of a color as a percentage.',
            },
        ],
    },
    {
        category: 'value',
        domain: 'color',
        type: 'color-lightness',
        name: 'Color Lightness Decision',
        description: 'A decision to define the lightness of a color.',
        factory: createColorLightnessDecision,
        models: [
            {
                model: 'static-value',
                description: 'Defines the lightness of a color as a percentage.',
            },
        ],
    },
    {
        category: 'value',
        domain: 'color',
        type: 'color-hue',
        name: 'Color Hue Decision',
        description: 'A decision to define the hue of a color.',
        factory: createColorHueDecision,
        models: [
            {
                model: 'static-value',
                description: 'Defines the hue of a color as degrees on the color wheel.',
            },
        ],
    },
    {
        category: 'value',
        domain: 'color',
        type: 'color-value',
        name: 'Color Value Decision',
        description: 'A decision to define a color value.',
        factory: createColorValueDecision,
        models: [
            {
                model: 'static-value',
                description: 'Defines a color value (either RGB, HSL, or other formats).',
            },
        ],
    },
    {
        category: 'scale',
        domain: 'color',
        type: 'color-lightness-scale',
        name: 'Color Lightness Scale Decision',
        description: 'A decision to define a lightness scale for colors.',
        factory: createColorLightnessScaleDecision,
        models: [
            {
                model: 'linear-stepped-range',
                description:
                    'Defines a linear stepped range for lightness from a start to end percentage with specified steps.',
            },
            {
                model: 'static-value',
                description: 'Defines a static lightness scale with multiple percentage values.',
            },
        ],
    },
    {
        category: 'scale',
        domain: 'color',
        type: 'color-scale',
        name: 'Color Scale Decision',
        description: 'A decision to define a color scale.',
        factory: createColorScaleDecision,
        models: [
            {
                model: 'linear-stepped-range',
                description:
                    'Defines a linear gradient scale interpolating a number of steps between two colors.',
            },
            {
                model: 'static-value',
                description: 'Defines a static color scale with multiple color values.',
            },
            {
                model: 'stepped-modifier',
                description:
                    'Defines a color scale by successively applying a modifier to the previous step.',
            },
        ],
    },
];
