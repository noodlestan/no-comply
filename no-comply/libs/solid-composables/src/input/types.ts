export type BaseInputValueProps<T> = {
	value: T | undefined;
	onChange?: (ev: Event) => void;
	onValueChange?: (value: T) => void;
};
