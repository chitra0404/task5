let details=[{"name":"chitra","country":"india","language":"tamil"}];
//for loop
for(let i=0;i<details.length;i++){
    let obj=details[i];
    console.log(obj.name,obj.country,obj.language);
}
//for in
for(var key in details){
    if(details.hasOwnProperty(key)){
        console.log(details[key].name);
    }
}


//for of
let detailsofme="";
for(let key1 of details[key].name){
    detailsofme +=key1;

}console.log(detailsofme)

//for each
details.forEach(function(obj){console.log(obj.name)});