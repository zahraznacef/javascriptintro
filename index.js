// Excercie 1
let a = 5;
let b = 8;
let c;
c = b;
b = a;
a = c;

console.log("Excercies 1 -> ",a,b)


// Excercie 2
function power(e1,e2){
    let r = 1;
    for (let k=1 ; k<e2+1 ;k++){
        r *= e1;
    }
    return r
}
console.log("Excercies 2 ->",power(2,8))
Math.pow(2,8)

// Excercie 3
function sum(e){
    let r = 0;
    for (let k=0; k<e.length;k++)
    {
        r += e[k]
    }
    return r;
}
console.log("Excercies 3 ->",sum([2,8,5,5]))

// Excercie 4
function returnseconds(e){
    return e*60
}
console.log("Excercies 4 ->",returnseconds(60))


function addone(e){
    return e+1
}
console.log("Excercies 5 ->",addone(17))

// Excercie 6
// (base*hauteur) / 2

function triangle(b,h){
    return (b*h)/2
}
console.log("Excercies 6 ->",triangle(5,7))

// Excercies 7
function reversestring(e)
{
    let r = "";
    for ( let k=0; k<e.length;k++)
    {
        r = e[k] + r
    }
    return r;
}
function stringreverse(e)
{
    return e.split("").reverse().join("");
}
console.log("Excercies 7 -> ",reversestring("sihT"))

// Excercies 8
function biggest(e)
{
    return e.sort()[e.length-1];
}
function big(e)
{
    return Math.max(...e);
}
console.log("Excercies 8 -> ",biggest([1,7,9,2,4,6]))

// Excercies 9
function first(e)
{
    return e[0];
}
function firstindex(e)
{
    return e.shift();
}
console.log("Excercies 9 ->",first([5698,2,547,8]))

function sumtf(e1,e2)
{
    if (e1+e2<100)
    {
        return true
    }
    else
    {
        return false
    }
}
function chek(e)
{
    let i = 0;
    let k = e.map( (el) => i += el );
    return i < 100;
}
console.log("Excercies 10 ->",sumtf(50,80))

function hoursTOseconds(e)
{
    return e*3600
}
console.log("Excercies 11 ->",hoursTOseconds(5))

