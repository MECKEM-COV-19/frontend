export interface BaseQuestion {
    question: string;
    additionalInfo?: {
        title: string;
        infos: AdditionalInfo[]
    };
    key: string;
    placeholder?: string;
    title?: string;
}

export interface FormatQuestion extends BaseQuestion {
    format: QuestionFormat;
}

export interface OptionQuestion extends BaseQuestion {
    options: OptionValue[];
}

export function instanceOfFormatQuestion(object: any): object is FormatQuestion {
    return 'format' in object;
}

export function instanceOfOptionQuestion(object: any): object is OptionQuestion {
    return 'options' in object;
}

export type Question = FormatQuestion | OptionQuestion;

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
