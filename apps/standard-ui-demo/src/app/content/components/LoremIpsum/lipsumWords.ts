import { WORDS } from './constants';

export const lipsumWords = (words: number = 7): string => {
	let result: string[] = [];
	while (result.length < words) {
		result = result.concat(WORDS);
	}
	result = result.slice(0, words);
	return result.join(' ') + '.';
};
