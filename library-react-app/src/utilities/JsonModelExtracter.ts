import BookReviewModel from "../models/BookReviewModel";
import UserModel from "../models/UserModel";
import BookModel from "../models/BookModel";


    export function isDefined<T>(value: T | null | undefined): value is T {
        return value !== undefined && value !== null;
    }
    export const getBookModelFromJsonBook = (jsonBook: any): BookModel | null => {
        if(isDefined(jsonBook)){
            let book: BookModel = new BookModel();
            book.bookId = jsonBook.bookId;
            book.bookName =  jsonBook.bookName;
            book.bookDescription = jsonBook.bookDescription;
            book.bookCategory = jsonBook.bookCategory;
            book.bookImage = jsonBook.bookImage;
            book.bookAuthor = jsonBook.bookAuthor;
            book.copies_available = jsonBook.copies_available;
            book.copies_in_stock = jsonBook.copies_in_tock;

            const bookReviewsList: BookReviewModel[] = getBookReviewsListFromJsonBookReviewList(jsonBook.bookReviews);
            book.bookReviews = bookReviewsList;

            return book;
        }
        return null;
    }

    export const getBookModelListFromJsonBookList = (jsonBookList: any): BookModel[] => {
        if(isDefined(jsonBookList)){
            let bookModelList: BookModel[] = [];
            for (const jsonBookListElement of jsonBookList) {
                const bookModel: BookModel | null = getBookModelFromJsonBook(jsonBookListElement);
                if(isDefined(bookModel))
                    bookModelList.push(bookModel);
            }
            return bookModelList;
        }

        return [];
    }
    export const getUserModelFromJsonUser = (jsonUser: any): UserModel | null => {
        if(isDefined(jsonUser)){
            let user: UserModel = new UserModel();
            user.userId = jsonUser.userId;
            user.userName = jsonUser.userName;
            user.userPassword = jsonUser.userPassword;
            user.userEmail = jsonUser.userEmail;
            user.userRole = jsonUser.userRole;

            return user;
        }

        return null;
    }

    export const getBookReviewsModelFromJsonBookReview = (jsonBookReview: any): BookReviewModel | null => {
        if(isDefined(jsonBookReview)){
            let bookReview: BookReviewModel = new BookReviewModel();
            bookReview.bookReviewId = jsonBookReview.bookReviewId;
            bookReview.bookReviewScore = jsonBookReview.bookReviewScore;
            bookReview.bookReviewDescription = jsonBookReview.bookReviewDescription;
            bookReview.bookReviewDate = jsonBookReview.bookReviewDate;

            const user: UserModel | null = getUserModelFromJsonUser(jsonBookReview.user);
            bookReview.user = user;
            return bookReview;
        }

        return null;
    }
    export const getBookReviewsListFromJsonBookReviewList = (jsonBookReviewList: any): BookReviewModel[] => {
        if(isDefined(jsonBookReviewList)){
            let bookReviewList: BookReviewModel[] = [];

            for (const bookReviewElement of jsonBookReviewList) {
                const bookReview: BookReviewModel | null = getBookReviewsModelFromJsonBookReview(bookReviewElement);
                if(isDefined(bookReview))
                    bookReviewList.push(bookReview);
            }
            return bookReviewList;
        }
        return [];
    }



