import { type ClassList } from '@no-comply/solid-primitives';
import { Display, Flex } from '@no-comply/standard-ui';
import type { JSX, ParentComponent } from 'solid-js';

import { PageContentsLayout } from '../../layouts';
import { EmptyPage } from '../EmptyPage';

type Props = {
	title?: JSX.Element;
	classList?: ClassList;
	undertitle?: JSX.Element;
};
export const NotFoundPage: ParentComponent<Props> = props => {
	return (
		<EmptyPage>
			<PageContentsLayout classList={props.classList} gap="l">
				<Flex gap="s">
					<Display level={2}>{props.title ?? 'Not Found'}</Display>
					{props.undertitle}
				</Flex>
				<Flex gap="xl">{props.children}</Flex>
			</PageContentsLayout>
		</EmptyPage>
	);
};
