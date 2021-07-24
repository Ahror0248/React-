let a=[11,12,8,3,2,1,6,7,8,9]
let b=a[a.length-1]

for(let i=0; i<a.length; i++) {
    if(b>a[i] && a[i]<a[i+1]){
        b=a[i+1]
        console.log(b);
       
    } 
    // else if(a[i]<a[i+1]){
    //     console.log(a[i+1]);
    //     break
    // }
}