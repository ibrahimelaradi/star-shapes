## C++ Code:
```cpp
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
		printf("\n");
	}
}
```
## Output:
```
*         
 *        
  *       
   *      
    *     
     *    
      *   
       *  
        * 
         *
```
