## C++ Code:
```cpp
int main() {
    for (int i = 10; i > 0; i -= 2) {
        for (int j = 0; j <= i; j++) {
            printf("*");
        }
        printf("\n");
    }
    for (int i = 1; i <= 10; i += 2) {
        for (int j = 0; j <= i; j++) {
            printf("*");
        }
        printf("\n");
    }
}
```
## Output:
```
***********
*********
*******
*****
***
**
****
******
********
**********
```
