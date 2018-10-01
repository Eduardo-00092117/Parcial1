function formula2(palabra,listObj){
    var arr= [0,0,0,0];
    for(let i=0;i<listObj.length;i++){
        let index=2;
        if(listObj[i].evento.includes(palabra)){
            index-=2;
        };
        if(!listObj[i].accidente){
            index+=1;
        }
        listObj[index]+=1;
    } 
}