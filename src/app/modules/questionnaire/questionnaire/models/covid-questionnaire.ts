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
        options: string[];
        key: string;
    };
    additionalInfo?: string;
    linkHelp?: LinkHelp;
}

export interface LinkHelp {
    generalInfo: string;
    links: Link[];
}

export interface Link {
    href: string;
    text: string;
}
