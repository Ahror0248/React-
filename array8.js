let n=[ 92, 57, 48, 49, 67, 45, 19, 99, 77, 85, 41, 94, 42, 66, 66, 59, 18, 97, 10, 20 ]
let p=[]
for(let i=0; i<n.length; i++) {
//    i%2!=0
   
    if(n[i]%2!==0){
       p.push(n[i])
   }
   p.sort((a,b)=> a-b)
   

}console.log(p)
console.log(p.length);















