
class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.isbn = isbn
    }
  }

  class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = "" } = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = new Book( title, author, pubDate, isbn );
        this._books.push(newBook);
      }
    }
    deleteBook(isbn){
        // find index of book of the given isbn without the "_books" array
        let indexOfBookToRemove = null
        let index = 0

        /*for (const book of this._books){
            if (this.books.isbn == isbn){
                indexOfBookToRemove = index
                break;
            }

        index += 1
        }*/

        for (let index = 0; index < this._books.length; index++){
        const book = this.books[index]
        if (this.books.isbn == isbn){
            indexOfBookToRemove = index
            break;
        }
        }

        /*
        varibale = null
        loop (for/while){
            filtering (if){
                modify/update variable
                (potetially -- but not neccisarily -- exit the loop early)
            }
        }
        // varibale is ready to go
        */
        // once the index has been found, remove the entry from "_books"
        this._books.splice(indexOfBookToRemove, 1)
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`)
      }
    }
  }

  const myBook = new Book("Ap Calc Crash Course,","Banu et al", "2013", "1234567890")
  const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0987654321")
  const aGameOfthrones = new Book("A Game Of Thrones", "George R. R. Martin", "08/1/1996", "0-553-10354-7")
  const harryPotter = new Book("Harry Potter and the Sorcers Stone", "J. K. Rowling", "06/26/1997", "0-7475-3269-9")


  let uoLibrary = new Library("knight Library")
  console.log("ADDING BOOKS")
  uoLibrary.addBook(myBook)
  uoLibrary.addBook(atomicHabits)
  uoLibrary.addBook(aGameOfthrones)
  uoLibrary.addBook(harryPotter)
  uoLibrary.listBooks()
  console.log("DELETE BOOKS")
  uoLibrary.deleteBook("1234567890")
  uoLibrary.listBooks()