import { TestBed } from '@angular/core/testing';

import { QuestionnaireQuestionsService } from './questionnaire-questions.service';

describe('QuestionnaireQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionnaireQuestionsService = TestBed.inject(QuestionnaireQuestionsService);
    expect(service).toBeTruthy();
  });
});
