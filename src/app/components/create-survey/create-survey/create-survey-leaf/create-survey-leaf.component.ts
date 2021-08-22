import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionNode } from '../../../../models/questionNode';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-survey-leaf',
  templateUrl: './create-survey-leaf.component.html',
  styleUrls: ['./create-survey-leaf.component.scss'],
})
export class CreateSurveyLeafComponent {
  @Output() addChildren = new EventEmitter<QuestionNode>();
  @Input() node!: QuestionNode;
  @Input() allowAdd = false;

  answerFromControl(): FormControl {
    return this.node.answerText ?? new FormControl();
  }
}
