#include <iostream>
#define nfil 3
#define ncol 2 
using namespace std;

int main(){
	cout << "Matriz A" << endl;
	int A[nfil][ncol];
	//int B[ncol][nfil];
	for (int i = 0 ; i < nfil ; i ++){
		for (int j = 0 ; j < ncol ; j++){
			cout << "Fila: " << i + 1 << " Columna: " << j + 1 << endl;
			cout << "Datos: " << endl;
			cin >> A[i][j]; 
		}
	}
	cout << "Respuesta" << endl;
	cout << "-----------------------" << endl;
	for (int h = 0; h < ncol ; h++){
		for (int g = 0 ; g <nfil ; g++){
			cout << "Fila: " << h + 1 << " Columna: " << g + 1 << endl;
			//cout << B[h][g] << endl;
			cout << A[g][h] << endl;
		}
	}
	
}
