import { type ClassList } from '@no-comply/solid-primitives';
import { Display, Flex } from '@no-comply/standard-ui';
import type { JSX, ParentComponent } from 'solid-js';

import { $ID_SCREEN_TITLE } from '../../constants';
import { PageContentsLayout } from '../../layouts';
import { EmptyPage } from '../EmptyPage';

export type BasePageProps = {
	title: JSX.Element;
	classList?: ClassList;
	overtitle?: JSX.Element;
	undertitle?: JSX.Element;
};

export const BasePage: ParentComponent<BasePageProps> = props => {
	return (
		<EmptyPage aria-labelledby={$ID_SCREEN_TITLE}>
			<PageContentsLayout classList={props.classList} gap="2xl">
				<Flex gap="m">
					{props.overtitle}
					<Display id={$ID_SCREEN_TITLE} level={2}>
						{props.title}
					</Display>
					{props.undertitle}
				</Flex>
				<Flex gap="2xl">{props.children}</Flex>
			</PageContentsLayout>
		</EmptyPage>
	);
};
