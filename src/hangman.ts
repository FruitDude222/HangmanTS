import { State } from './types';

export const defaultState: State = {
	health: 5,
	word: 'Hallo',
	guessed: [],
	wrong: new Set<string>(),
};

export function update(state: State, input: string): State {
	return state;
}

export function isDone(state: State): boolean {
	return false;
}
