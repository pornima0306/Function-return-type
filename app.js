var cl = console.log;
/* =========================Function return type======================== */
/* function return advance to the function which type of data is he going to return */
/* -----------function return type number------------------- */
function addition(n1, n2) {
    return n1 + n2;
}
cl(addition(10, 10));
/* -------------------function return type string----------------- */
function combine(n1, n2) {
    return n1 + n2;
}
/* -------------------function return type string----------------- */
function add(n1, n2) {
    return n1 + n2 + '';
}
function combinable(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
var iphone14 = {
    id: "abc123",
    price: 100000,
    tags: ['Greater-ofer', 'Latest treand', 'Most Popular'],
    details: {
        title: 'Iphone 14',
        description: 'Rose Gold Color',
        specification: ['']
    }
};
var iphone13 = {
    id: "123asd",
    price: 80000,
    tags: ['Greater-ofer', 'Latest treand', 'Most Popular'],
    details: {
        title: 'Iphone 13',
        description: 'Better than 14',
        specification: ['']
    }
};
var allProduct = [
    iphone13, iphone14
];
/* ---------------------------function return type void-------------------------------------------- */
function addFun(n1, n2) {
    cl(n1 + n2);
    //return n1 + n2  // through and Error : type number is not assignable to void
}
