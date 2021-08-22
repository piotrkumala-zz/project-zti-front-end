import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../../store/state';
import { ClientSurvey } from '../../../api/models/client-survey';
import { setNewSurvey } from '../../../store/newSurvey/newSurvey.actions';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { QuestionNode } from '../../../models/questionNode';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss'],
})
export class CreateSurveyComponent implements OnInit, OnDestroy {
  public newSurvey: ClientSurvey = {};
  treeControl = new NestedTreeControl<QuestionNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<QuestionNode>();
  private subscription!: Subscription;

  constructor(private store: Store<State>) {
    this.dataSource.data = [
      {
        questionText: new FormControl(''),
      },
    ];
  }

  ngOnInit(): void {
    this.subscription = this.store
      .select('newSurvey')
      .subscribe((newSurvey) => {
        this.newSurvey = newSurvey ?? this.newSurvey;
      });
    this.store.dispatch(setNewSurvey({ newSurvey: { title: 'test' } }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addChildren(node: QuestionNode): void {
    node.children = [this.createQuestionNode(), this.createQuestionNode()];
    this.refreshTree(this.dataSource);
  }

  hasChild = (_: number, node: QuestionNode): boolean =>
    !!node.children && node.children.length > 0;

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
}
