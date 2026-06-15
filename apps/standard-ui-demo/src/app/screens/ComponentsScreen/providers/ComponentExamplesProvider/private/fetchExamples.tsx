import type { ExampleData } from '../types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchExamples = async (component: string): Promise<ExampleData[]> => {
	await delay(500);

	console.info('FETCHING ', component);

	return [
		{
			name: 'Basic Usage',
			description: 'Some description',
			tsx: `<Flex padding="l" direction="row">
					<Button tsx-view-target intent="negative" onPress={() => console.log("!")}>Cancel</Button>
				</Flex>`,
		},
		{
			name: 'All sizes',
			description: 'Another description',
			lockProps: ['size'],
			tsx: `<Flex padding="l" direction="row" gap="m" align="center">
					<Button size="small" tsx-view-target>Small</Button>
					<Button size="normal">Normal</Button>
					<Button size="large">Large</Button>
				</Flex>`,
		},
	];
};
