export interface CovidQuestionnaire {
    bodyTemperature: Question;
    cough: Question;
    age: Question;
    generalFeeling: Question;
    pulse: Question;
    breathingPatterns: Question;
}

export interface Question {
    question: string;
    options?: {
        options: string[];
        key: string;
    };
    additionalInfo?: string;
}
