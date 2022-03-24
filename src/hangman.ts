import { State } from './types';
import { findIndicesOf } from './stringUtil';

export const defaultState: State = {
	health: 5,
	word: 'Hallo',
	guessed: [false, false, false, false, false],
	wrong: new Set<string>(),
};

const isLost = (state: State) => {
	return false;
};

const isWon = (state: State) => {
	return state.guessed.every((e) => e);
};

const isValid = (input: string) => {
	return input.length === 1;
};

const wordContains = (input: string, state: State) => {
	return state.word.includes(input.toLocaleLowerCase());
};

const wasGuessedAlready = (input: string, state: State) => {
	const indices = findIndicesOf(state.word, input);
	const wasGuessedWrongly = state.wrong.has(input);
	const wasGuessedCorrectly = indices.some((e) => e);

	return wasGuessedWrongly || wasGuessedCorrectly;
};

export const update = (state: State, input: string): State => {
	if (isValid(input)) {
		return state;
	} else {
		return state;
	}
};

export const isDone = (state: State): boolean => {
	return isLost(state) || isWon(state);
};
