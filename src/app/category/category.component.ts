import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {

  @ViewChild('dialogRef') dialogRef!: TemplateRef<any>;
  public categoryName : any = '';
  myFooList = [];
  public myTempDialog: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openTempDialog() {
    this.myTempDialog = this.dialog.open(this.dialogRef, { data: this.myFooList });
    this.myTempDialog.afterClosed().subscribe((res) => {
      // Data back from dialog

      console.log({ res });
    });
  }

  add(){
    this.myFooList.push(this.categoryName);
    this.myTempDialog.afterClosed().subscribe((res) => {
      // Data back from dialog
    console.log(this.myFooList); 
      console.log({ res });
    });
  }

}
