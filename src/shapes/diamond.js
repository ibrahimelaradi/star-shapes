const { printf } = require("../printer");

const cppEquivalent = `\
\`\`\`cpp
int main() {
  for (int i = 0; i < 4; i++) {
		for (int j = 0; j < 6 / 2 - i; j++) {
			printf(" ");
		}
		for (int j = 6 / 2 - i; j <= 6 / 2 + i && j >= 6 / 2 - i; j++) {
			printf("*");
		}
		printf("\\n");
	}
  for (int i = 2; i >= 0; i--) {
		for (int j = 0; j < 6 / 2 - i; j++) {
			printf(" ");
		}
		for (int j = 6 / 2 - i; j <= 6 / 2 + i && j >= 6 / 2 - i; j++) {
			printf("*");
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

	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 6 / 2 - i; j++) {
			printf(" ");
		}
		for (let j = 6 / 2 - i; j <= 6 / 2 + i && j >= 6 / 2 - i; j++) {
			printf("*");
		}
		printf("\n");
	}
	for (let i = 2; i >= 0; i--) {
		for (let j = 0; j < 6 / 2 - i; j++) {
			printf(" ");
		}
		for (let j = 6 / 2 - i; j <= 6 / 2 + i && j >= 6 / 2 - i; j++) {
			printf("*");
		}
		printf("\n");
	}

	printf("```\n");
}

module.exports = { main };
