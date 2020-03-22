import { CovidQuestionnaire } from 'src/app/modules/questionnaire/questionnaire/models/covid-questionnaire';

export class DefaultCovidQuestionnaire {
    readonly covidQuestionnaire: CovidQuestionnaire = {
        bodyTemperature: {
          question: 'What is your body temperature?'
        },
        cough: {
          question: 'Do you have to cough?',
          options: {
            options: [
              { text: 'Dry cough' },
              { text: 'Productive cough' },
              { text: 'None' }
            ],
            key: 'cough'
          }
        },
        breathingPatterns: {
          question: 'What is your breathing pattern?',
          options: {
            options: [
              { text: 'Normal' },
              { text: 'Biot\'s respiration' },
              { text: 'Kussmaul breathing' },
              { text: 'Cheyne-Stokes respiration' },
              { text: 'I don\'t know' }
            ],
            key: 'breathingPatterns'
          },
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
        generalFeeling: {
          question: 'How do you feel?',
          options: {
            options: [
             { text: 'good' },
             { text: 'normal' },
             { text: 'bad' },
             { text: 'critical' }
            ],
            key: 'generalFeeling'
          }
        },
        age: {
          question: 'How old are you?'
        },
        pulse: {
          question: 'What is your pulse?'
        },
        isSarsCov2Positive: {
          question: 'Are you positively tested for SARS-CoV-2?',
          options: {
            key: 'isPositive',
            options: [
              { text: 'Yes', value: true },
              { text: 'No', value: false }
            ]
          }
        }
      };
}