#include <iostream>
#include <string>

using namespace std;

typedef struct letras{
    int cantA, cantE, cantI, cantO, cantU;
}vocales;

vocales contVocales(string, int, vocales);

int main(void) {
    int i=1,x;
    vocales v;
    string cad;
    cout<<"Digite la cadena: ";
    cin>>cad;
    x=contVocales(cad, i, v);
    cout<<x;
    
    
    return 0;
}

vocales contVocales(string cad, int i, vocales v){
    int x;
    x=cad.length();
    if(i>=x){
        switch(cad.at(i)){
            case 'a':
                v.cantA=v.cantA+1;
                break;
            case 'e':
                v.cantE=v.cantE+1;
                break;
            case 'i':
                v.cantI=v.cantI+1;
                break;
            case 'o':
                v.cantO=v.cantO+1;
                break;
            case 'u':
                v.cantU=v.cantU+1;
                break;
        }
        return contVocales(cad, i+1, v);
    }
    else
        return v;
}
