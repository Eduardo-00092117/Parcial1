function formula(palabra,listObj){
    n=listObj.length;
    var arr=[0,0,0,0];
    for(let i=0;i<n;i++){
        if(listObj[i].eventos.includes(palabra)){
            if(listObj[i].accidente){
                arr[0]+=1;
            }
            else{
                if(listObj[i].accidente){
                    arr[2]+=1;
                }
                else{
                    arr[3]+=1;
                }
            }
        }
    }
}
