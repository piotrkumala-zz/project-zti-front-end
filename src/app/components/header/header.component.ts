import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SurveySearchDialogComponent } from './survey-search-dialog/survey-search-dialog.component';
import { setId } from '../../store/id/id.actions';
import { Store } from '@ngrx/store';
import { State } from '../../store/state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private dialog: MatDialog,
    private store: Store<State>,
    private router: Router,
  ) {}

  searchSurvey(): void {
    const dialogRef = this.dialog.open(SurveySearchDialogComponent);
    dialogRef.afterClosed().subscribe(async (result: string) => {
      this.store.dispatch(setId({ id: result }));
      await this.router.navigate(['/answer']);
    });
  }
}
