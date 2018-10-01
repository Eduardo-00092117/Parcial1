#include <iostream>
using namespace std;
void sumarMatriz(int nfil, int ncol){
	//int ncol, nfil;
	int i, j, k, n, m, p, t;
	cout << "Ingrese la fila: " << endl; cin >> nfil;
	cout << "Ingrese la columna: " << endl; cin >>ncol;
	int A[nfil][ncol];
	int B[nfil][ncol];
	int C[nfil][ncol];
	cout << "|||||Creando matriz A|||||" << endl;
	for(i = 0; i < nfil ; i++){
		for( j = 0 ; j < ncol; j++){
			cout << "Fila: " << i + 1 << " Columna: " << j + 1 << endl;
			cout << "Ingrese datos:" << endl;
			cin >> A[i][j];
			
		}
	}
	cout << "|||||Creando matriz B|||||" << endl;
	for ( k = 0 ; k < nfil ; k++){
		for ( n = 0; n < ncol; n++){
			cout << "Fila: " << k + 1 << " Columna: " << n + 1 << endl;
			cout << "Ingrese datos: " << endl;
			cin >> B[k][n];
			
		}
	}
	//int C[A[i][j]][B]
	cout << "||| RESPUESTA ||| " << endl;
	for(m=0 ; m < nfil; m++){
		for(p=0; p < ncol; p++){
			//C[m][p]=A[i][j]+B[k][n];
			C[m][p]=A[m][p]+B[m][p];	
			
		}
	}
	for ( t = 0 ; t < nfil ; t++){
		for(int j = 0; j < ncol; j++){
			cout << "Fila: " << t + 1 << " Columna: " << j + 1 << endl;	
			cout << C[t][j] << endl;
		}
	}
}
void restarMatriz(int nfil, int ncol){
		int i, j, k, n, m, p, t;
	cout << "Ingrese la fila: " << endl; cin >> nfil;
	cout << "Ingrese la columna: " << endl; cin >>ncol;
	int A[nfil][ncol];
	int B[nfil][ncol];
	int C[nfil][ncol];
	cout << "|||||Creando matriz A|||||" << endl;
	for(i = 0; i < nfil ; i++){
		for( j = 0 ; j < ncol; j++){
			cout << "Fila: " << i + 1 << " Columna: " << j + 1 << endl;
			cout << "Ingrese datos:" << endl;
			cin >> A[i][j];
			
		}
	}
	cout << "|||||Creando matriz B|||||" << endl;
	for ( k = 0 ; k < nfil ; k++){
		for ( n = 0; n < ncol; n++){
			cout << "Fila: " << k + 1 << " Columna: " << n + 1 << endl;
			cout << "Ingrese datos: " << endl;
			cin >> B[k][n];
			
		}
	}
	//int C[A[i][j]][B]
	for(m=0 ; m < nfil; m++){
		for(p=0; p < ncol; p++){
			C[m][p]=A[m][p]-B[m][p];	
			
		}
	}
	for ( t = 0 ; t < nfil ; t++){
		for(int j = 0; j < ncol; j++){
			cout << "Fila: " << t + 1 << " Columna: " << j + 1 << endl;	
			cout << C[t][j] << endl;
		}
	}
	
}
void multiplicarMatriz(int nfil, int ncol){
		int i, j, k, n, m, p, t;
	cout << "Ingrese la fila: " << endl; cin >> nfil;
	cout << "Ingrese la columna: " << endl; cin >>ncol;
	int A[nfil][ncol];
	int B[nfil][ncol];
	int C[nfil][ncol];
	cout << "|||||Creando matriz A|||||" << endl;
	for(i = 0; i < nfil ; i++){
		for( j = 0 ; j < ncol; j++){
			cout << "Fila: " << i + 1 << " Columna: " << j + 1 << endl;
			cout << "Ingrese datos:" << endl;
			cin >> A[i][j];
			
		}
	}
	cout << "|||||Creando matriz B|||||" << endl;
	for ( k = 0 ; k < nfil ; k++){
		for ( n = 0; n < ncol; n++){
			cout << "Fila: " << k + 1 << " Columna: " << n + 1 << endl;
			cout << "Ingrese datos: " << endl;
			cin >> B[k][n];
			
		}
	}
	//int C[A[i][j]][B]
	for(m=0 ; m < nfil; m++){
		for(p=0; p < ncol; p++){
			C[m][p]=0;
				for(int g = 0; g < ncol ; g++){
				
			C[m][p]=(A[m][p]+B[m][p])*B[g][p];	
		 	 }
		}
	}
	for ( t = 0 ; t < nfil ; t++){
		for(int j = 0; j < ncol; j++){
			cout << "Fila: " << t + 1 << " Columna: " << j + 1 << endl;	
			cout << C[t][j] << endl;
		}
	}
}
void matrizIdentidad(int nfil, int ncol){
	cout << "Ingrese fila: " << endl; cin >> nfil;
	cout << "Ingrese columna: " << endl; cin >> ncol;
	int A[nfil][ncol];
	if(nfil!=ncol){
		cout << "No hay identidad" << endl;
	}
	for(int i; i < nfil; i++){
		for(int j; j < ncol ; j++){
			if(i=j){
				if(A[i][j]!=1){
					cout << "No hay identidad" << endl;
					
				}
				else{
					if(A[i][j]!=0){
						cout << "No hay identidad" << endl;
					}
				}
			}
		}
		cout << "Si hay identidad" << endl;
	}
	
}
int main(){
	bool condicion = true;
	int respuesta;
	int cont=1;
	while(condicion){
		cout << "||||||||||MENU DE MATRICES|||||||||" << endl;
		cout << "1.Sumar matriz " << endl;
		cout << "2. Restar matriz" << endl;
		cout << "3. Multiplicar matriz" << endl;
		cout << "4. Mostrar si una matriz es identidad " << endl; 
		cout << "5. Salir" << endl;
		cout << "|||||||||||||||||||||||||||||||||||||" << endl;
		cin >> respuesta;
		switch(respuesta){
			case 1:{
				int a,b;
				sumarMatriz(a,b);
				break;
			}
			case 2:{
				int a,b;
				restarMatriz(a,b);
				break;
			}
			case 3:{
				int a,b;
				multiplicarMatriz(a,b);
				break;
			}
			case 4:{
				int a,b;
				matrizIdentidad(a,b);
				break;
			}
			case 5:{
				cout << "Saliendo.. " << endl;
				exit(1);
				break;
			}
			default:{
				cout << "No esta esa opcion" << endl;
				cout << "Veces cagandola: " << cont  << endl;
				cont = cont + 1;
 				break;
			}	
		}
		
		
		
	}
	
}
