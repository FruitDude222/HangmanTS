export type Lives = number;

export type State = {
	health: Lives;
	word: string;
	guessed: boolean[];
	wrong: Set<string>;
};
