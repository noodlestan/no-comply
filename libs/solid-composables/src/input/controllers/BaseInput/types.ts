import type { AriaInputAPI } from '@no-comply/solid-accessibility';
import type { AttributeBoolean, AttributeString } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

export type BaseInputProps = {
	id?: string;
	disabled?: boolean;
	invalid?: boolean;
};

export type BaseInputAPI = {
	$root: AriaInputAPI['$root'] & {
		readonly: AttributeBoolean;
		id: NonNullable<AttributeString>;
	};
	id: Accessor<string>;
};
