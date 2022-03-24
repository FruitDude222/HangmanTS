import { defaultState, update, isDone } from './hangman';

let state = defaultState;

while (true) {
	const input = prompt('Input');
	if (input === null) break;

	state = update(state, input);

	if (isDone(state)) break;
}
