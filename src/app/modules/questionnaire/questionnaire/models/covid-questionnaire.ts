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
    options?: {
        options: OptionValue[];
        key: string;
    };
    additionalInfo?: {
        title: string;
        infos: AdditionalInfo[]
    };
}

interface OptionValue {
    text: string;
    value?: any;
}

export interface AdditionalInfo {
    href?: string;
    text: string;
}
