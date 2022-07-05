const { printf } = require("../printer");

const cppEquivalent = `\
\`\`\`cpp
int main() {
  for (int i = 0; i < 22; i++) {
		for (int j = 0; j < 60; j++) {
			int sin_point = round(sin((j / 18) * PI) * 10);
			if (sin_point === i - 11) printf("*");
			else printf(" ");
		}
		printf("\n");
	}
}
\`\`\`
`;

function main() {
	printf("## C++ Code:\n");
	printf(cppEquivalent);
	printf("## Output:\n");
	printf("```\n");
	for (let i = 0; i < 22; i++) {
		for (let j = 0; j < 60; j++) {
			let sin_point = Math.round(Math.sin((j / 18) * Math.PI) * 10);
			if (sin_point === i - 11) printf("*");
			else printf(" ");
		}
		printf("\n");
	}
	printf("```\n");
}

module.exports = { main };
