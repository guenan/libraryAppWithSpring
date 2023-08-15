class QuestionModel{
    private _questionId: number;
    private _questionContent: string;
    private _questionDate: string;


    constructor(questionId: number, questionContent: string, questionDate: string) {
        this._questionId = questionId;
        this._questionContent = questionContent;
        this._questionDate = questionDate;
    }


    get questionContent(): string {
        return this._questionContent;
    }

    set questionContent(value: string) {
        this._questionContent = value;
    }


    get questionId(): number {
        return this._questionId;
    }

    set questionId(value: number) {
        this._questionId = value;
    }

    get questionDate(): string {
        return this._questionDate;
    }

    set questionDate(value: string) {
        this._questionDate = value;
    }
}

export default QuestionModel;