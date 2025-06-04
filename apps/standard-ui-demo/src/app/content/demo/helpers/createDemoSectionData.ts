import type { DemoSectionData } from '../types';

export const createDemoSectionData = (data: Omit<DemoSectionData, 'type'>): DemoSectionData => {
    return {
        ...data,
        type: 'section',
    };
};
