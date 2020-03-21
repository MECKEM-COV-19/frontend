export interface CovidQuestionnaire {
    bodyTemperature: Question;
    cough: Question;
    age: Question;
}

export interface Question {
    question: string;
    options?: string[];
}
