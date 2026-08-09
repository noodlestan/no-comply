import { LOREM_IPSUM, WORDS_BY_LENGTH } from './constants';

const LAST_WORD_OR_PUNCTUATION = /[\s\p{P}]+[\w\p{P}]*$/u;

export const lipsumChars = (maxChars: number = 150): string => {
	let text = LOREM_IPSUM;
	while (text.length < maxChars) {
		text += ' ' + LOREM_IPSUM;
	}

	const trimmed = text.slice(0, maxChars).replace(LAST_WORD_OR_PUNCTUATION, '');
	const remaining = maxChars - trimmed.length;

	if (remaining >= 2) {
		const index = remaining < WORDS_BY_LENGTH.length ? remaining : WORDS_BY_LENGTH.length - 1;
		const word = WORDS_BY_LENGTH[index];
		if (word) {
			return trimmed + ' ' + word + '.';
		}
	}

	return trimmed + '.';
};
