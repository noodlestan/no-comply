export type BaseInputProps<T = unknown> = {
	id?: string;
	value?: T;
	disabled?: boolean;
	invalid?: boolean;
	modified?: boolean;
	onChange?: (ev: Event) => void;
	onValueChange?: (value: T) => void;
};
