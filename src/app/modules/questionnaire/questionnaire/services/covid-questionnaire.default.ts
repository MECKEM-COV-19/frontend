import { QuestionFormat, Question } from 'src/app/modules/questionnaire/questionnaire/models/covid-questionnaire';

export class DefaultCovidQuestionnaire {
    static readonly covidQuestionnaire: Question[] = [
        {
            question: 'Are you positively tested for SARS-CoV-2?',
            key: 'isPositive',
            options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
            ]
        },
        {
            question: 'What is your body temperature?',
            key: 'bodyTemperature',
            format: QuestionFormat.Number,
            placeholder: 'Body temperature in Celsius',
            title: 'Body temperature'
        },
        {
            question: 'Do you have to cough?',
            options: [
                { text: 'Dry cough' },
                { text: 'Productive cough' },
                { text: 'None' }
            ],
            key: 'cough',
        },
        {
            question: 'What is your breathing pattern?',
            options: [
                { text: 'Normal' },
                { text: 'Biot\'s respiration' },
                { text: 'Kussmaul breathing' },
                { text: 'Cheyne-Stokes respiration' },
                { text: 'I don\'t know' }
            ],
            key: 'breathingPatterns',
            additionalInfo: {
                title: 'How do I test my breathing pattern?',
                infos: [
                    {
                        href: 'https://flexikon.doccheck.com/de/Cheyne-Stokes-Atmung',
                        text: 'Cheyne-Stokes-Atmung - DocCheck Flexikon'
                    },
                    {
                        href: 'https://en.wikipedia.org/wiki/Cheyne%E2%80%93Stokes_respiration',
                        text: 'Cheyne–Stokes respiration'
                    }
                ]
            }
        },
        {
            question: 'How do you feel?',
            options: [
                { text: 'good' },
                { text: 'normal' },
                { text: 'bad' },
                { text: 'critical' }
            ],
            key: 'generalFeeling'
        },
        {
            question: 'How old are you?',
            key: 'age',
            format: QuestionFormat.Number,
            placeholder: 'Age'
        },
        {
            question: 'What is your pulse?',
            key: 'pulse',
            format: QuestionFormat.Number,
            placeholder: 'Pulse in beats per minute'
        },
        {
            question: 'If you have a Peak Flow Meter, what is the current value?',
            key: 'peakFlowMeter',
            format: QuestionFormat.Number,
            placeholder: 'Peak Flow Meter value'
        },
        {
            question: 'Are you easier of ouf breath?',
            key: 'isEasierOutOfBreath',
            options: [
                { text: 'Yes', value: true },
                { text: 'No', value: false }
            ]
        }
    ];
}
