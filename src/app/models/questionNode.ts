import { FormControl } from '@angular/forms';

export type QuestionNode = {
  isLeft: boolean;
  questionText: FormControl;
  answerText?: FormControl;
  children?: QuestionNode[];
};
