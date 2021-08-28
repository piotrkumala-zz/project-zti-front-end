import { Component } from '@angular/core';
import { ClientSurvey } from '../../../api/models/client-survey';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { QuestionNode } from '../../../models/questionNode';
import { FormControl, Validators } from '@angular/forms';
import { SurveyControllerService } from '../../../api/services/survey-controller.service';
import { CreateSurveyQuestion } from '../../../api/models/create-survey-question';
import { MatDialog } from '@angular/material/dialog';
import { CreateSurveySummaryComponent } from './create-survey-summary/create-survey-summary.component';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss'],
})
export class CreateSurveyComponent {
  public newSurvey: ClientSurvey = {};
  treeControl = new NestedTreeControl<QuestionNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<QuestionNode>();
  titleControl = new FormControl('', [Validators.required]);
  descriptionControl = new FormControl('', [Validators.required]);

  constructor(
    private service: SurveyControllerService,
    private dialog: MatDialog,
  ) {
    this.dataSource.data = [this.initialNode()];
  }

  addChildren(node: QuestionNode): void {
    node.children = [
      this.createQuestionNode(true),
      this.createQuestionNode(false),
    ];
    this.refreshTree(this.dataSource);
  }

  hasChild = (_: number, node: QuestionNode): boolean =>
    !!node.children && node.children.length > 0;

  saveSurvey(): void {
    const nodeToQuestion = (node: QuestionNode): CreateSurveyQuestion => ({
      questionText: node.questionText.value,
      answerText: node.answerText?.value,
      children: node.children?.map(nodeToQuestion),
      isLeft: node.isLeft,
    });
    this.service
      .saveSurvey({
        body: {
          title: this.titleControl.value,
          description: this.descriptionControl.value,
          questions: this.dataSource.data.map(nodeToQuestion),
        },
      })
      .subscribe((x) => {
        const dialogRef = this.dialog.open(CreateSurveySummaryComponent, {
          data: { surveyId: x.title },
        });
        dialogRef.afterClosed().subscribe(() => {
          this.clear();
        });
      });
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

  private createQuestionNode = (isLeft: boolean): QuestionNode => ({
    questionText: new FormControl('', [Validators.required]),
    answerText: new FormControl('', [Validators.required]),
    isLeft: isLeft,
  });

  private initialNode = (): QuestionNode => ({
    questionText: new FormControl('', [Validators.required]),
    isLeft: false,
  });
}
