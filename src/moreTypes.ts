

type Book = {
    name: string
}
let bookString = '{"name":"any book here"}'
let bookObject = JSON.parse(bookString) as Book
console.log(bookObject)

const inputElement = document.getElementById("username") as HTMLInputElement


