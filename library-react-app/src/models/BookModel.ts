class BookModel{
    bookId: number;
    bookName: string;
    bookDescription: string;
    bookCategory: string;
    bookImage: string;
    bookAuthor: string;
    copies_available: number;
    copies_in_tock: number;


    constructor(bookId: number, bookName: string, bookDescription: string, bookCategory: string, bookImage: string, bookAuthor: string, copies_available: number, copies_in_tock: number) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.bookDescription = bookDescription;
        this.bookCategory = bookCategory;
        this.bookImage = bookImage;
        this.bookAuthor = bookAuthor;
        this.copies_available = copies_available;
        this.copies_in_tock = copies_in_tock;
    }
}

export default BookModel;