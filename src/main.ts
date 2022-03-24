import { defaultState, update, isDone } from './hangman';

let state = defaultState;

while (true) {
	const input = prompt('Enter the next letter');
	if (input === null) break;

	state = update(state, input);

	if (isDone(state)) break;
}
