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
}
```
## Output:
```
   *
  ***
 *****
*******
```
