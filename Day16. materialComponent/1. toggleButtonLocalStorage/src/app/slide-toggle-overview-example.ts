import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

/**
 * @title Basic slide-toggles
 */
@Component({
  selector: 'slide-toggle-overview-example',
  templateUrl: 'slide-toggle-overview-example.html',
  styleUrls: ['slide-toggle-overview-example.css'],
})
export class SlideToggleOverviewExample {

  checked: boolean = false;

  constructor(
    private dialog: MatDialog) {
  }

  change(e) {
    if (this.checked) {
      // at first, reset to the previous value
      // so that the user could not see that the mat-slide-toggle has really changed
      e.source.checked = true;

      const dialogRef = this.dialog.open(ConfirmDialogComponent);
      dialogRef.afterClosed().subscribe(response => {
        console.log( 'response ', response );
        if (response) {
           this.checked = !this.checked;
           console.log("toggle")
        } else {
          console.log("toggle should not change if I click the cancel button")
        }
      })
    } else {
      this.checked = !this.checked;
    }
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */