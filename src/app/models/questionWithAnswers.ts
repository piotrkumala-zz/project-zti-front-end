import { ClientQuestion } from '../api/models/client-question';

export type QuestionWithAnswers = ClientQuestion & { answeredId?: string };
