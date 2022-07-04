const { printf } = require("../printer");

const cppEquivalent = `\
\`\`\`cpp
int main() {
    for (int i = 0; i < 4; i++) {
      int left_bound = i + 1;
      int right_bound = 6 - 1 - i;
      if (left_bound > right_bound) {
        for (int j = 0; j < 7; j++) {
          printf("*");
        }
        printf("\\n");
        break
      }
      for (int j = 0; j < left_bound; j++) {
        printf("*");
      }
      for (int j = left_bound; j <= right_bound; j++) {
        printf(" ");
      }
      for (int j = right_bound + 1; j < 7; j++) {
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
		const left_bound = i + 1;
		const right_bound = 6 - i - 1;
		if (left_bound > right_bound) {
			for (let j = 0; j < 7; j++) {
				printf("*");
			}
			printf("\n");
			break;
		}
		for (let j = 0; j < left_bound; j++) {
			printf("*");
		}
		for (let j = left_bound; j <= right_bound; j++) {
			printf(" ");
		}
		for (let j = right_bound + 1; j < 7; j++) {
			printf("*");
		}
		printf("\n");
	}

	printf("```\n");
}

module.exports = { main };
