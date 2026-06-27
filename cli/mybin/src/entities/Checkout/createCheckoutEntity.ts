import type { CheckoutEntityData, CheckoutEntityPartial, CheckoutState } from '.';

export function createCheckoutEntity(
	partial: CheckoutEntityPartial,
	state: CheckoutState,
): CheckoutEntityData {
	const data: CheckoutEntityData = {
		...partial,
		state,
		symbols: {
			declared: {},
			imported: {},
		},
	};

	return data;
}
