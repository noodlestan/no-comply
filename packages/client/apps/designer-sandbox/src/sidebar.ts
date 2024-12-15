import { getCollection } from 'astro:content';

const decisionTypes = await getCollection('decisionTypes');

const decisionTypesHeader = {
    label: 'All Types',
    link: 'decision-types',
};
const decisionTypeItems = decisionTypes.map(d => ({
    link: `decision-types/${d.id}`,
    label: d.data.name,
}));

export const sidebar = [
    {
        label: 'Viz',
        items: [{ label: 'Example', slug: 'viz/example' }],
    },
    {
        label: 'Decision Types',
        items: [decisionTypesHeader, ...decisionTypeItems],
    },
];
