#include<iostream>
using namespace std;
//Ocupando numeros QUEMADOS ya que el ejercicio no 
	//dice que el usuario ingresara datos ;) 
struct Datos{
	int nfil=2;
	int ncol=2;	
};
void matrizA(int i, int j){
	Datos Constantes;
	int sumatoria1, sumatoria2;
	int A[Constantes.nfil][Constantes.ncol];
	for ( i = 0; i<Constantes.nfil ; i++){
		for ( j =0; j < Constantes.ncol; j++){
			cout << "Fila: " << i+1 << " Columna: " << j+1 << endl;
			cout << "Datos: " << endl;
			cin >> A[i][j];
			if (i==0){//Fila 1
				sumatoria1=sumatoria1+A[i][j];
				}
			if(i==1){//Fila 2
			    sumatoria2 = sumatoria2 + A[i][j];}
		
			}}
			//Mostrando el resultado de la matriz por vacil
	for (i=0;i<Constantes.nfil;i++){
		for(j=0;j<Constantes.ncol;j++){
		    //cout << ---------------------------------" << endl;
			cout << A[i][j] << endl;
			}
			
}
cout << "La suma de la primera fila es: " << sumatoria1 << endl;
cout << "La suma de la ultima fila es: " << sumatoria2 << endl;
	
}
int main(){
	int num1, num2;
	matrizA(num1,num2);
	
	
}

