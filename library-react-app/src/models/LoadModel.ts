import UserModel from "./UserModel";

class LoadModel{

    private _loanId: number;
    private _loanDate: string;
    private _user!: UserModel | null;


    constructor(loanId: number, loanDate: string) {
        this._loanId = loanId;
        this._loanDate = loanDate;
    }


    get loanId(): number {
        return this._loanId;
    }

    set loanId(value: number) {
        this._loanId = value;
    }

    get loanDate(): string {
        return this._loanDate;
    }

    set loanDate(value: string) {
        this._loanDate = value;
    }


    get user(): UserModel | null {
        return this._user;
    }

    set user(value: UserModel | null) {
        this._user = value;
    }
}

export default LoadModel;