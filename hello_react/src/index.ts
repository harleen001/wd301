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


let MYNUMBER : number;
//MYNUMBER="HELLO WORLD"; //ERROR
MYNUMBER = 5;
console.log(MYNUMBER);
//tsx .\src\index.ts  WILL RUN THIS THING

//ANY DATA TYPE
let names: any = "hello";
names = 42;
names = false;
//void function
function printHello(): void {
    console.log("Hello!");
  }

  //throw error
  function throwError(): never {
    throw new Error("An error occurred!");
  }

  //taking annotations from string or like a parameter
  function addUser(user: User): string {
    return user.name + " added successfully";
}
console.log(addUser(User1));

let userName = "Jane";  // type: string
let userID = 10;  // type: number
let uniqueID = userName + userID;
console.log(uniqueID);