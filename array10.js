let n=[ 92, 57, 48, 49, 67, 45, 19, 99, 77, 85, 41, 94, 42, 66, 66, 59, 18, 97, 10, 20 ]
let p=[]
let r=[]
for(let i=0; i<n.length; i++){
    if(n[i]%2==0){
        p.push(n[i])
    }
    p.sort((a,b)=>a-b);
    
     
}

for(let i=0; i<n.length; i++) {
    if(n[i]%2!==0) {
        r.push(n[i])
    }
    r.sort((a,b)=>b-a)
}

// console.log(p);
// console.log(r);
let pr = [...p , ...r]

console.log(pr);

