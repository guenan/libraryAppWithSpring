import BookModel from "./BookModel";
import UserModel from "./UserModel";

class BookReviewModel{
    private _bookReviewId!: number;
    private _bookReviewScore!: number;
    private _bookReviewDescription!: string;
    private _bookReviewDate!: string;
    private _user!: UserModel | null;

    private _book!: BookModel | null;

    constructor() {
    }


    get bookReviewId(): number {
        return this._bookReviewId;
    }

    set bookReviewId(value: number) {
        this._bookReviewId = value;
    }

    get bookReviewScore(): number {
        return this._bookReviewScore;
    }

    set bookReviewScore(value: number) {
        this._bookReviewScore = value;
    }

    get bookReviewDescription(): string {
        return this._bookReviewDescription;
    }

    set bookReviewDescription(value: string) {
        this._bookReviewDescription = value;
    }

    get bookReviewDate(): string {
        return this._bookReviewDate;
    }

    set bookReviewDate(value: string) {
        this._bookReviewDate = value;
    }


    get user(): UserModel | null {
        return this._user;
    }

    set user(value: UserModel | null) {
        this._user = value;
    }

    get book(): BookModel | null {
        return this._book;
    }

    set book(value: BookModel | null) {
        this._book = value;
    }
}

export default BookReviewModel;