#include <iostream>
//#define consta1 5
//#define consta 5
using namespace std;
class Datos{
	public:
		void suma(int num1, int num2);
	private:
		int consta1 = 5;
		int consta = 5;

		int acumulador1 = 0;
		int acumulador2 = 0;
		int acum;
};
void Datos :: suma(int num11, int num22){
	int num1[consta1];
	int num2[consta];
	for (int i = 0 ; i<consta1; i ++){
		cout << "Almacene valores en el arrelgo A: " << endl;
		cin >> num1[i];
		acumulador1 = acumulador1 + num1[i];
		cout << "Suma del primer arreglo: " << acumulador1 << endl;
		
	}
	cout << "---------------------------------------------------------------" << endl;
	for (int j = 0 ; j<consta ;  ++j ){
		cout << "Almacene valores en el arrelgo B: " << endl;
		cin >> num2[j];
		acumulador2 = acumulador2 + num2[j];
		cout << "Suma del segundo arreglo: " << acumulador2 << endl;
		
		
	}
	cout << "--------------------------------------------------------------" << endl;
	cout << "Resultado es: " << acumulador1 + acumulador2 << endl;
}
int main(){
	Datos dato1;
	int a, b;
	dato1.suma(a,b);
}
