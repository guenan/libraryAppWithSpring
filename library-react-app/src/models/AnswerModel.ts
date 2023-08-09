class AnswerModel{
    private _answerId: number;
    private _answerContent: string;
    private _answerDate: string;


    constructor(answerId: number, answerContent: string, answerDate: string) {
        this._answerId = answerId;
        this._answerContent = answerContent;
        this._answerDate = answerDate;
    }


    get answerId(): number {
        return this._answerId;
    }

    set answerId(value: number) {
        this._answerId = value;
    }

    get answerContent(): string {
        return this._answerContent;
    }

    set answerContent(value: string) {
        this._answerContent = value;
    }

    get answerDate(): string {
        return this._answerDate;
    }

    set answerDate(value: string) {
        this._answerDate = value;
    }
}

export default AnswerModel;