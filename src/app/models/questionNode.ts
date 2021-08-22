import { FormControl } from '@angular/forms';

export type QuestionNode = {
  questionText: FormControl;
  answerText?: FormControl;
  children?: QuestionNode[];
};
