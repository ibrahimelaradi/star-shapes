const { printf } = require("../printer");

const cppEquivalent = `\
\`\`\`cpp
int main() {
    for (int i = 5; i > 0; i--) {
        for (int j = 0; j < i; j++) {
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
	for (let i = 5; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			printf("*");
		}
		printf("\n");
	}
	printf("```\n");
}

module.exports = { main };
