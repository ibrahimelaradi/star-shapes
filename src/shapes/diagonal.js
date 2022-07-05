const { printf } = require("../printer");

const cppEquivalent = `\
\`\`\`cpp
int main() {
  for (int i = 0; i < 10; i++) {
		int diagonalPoint = i;
		for (int j = 0; j < diagonalPoint; j++) {
			printf(" ");
		}
		printf("*");
		for (int j = diagonalPoint + 1; j < 10; j++) {
			printf(" ");
		}
		printf("\\n");
	}
}
\`\`\`
`;

function main() {
	printf("## C++ Code:\n");
	printf(cppEquivalent);
	printf("## Output:\n");
	printf("```\n");
	for (let i = 0; i < 10; i++) {
		let diagonalPoint = i;
		for (let j = 0; j < diagonalPoint; j++) {
			printf(" ");
		}
		printf("*");
		for (let j = diagonalPoint + 1; j < 10; j++) {
			printf(" ");
		}
		printf("\n");
	}
	printf("```\n");
}

module.exports = { main };
