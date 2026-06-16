import type { ComponentDocsData } from '../types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchComponentDocsData = async (component: string): Promise<ComponentDocsData> => {
	await delay(500);

	console.info('FETCHING ', component);

	return {
		preview: {
			description: 'Some description',
			tsx: `<Flex padding="l" direction="row">
					<Button tsx-view-target intent="negative" onPress={() => console.log("!")}>Cancel</Button>
				</Flex>`,
		},
		examples: [
			{
				title: 'All sizes',
				description: 'Another description',
				lockedProps: ['size'],
				tsx: `<Flex padding="l" direction="row" gap="m" align="center">
					<Button tsx-view-target size="small">Small</Button>
					<Button tsx-view-target size="normal">Normal</Button>
					<Button tsx-view-target size="large">Large</Button>
				</Flex>`,
			},
			{
				title: 'All variants',
				description: 'Another description',
				lockedProps: ['variant'],
				tsx: `<Flex padding="l" direction="row" gap="m" align="center">
					<Button tsx-view-target variant="primary">Primary</Button>
					<Button tsx-view-target variant="secondary">Secondary</Button>
					<Button tsx-view-target variant="plain">Plain</Button>
				</Flex>`,
			},
			{
				title: 'All intents',
				description: 'Another description',
				lockedProps: ['intent'],
				tsx: `<Flex padding="l" direction="row" gap="m" align="center">
					<Button tsx-view-target intent="positive">Positive</Button>
					<Button tsx-view-target intent="negative">Negative</Button>
					<Button tsx-view-target intent="neutral">Neutral</Button>
				</Flex>`,
			},
		],
	};
};
