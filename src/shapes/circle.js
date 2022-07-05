const { printf } = require("../printer");

const cppEquivalent = `\
\`\`\`cpp
int main() {
  for (int i = 0; i < 20; i++) {
		for (int j = 0; j < 20; j++) {
			int point = round(sqrt(81 - pow((i - 10) * 2.5, 2)));
			if (j <= point + 10 && j >= -point + 10) printf("*");
			else printf(" ");
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

	for (let i = 0; i < 20; i++) {
		for (let j = 0; j < 20; j++) {
			let point = Math.round(Math.sqrt(81 - Math.pow((i - 10) * 2.5, 2)));
			if (j <= point + 10 && j >= -point + 10) printf("*");
			else printf(" ");
		}
		printf("\n");
	}

	printf("```\n");
}

module.exports = { main };
