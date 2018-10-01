#include <iostream>
#define nfil 3
#define ncol 3
using namespace std;
int main(){
	int n, i , j;
	//cout << "Ingrese el orden de una matriz cuadrada: " << endl;
	//cin >> n;
	//int A[n][n];
	int A[nfil][ncol];
	for ( i = 0 ; i < nfil ; i++){
		for ( j = 0 ; j <ncol ; j++){
			cout << "Fila: " << i + 1 << " Columna: " << j + 1 << endl;
			cout << "Datos: " << endl;
			cin >> A[i][j];
			int suma = 0;
	if (i==j){
		suma = suma + A[i][j];
		cout << "Diagonal es: " << suma << endl;		
	}
			
	}	}
	
	
	}
	
	
	
	
	

