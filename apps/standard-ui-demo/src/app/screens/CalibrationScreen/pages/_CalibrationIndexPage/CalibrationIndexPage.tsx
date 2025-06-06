import { Display, Flex } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { CalibrationPage } from '../../private';

export const CalibrationIndexPage: Component = () => {
	return (
		<CalibrationPage
			title="Calibration"
			undertitle={
				<Display tag="p" variant="m">
					Sandbox pages
				</Display>
			}
		>
			<Flex direction="column" gap="m">
				...
			</Flex>
		</CalibrationPage>
	);
};
