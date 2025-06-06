import type { DocsSectionData } from '../types';

export const createDocsSectionData = (data: Omit<DocsSectionData, 'type'>): DocsSectionData => {
    return {
        ...data,
        type: 'section',
    };
};
