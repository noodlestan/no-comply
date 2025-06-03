import type { DemoSectionData } from '../types';

export const createDemoSection = (data: Omit<DemoSectionData, 'type'>): DemoSectionData => {
    return {
        ...data,
        type: 'section',
    };
};
