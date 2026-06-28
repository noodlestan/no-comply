import { FORCED_DELAY } from '../../../../../../env';
import type { ComponentDocsData } from '../types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const data = {
	Button: {
		examples: [
			{
				title: 'Basic usage',
				// description: 'description',
				tsx: `<Flex padding="l" direction="row" wrap>
					<Button tsx-view-target intent="negative" onPress={() => console.log("!")}>Close</Button>
				</Flex>`,
			},
			{
				title: 'All sizes',
				// description: 'description',
				lockedProps: ['size'],
				tsx: `<Flex padding="l" direction="row" gap="m" align="center" wrap>
					<Button tsx-view-target size="small">Small</Button>
					<Button tsx-view-target size="normal">Normal</Button>
					<Button tsx-view-target size="large">Large</Button>
				</Flex>`,
			},
			{
				title: 'All variants',
				// description: 'description',
				lockedProps: ['variant'],
				tsx: `<Flex padding="l" direction="row" gap="m" align="center" wrap>
					<Button tsx-view-target variant="primary">Primary</Button>
					<Button tsx-view-target variant="secondary">Secondary</Button>
					<Button tsx-view-target variant="plain">Plain</Button>
				</Flex>`,
			},
			{
				title: 'All intents',
				// description: 'description',
				lockedProps: ['intent'],
				tsx: `<Flex padding="l" direction="row" gap="m" align="center" wrap>
					<Button tsx-view-target intent="positive">Positive</Button>
					<Button tsx-view-target intent="negative">Negative</Button>
					<Button tsx-view-target intent="neutral">Neutral</Button>
				</Flex>`,
			},
		],
	},
	CloseButton: {
		examples: [
			{
				title: 'Basic usage',
				// description: 'description',
				tsx: `<Flex padding="l" direction="row" align="center" justify="center" flex={1} wrap>
					<CloseButton tsx-view-target intent="negative" onPress={() => console.log("!")} label="Close"/>
				</Flex>`,
			},
			{
				title: 'Label',
				description: 'label is mandatory on close buttons',
				lockedProps: ['size'],
				tsx: `<CloseButton tsx-view-target size="small" label="Small"/>`,
			},
			{
				title: 'All sizes',
				// description: 'description',
				lockedProps: ['size'],
				tsx: `<Flex padding="l" direction="row" gap="m" align="center" wrap>
					<CloseButton tsx-view-target size="small" label="Small"/>
					<CloseButton tsx-view-target size="normal" label="Normal"/>
					<CloseButton tsx-view-target size="large" label="Large"/>
				</Flex>`,
			},
			{
				title: 'All intents',
				// description: 'description',
				lockedProps: ['intent'],
				tsx: `<Flex padding="l" direction="row" gap="m" align="center" wrap>
					<CloseButton tsx-view-target intent="positive" label="Positive"/>
					<CloseButton tsx-view-target intent="negative" label="Negative"/>
					<CloseButton tsx-view-target intent="neutral" label="Neutral"/>
				</Flex>`,
			},
		],
	},
	SegmentedButton: {
		examples: [
			{
				title: 'Basic usage',
				tsx: `<SegmentedButton tsx-view-target value="top" onValueChange={(value) => console.log('Changed:', value)}>
					<SegmentedButtonItem value="top">top</SegmentedButtonItem>
					<SegmentedButtonItem value="middle">middle</SegmentedButtonItem>
					<SegmentedButtonItem value="bottom">bottom</SegmentedButtonItem>
				</SegmentedButton>`,
			},
		],
	},
	ExpandButton: {
		examples: [
			{
				title: 'Basic usage',
				// description: 'description',
				tsx: `<Flex padding="l" direction="row" align="center" justify="center" flex={1} wrap>
					<ExpandButton tsx-view-target
						expanded={false}
						labels={{on: 'Show', off: 'Hide'}}
						onPress={() => console.log('Pressed')}
						controls="#sidebar"
						size="large"
						variant="primary"
					/>
					<ExpandButton tsx-view-target
						expanded={true}
						labels={{on: 'Show', off: 'Hide'}}
						onPress={() => console.log('Pressed')}
						controls="#sidebar"
						intent="negative"
					/>
				</Flex>`,
			},
			{
				title: 'Label',
				description: 'label is mandatory on close buttons',
				lockedProps: ['size'],
				tsx: `<ExpandButton tsx-view-target
						expanded={false}
						labels={{on: 'Show', off: 'Hide'}}
						onPress={() => console.log('Pressed')}
						controls="#sidebar"
						size="large"
						variant="primary"
					/>`,
			},
			{
				title: 'All sizes',
				// description: 'description',
				lockedProps: ['size'],
				tsx: `<Flex padding="l" direction="row" gap="m" align="center" wrap>
					<CloseButton tsx-view-target size="small" label="Small"/>
					<CloseButton tsx-view-target size="normal" label="Normal"/>
					<CloseButton tsx-view-target size="large" label="Large"/>
				</Flex>`,
			},
			{
				title: 'All intents',
				// description: 'description',
				lockedProps: ['intent'],
				tsx: `<Flex padding="l" direction="row" gap="m" align="center" wrap>
					<CloseButton tsx-view-target intent="positive" label="Positive"/>
					<CloseButton tsx-view-target intent="negative" label="Negative"/>
					<CloseButton tsx-view-target intent="neutral" label="Neutral"/>
				</Flex>`,
			},
		],
	},
};

export const fetchComponentDocsData = async (component: string): Promise<ComponentDocsData> => {
	console.info('FETCHING ', component);
	await delay(FORCED_DELAY);
	console.info('FETCHED ', component);

	const componentData = data[component as keyof typeof data];

	if (componentData) {
		return componentData;
	}
	return {
		examples: [
			{
				title: 'Preview (Placeholder)',
				description: 'WIP - This is just a placehoder example',
				tsx: `<Flex padding="l" direction="column" stretch="full" wrap>
					<${component} tsx-view-target>Maybe</${component}>
				</Flex>`,
			},
		],
	};
};
