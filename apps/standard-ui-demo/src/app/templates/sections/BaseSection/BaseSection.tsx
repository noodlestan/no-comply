import { type ClassList, shortId } from '@no-comply/solid-primitives';
import { Display, type DisplayLevel, Flex } from '@no-comply/standard-ui';
import type { JSX, ParentComponent } from 'solid-js';

export type BaseSectionProps = {
	title: JSX.Element;
	level?: DisplayLevel;
	classList?: ClassList;
	undertitle?: JSX.Element;
	before?: JSX.Element;
	after?: JSX.Element;
	children: JSX.Element;
};

export const BaseSection: ParentComponent<BaseSectionProps> = props => {
	const labelId = shortId();

	return (
		<Flex tag="section" gap="xl" classList={props.classList} aria-labelledby={labelId}>
			<Flex gap="s">
				<Display level={props.level ?? 3} id={labelId}>
					{props.title}
				</Display>
				{props.undertitle}
			</Flex>
			{props.before}
			<Flex gap="xl">{props.children}</Flex>
			{props.before}
		</Flex>
	);
};
