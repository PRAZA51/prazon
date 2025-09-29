const students={
    name:"Pritam Hazari",
    age:18,
    parcentage:75,
    isPass:true,
};
const product={
    name:"Ball Pen",
    rating:4,
    offer:5,
    price:270,
};
let output=`The price of ${product.name} is ${product.price} rupees`;
console.log(output);
/*let num=prompt("enter jursy number");
console.log("Your jursy number is : ",num);*/

/*let score=prompt("enter your marks(0-100):");
let grade;
if(score>=80 && score<=100) {
    grade="A";
}
else if(score>=70 && score<=79) {
    grade="B";
}
else if(score>=60 && score<=69) {
    grade="C";
}
else if(score>=50 && score<=59) {
    grade="D";
}
else{
    grade="F";
}
console.log("Your grade is:",grade);*/

let companies= ["Boot", "Apple", "Amazon","Uber","Goole"];
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(2,1,"Ola");
console.log(companies);
companies.push("Amazon")
console.log(companies);

