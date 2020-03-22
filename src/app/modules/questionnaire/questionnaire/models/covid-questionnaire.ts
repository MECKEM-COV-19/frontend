export interface Question {
    question: string;
    additionalInfo?: {
        title: string;
        infos: AdditionalInfo[]
    };
    key: string;
    format?: QuestionFormat;
    options?: OptionValue[];
    placeholder?: string;
    title?: string;
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
