import BookReviewModel from "./BookReviewModel";

class BookModel{

    private _bookId!: number;
    private _bookName!: string;
    private _bookDescription!: string;
    private _bookCategory!: string;
    private _bookImage!: string;
    private _bookAuthor!: string;
    private _copies_available!: number;
    private _copies_in_stock!: number;

     private _bookReviews: Array<BookReviewModel> | null = [];


    get bookId(): number {
        return this._bookId;
    }

    set bookId(value: number) {
        this._bookId = value;
    }

    get bookName(): string {
        return this._bookName;
    }

    set bookName(value: string) {
        this._bookName = value;
    }

    get bookDescription(): string {
        return this._bookDescription;
    }

    set bookDescription(value: string) {
        this._bookDescription = value;
    }

    get bookCategory(): string {
        return this._bookCategory;
    }

    set bookCategory(value: string) {
        this._bookCategory = value;
    }

    get bookImage(): string {
        return this._bookImage;
    }

    set bookImage(value: string) {
        this._bookImage = value;
    }

    get bookAuthor(): string {
        return this._bookAuthor;
    }

    set bookAuthor(value: string) {
        this._bookAuthor = value;
    }

    get copies_available(): number {
        return this._copies_available;
    }

    set copies_available(value: number) {
        this._copies_available = value;
    }


    get copies_in_stock(): number {
        return this._copies_in_stock;
    }

    set copies_in_stock(value: number) {
        this._copies_in_stock = value;
    }


    get bookReviews(): Array<BookReviewModel> | null {
        return this._bookReviews;
    }

    set bookReviews(value: Array<BookReviewModel> | null) {
        this._bookReviews = value;
    }
}

export default BookModel;