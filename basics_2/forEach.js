const lang = ["py", "js", "cpp", "java"]

lang.forEach(function (item) {
    // console.log(item);
})

lang.forEach((i) => {
    // console.log(i);
})

lang.forEach((i, j, k) => {
    // console.log(i, j, k);
    
})
// the parametars that goes in the callback function are element, index and array

const arry = [
    {
        language: "python",
        languageFile: "py"
    },
    {
        language: "java",
        languageFile: "java"
    },
    {
        language: "javascript",
        languageFile: "js"
    }
]

arry.forEach((item) => {
    // console.log(item.language);

})

const value = lang.forEach((i) => {
    return i;
})
// console.log(value);
// this way it dosent return any values

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numsLess_6 = numArray.filter((num) => (num < 6))
console.log(numsLess_6);

// when used {} "return" word must be used 

const newNums = []

numArray.forEach((num) =>{
    if (num <= 6){
        newNums.push(num)
    }
})
console.log(newNums);

const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      publicationYear: 1960,
      isAvailable: true,
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      publicationYear: 1949,
      isAvailable: false,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      publicationYear: 1925,
      isAvailable: true,
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      publicationYear: 1951,
      isAvailable: false,
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      publicationYear: 1937,
      isAvailable: true,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      publicationYear: 1813,
      isAvailable: true,
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Adventure",
      publicationYear: 1988,
      isAvailable: true,
    },
  ];

const filterBk = books.filter((Bk) => {
    return (Bk.genre == "Fiction")
})

console.log(filterBk);
