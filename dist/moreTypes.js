let bookString = '{"name":"any book here"}';
let bookObject = JSON.parse(bookString);
// 'as' keyword is here a type assertion 
console.log(bookObject);
const inputElement = document.getElementById("username");
let value;
value = 1;
value = [2, 3, 5];
value = "string";
value.toUpperCase();
let newValue;
newValue = 1;
newValue = [2, 3, 5];
newValue = "string";
// newValue.toUpperCase() // this will cause error as unknown is given
if (typeof newValue === "string")
    newValue.toUpperCase();
try {
}
// catch (error :any) { do not write any here
// console.log(error.message) this will cause error 
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("Error", error);
}
const data = "any data";
const strdata = data; // this means accepting it as string
function redirectRole(role) {
    if (role === "admin") {
        console.log("redirecting to admin dashboard");
        return;
    }
    if (role === "user") {
        console.log("redirecting to user dashboard");
        return;
    }
    // role; // role will show never as this should not be reachable unless a new type added
    role; // it will now show type superadmin
}
export {};
// function neverReturn(): never {
// while (true) { }// infinite loop
// }
//# sourceMappingURL=moreTypes.js.map