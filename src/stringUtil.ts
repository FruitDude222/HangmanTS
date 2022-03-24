export const findIndicesOf = (s: string, search: string): number[] => {
	let matches: number[] = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === search) matches.push(i);
	}

	return matches;
};
