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

// The `instanceOfXXXQuesiton` methods are just boiler plate code so that you can later check the type
// This step was the best way to have a type safe system where a question couldn't have both a format and options
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
