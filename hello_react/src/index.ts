console.log("This is a typescript file!!!");
type StringArray = string[];
interface User{
    name: string;
    age:number;
    isValidVoter:boolean;
}
let User1: User = {
    name:"Harleen",
    age:21,
    isValidVoter:true
};
let User2: User = {
    name:"Imanpal",
    age:11,
    isValidVoter:false
};

console.log("Harleen is a Valid Voter",User1.isValidVoter);
console.log("Imanpal is a Valid Voter",User2.isValidVoter);
//tsx .\src\index.ts  WILL RUN THIS THING