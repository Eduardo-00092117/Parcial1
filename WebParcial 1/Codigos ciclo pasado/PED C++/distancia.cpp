#include <iostream>
#include <cmath>
using namespace std;
int main(){
	int x1, x2, y1, y2, distancia, pow1, pow2, result1, result2;
	cout << "Ingrese las coordenadas P1: ";
	cin >> x1 >> y1;
	cout << "Ingrese las coordenadas P2: ";
	cin >> x2 >> y2;
	result1 = x2-x1;
	result2 = y2-y1;
	pow1 = pow(result1,2);
	pow2 = pow(result2,2);

	
	distancia = (sqrt(pow1)+(pow2));
	cout << "Tu distancia es: " << distancia;
}
