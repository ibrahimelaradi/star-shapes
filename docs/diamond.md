## C++ Code:
```cpp
int main() {
  for (int i = 0; i < 4; i++) {
		for (int j = 0; j < 6 / 2 - i; j++) {
			printf(" ");
		}
		for (int j = 6 / 2 - i; j <= 6 / 2 + i && j >= 6 / 2 - i; j++) {
			printf("*");
		}
		printf("\n");
	}
  for (int i = 2; i >= 0; i--) {
		for (int j = 0; j < 6 / 2 - i; j++) {
			printf(" ");
		}
		for (int j = 6 / 2 - i; j <= 6 / 2 + i && j >= 6 / 2 - i; j++) {
			printf("*");
		}
		printf("\n");
	}
}
```
## Output:
```
   *
  ***
 *****
*******
 *****
  ***
   *
```
