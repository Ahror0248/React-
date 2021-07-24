 let a=[1,2,3,4,5,6,7,8,9]
   let b=0
   let c=0
   for(let i=0; i<(a.length/2)-2; i++){
     
        if(i==a.length-2*i-1 && a.length-2*i-2){
            console.log(a[2*i], a[2*i+1]);
        }
        else {
            console.log(a[2*i], a[2*i+1])
       console.log(a[a.length-2*i-1], a[a.length-2*i-2])
        }

       
   }