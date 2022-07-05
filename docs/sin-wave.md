## C++ Code:
```cpp
int main() {
  for (int i = 0; i < 22; i++) {
		for (int j = 0; j < 60; j++) {
			int sin_point = round(sin((j / 18) * PI) * 10);
			if (sin_point === i - 11) printf("*");
			else printf(" ");
		}
		printf("
");
	}
}
```
## Output:
```
                                                            
                          ***                               
                        **   **                             
                       *       *                           *
                                                            
                      *         *                         * 
                     *           *                       *  
                                                            
                    *             *                     *   
                   *               *                   *    
                                                            
*                 *                 *                 *     
                                                            
 *               *                   *               *      
  *             *                     *             *       
                                                            
   *           *                       *           *        
    *         *                         *         *         
                                                            
     *       *                           *       *          
      **   **                             **   **           
        ***                                 ***             
```
