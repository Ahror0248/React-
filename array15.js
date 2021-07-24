let a =[12, 23, -35, 43, -14, -24, -15, -10, 15, 40, -41, -49, 34, -17, 25]
let b =[]
let c = []

for(let i=0; i<a.length/2; i++) {
   b.push(a[2*i]);
}
b.sort((a,b)=>a-b)

for(let i=1; i<a.length/2; i++) {
    c.push(a[2*i-1]);
}
c.sort((a,b)=>b-a)

let bc = [...b, ...c]
console.log(bc);