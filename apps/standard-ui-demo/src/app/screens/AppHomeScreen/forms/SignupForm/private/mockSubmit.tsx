import type { SignupData } from '../types';

export const mockSubmit = async (data: SignupData): Promise<void> => {
	console.info('submitted', data);
	return new Promise<void>((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.5) {
				resolve();
			}
			reject(new Error(`Error submitting form`));
		}, 1000);
	});
};
