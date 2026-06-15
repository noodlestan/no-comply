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
					<Button size="small" tsx-view-target>Small</Button>
					<Button size="normal">Normal</Button>
					<Button size="large">Large</Button>
				</Flex>`,
			},
			{
				title: 'All variants',
				description: 'Another description',
				lockedProps: ['variant'],
				tsx: `<Flex padding="l" direction="row" gap="m" align="center">
					<Button variant="primary" tsx-view-target>Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="plain">Plain</Button>
				</Flex>`,
			},
			{
				title: 'All intents',
				description: 'Another description',
				lockedProps: ['intent'],
				tsx: `<Flex padding="l" direction="row" gap="m" align="center">
					<Button intent="positive" tsx-view-target>Positive</Button>
					<Button intent="negative">Negative</Button>
					<Button intent="neutral">Neutral</Button>
				</Flex>`,
			},
		],
	};
};
