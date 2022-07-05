## C++ Code:
```cpp
int main() {
  for (int i = 0; i < 20; i++) {
		for (int j = 0; j < 20; j++) {
			int point = round(sqrt(81 - pow((i - 10) * 2.5, 2)));
			if (j <= point + 10 && j >= -point + 10) printf("*");
			else printf(" ");
		}
		printf("\n");
	}
}
```
## Output:
```
                    
                    
                    
                    
                    
                    
                    
     ***********    
   ***************  
 *******************
 *******************
 *******************
   ***************  
     ***********    
                    
                    
                    
                    
                    
                    
```
