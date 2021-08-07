import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SurveySearchDialogComponent } from "./survey-search-dialog/survey-search-dialog.component";
import { setId } from "../../store/id/id.actions";
import { Store } from "@ngrx/store";
import { State } from "../../store/state";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor(private dialog: MatDialog, private store: Store<State>) {}

  searchSurvey(): void {
    const dialogRef = this.dialog.open(SurveySearchDialogComponent);
    dialogRef.afterClosed().subscribe((result: string) => {
      this.store.dispatch(setId({ id: result }));
    });
  }
}
