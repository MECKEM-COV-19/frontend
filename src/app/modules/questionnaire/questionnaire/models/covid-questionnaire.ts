export interface CovidQuestionnaire {
    bodyTemperature: Question;
    cough: Question;
    age: Question;
    generalFeeling: Question;
    pulse: Question;
    breathingPatterns: Question;
    isSarsCov2Positive: Question;
}

export interface Question {
    question: string;
    additionalInfo?: {
        title: string;
        infos: AdditionalInfo[]
    };
    key: string;
    format?: QuestionFormat;
    options?: OptionValue[];
}

export enum QuestionFormat {
    Number = 0
}

export interface OptionValue {
    text: string;
    value?: any;
}

export interface AdditionalInfo {
    href?: string;
    text: string;
}
