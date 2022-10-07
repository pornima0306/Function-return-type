let cl= console.log;

/* =========================Function return type======================== */
/* function return advance to the function which type of data is he going to return */

/* -----------function return type number------------------- */
function addition(n1:number, n2:number):number{
    return n1 + n2;
}
cl(addition(10,10))


/* -------------------function return type string----------------- */
function combine(n1:string, n2:string):string{
    return n1 + n2
}

/* -------------------function return type string----------------- */
function add(n1:number, n2:number):string{
    return n1 + n2 +''
}

/* -------------------function return type (number | string) comb ----------------- */
type comb = number | string
function combinable(n1:comb, n2:comb):comb{
    if(typeof n1 === 'number' && typeof n2 === 'number'){
        return n1 + n2
    }else{
        return n1.toString() + n2.toString()
    }
}

cl(combinable(10,10))
cl(combinable("10",10))

/* -------------------------------------------------------------------- */

interface Iproduct{
    id : string,
    price : number,
    tags : string[],
    details : IproductDetails
}

interface IproductDetails{
    title : string,
    description : string,
    specification : string[]
}

let iphone14 : Iproduct ={
    id : "abc123",
    price : 100000,
    tags : ['Greater-offer', 'Latest treand', 'Most Popular'],
    details : {
        title : 'Iphone 14',
        description : 'Rose Gold Color',
        specification : ['']
    }
}

let iphone13 :Iproduct ={
    id : "123asd",
    price : 80000,
    tags : ['Greater-ofer', 'Latest treand', 'Most Popular'],
    details :{
        title : 'Iphone 13',
        description : 'Better than 14',
        specification : ['']
    }
}

let allProduct : Iproduct[]=[
    iphone13, iphone14
]

/* ---------------------------function return type void-------------------------------------------- */

function addFun(n1: number, n2: number):void{  // function does not return anything
    cl(n1 +n2)
    //return n1 + n2  // through and Error : type number is not assignable to void
}