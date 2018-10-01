#include <iostream>
using namespace std;
 class Datos{
 	public:
 		void matrices();
 private:
 	int nfil = 2;
 int ncol = 2;
 int i, j, p, h,t, w, g, e, z;
 	
 };
void Datos :: matrices(){
cout << "Creando matriz A" << endl;
	int A[nfil][ncol];
	int B[nfil][ncol];
	int C[nfil][ncol];
	for ( i = 0 ; i < nfil ; i++){
		for( j = 0 ; j < ncol ; j++){
			cout << "Fila: " << i+1 << " Columna: " << j + 1 << endl;
			cout << "Dato: " << endl;
			cin >> A[i][j];
			
		}
	}
	cout << "Creando matriz  B" << endl;
	for ( p = 0 ; p < nfil ; p++){
		for ( h = 0 ; h < ncol ; h++){
				cout << "Fila: " << p+1 << " Columna: " << h + 1 << endl;
				cout << "Dato: " << endl;
				cin >> B[p][h];
		
		}
	}
	cout << "Matriz C" << endl;
	cout << "---------------------------------" << endl;
	for ( t = 0 ; t < nfil ; t++){
		for( w = 0 ; w < ncol ; w++){
				C[t][w] = 0;
				for ( g = 0 ; g < ncol ; g++){
				
				C[t][w]=(C[t][w] + A[t][g] )* B[g][w];
				//int acum = 0; 
				//acum = acum + C[t][w];
				//cout << "Fila: " << t+1 << " Columna: " << w + 1 << endl;
				//cout << acum << endl;
				//cout << C[t][w] << endl;
			}
			
		}
	}
	for (e = 0 ; e < nfil ; e++ ){
		for ( z = 0; z < ncol ; z ++ ){
			cout << "Fila: " << e+1 << " Columna: " << z + 1 << endl;
			cout << C[e][z] << endl;
		}
	}	
}
int main(){
	Datos Resultado1;
	Resultado1.matrices();
	
}
