import { ROUND_PRECISION } from '../constants';

export const getValueRounded = (value: number): number => {
	return Math.round(value * ROUND_PRECISION) / ROUND_PRECISION;
};
