import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../../store/state';
import { ClientSurvey } from '../../../api/models/client-survey';
import { setNewSurvey } from '../../../store/newSurvey/newSurvey.actions';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface QuestionNode {
  text: string;
  children?: QuestionNode[];
}

const TREE_DATA: QuestionNode[] = [
  {
    text: 'Base Question',
    children: [{ text: 'Apple' }, { text: 'Banana' }, { text: 'Fruit loops' }],
  },
  {
    text: 'Vegetables',
    children: [
      {
        text: 'Green',
        children: [
          { text: 'Broccoli' },
          { text: 'Brussels sprouts' },
          {
            text: 'test',
            children: [
              { text: 'test1' },
              { text: 'test2', children: [{ text: 'test3' }] },
            ],
          },
        ],
      },
      {
        text: 'Orange',
        children: [{ text: 'Pumpkins' }, { text: 'Carrots' }],
      },
    ],
  },
];

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss'],
})
export class CreateSurveyComponent implements OnInit, OnDestroy {
  public newSurvey: ClientSurvey = {};
  private subscription!: Subscription;
  treeControl = new NestedTreeControl<QuestionNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<QuestionNode>();

  constructor(private store: Store<State>) {
    this.dataSource.data = TREE_DATA;
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

  hasChild = (_: number, node: QuestionNode): boolean =>
    !!node.children && node.children.length > 0;
}
