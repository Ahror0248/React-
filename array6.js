let p=[1,2]
let n=10
let c=0
for(let i=2; i<n; i++) {
    let sum=0
   for(let j=0; j<i; j++){
       sum+=p[j]
   }
   p.push(sum)
}
console.log(p);