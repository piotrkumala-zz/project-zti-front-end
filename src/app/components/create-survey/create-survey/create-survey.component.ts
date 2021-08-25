import { Component } from '@angular/core';
import { ClientSurvey } from '../../../api/models/client-survey';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { QuestionNode } from '../../../models/questionNode';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss'],
})
export class CreateSurveyComponent {
  public newSurvey: ClientSurvey = {};
  treeControl = new NestedTreeControl<QuestionNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<QuestionNode>();

  constructor() {
    this.dataSource.data = [this.initialNode()];
  }

  addChildren(node: QuestionNode): void {
    node.children = [this.createQuestionNode(), this.createQuestionNode()];
    this.refreshTree(this.dataSource);
  }

  hasChild = (_: number, node: QuestionNode): boolean =>
    !!node.children && node.children.length > 0;

  saveSurvey(): void {
    console.log('saveSurvey');
  }

  clear(): void {
    this.dataSource.data = [this.initialNode()];
  }

  private refreshTree = (
    dataSource: MatTreeNestedDataSource<QuestionNode>,
  ): void => {
    const _data = dataSource.data;
    dataSource.data = [];
    dataSource.data = _data;
  };

  private createQuestionNode = (): QuestionNode => ({
    questionText: new FormControl('', [Validators.required]),
    answerText: new FormControl('', [Validators.required]),
  });

  private initialNode = (): QuestionNode => ({
    questionText: new FormControl('', [Validators.required]),
  });
}
