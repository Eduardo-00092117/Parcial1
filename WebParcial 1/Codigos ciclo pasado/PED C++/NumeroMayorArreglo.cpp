#include <iostream>

using namespace std;

/*typedef struct dir{
    int mayor;
    int menor;
}mayor,menor;
*/
int mayor(int[],int);

int main(void) {
    
    int arr[6]={1,4,2,7,12,24};
    mayor(arr,6);

    return 0;
}

int mayor(int arr[], int n){
    int may=0;
    int i;
    for (i=0; i<n; i++){
        if (arr[i]> may){
        may=arr[i];
    }
        cout<<may<<endl;
}
}