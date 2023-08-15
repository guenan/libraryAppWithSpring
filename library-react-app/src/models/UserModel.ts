import LoadModel from "./LoadModel";

class UserModel{
    private _userId!: number;
    private _userName!: string;
    private _userPassword!: string;
    private _userEmail!: string;
    private _userRole!: string;
    private _loans: Array<LoadModel> | null = [];


    constructor() {
    }

    get userId(): number {
        return this._userId;
    }

    set userId(value: number) {
        this._userId = value;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get userPassword(): string {
        return this._userPassword;
    }

    set userPassword(value: string) {
        this._userPassword = value;
    }

    get userEmail(): string {
        return this._userEmail;
    }

    set userEmail(value: string) {
        this._userEmail = value;
    }

    get userRole(): string {
        return this._userRole;
    }

    set userRole(value: string) {
        this._userRole = value;
    }

    get loans(): Array<LoadModel> | null {
        return this._loans;
    }

    set loans(value: Array<LoadModel> | null) {
        this._loans = value;
    }
}

export default UserModel;