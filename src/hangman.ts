import { State } from './types';

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

export const update = (state: State, input: string): State => {
	return state;
};

export const isDone = (state: State): boolean => {
	return isLost(state) || isWon(state);
};
