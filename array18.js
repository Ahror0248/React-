 let a=[11,12,8,3,4,5,6,7,8,9]
 let b=a[a.length-1]

 for(let i=0; i<a.length; i++) {
     if(b>a[i]){
         b=a[i]
         console.log(b);
         break;
     } 
 }