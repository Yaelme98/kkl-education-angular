import { Component, OnInit, ViewChild } from '@angular/core';
import { Offset } from '../form-container/dynamic-form-question/question-offset';
import { FormContainerComponent } from '../form-container/form-container.component';
import { QuestionBase } from '../form-container/question-base';
import { QuestionCalendar } from '../form-container/question-calendar';
import { QuestionTextarea } from '../form-container/question-textarea';
import { TextboxQuestion } from '../form-container/question-textbox';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  @ViewChild('drawerForm', { static: true })
  drawerForm!: FormContainerComponent;
  isFormOpen: boolean = false;
  isOpen: boolean = false;
  index: number = -1;



  reminderForm: QuestionBase<string | Date>[] = [
    new QuestionCalendar({
      key: 'date',
      columns: 'span 6',
      label: 'תאריך',
      value: new Date(),
      order: 3,
    }),
    new Offset({
      columns: 'span 1',
    }),

    new TextboxQuestion({
      key: 'time',
      columns: 'span 5',
      label: 'שעה',
      value: '',
      order: 1,
    }),
    new QuestionTextarea({
      key: 'comment',
      label: 'תזכורת',
      innerLabel: '',
      columns: 'span 12',
      order: 7,
      value: '',
    }),
  
  ];

  reminderArray: { date: Date; time: string; comment: string; status:boolean }[] = [
    {
      date: new Date(),
      time: '08:00',
      comment: 'לגזום את כל העצים ממזרח לוואדי ',
      status:false
    },
    {
      date: new Date(),
      time: '08:00',
      comment: 'להוסיך את קבוצת הילדים החמישית לטיול בנס הרים',
      status:false
    },
  ];

  newCommentHandler(newComment: { date: Date; time: string; comment: string ;  }) {
    console.log('newComment');
const newCommentToAdd= {...newComment, status:false}
    if (this.index > -1) {
      this.reminderArray.splice(this.index, 1, newCommentToAdd);
      this.index = -1;
    } else {
      this.reminderArray.push(newCommentToAdd);
    }
    this.drawerForm.form.reset();
  }

  editComment(index: number) {
    console.log(new Date(this.reminderArray[index].date));

    this.drawerForm.form.patchValue({
      date: this.datePipe.transform(
        this.reminderArray[index].date,
        'yyyy-MM-dd'
      ),
      time: this.reminderArray[index].time,
      comment: this.reminderArray[index].comment,
    });
    this.index = index;
  }

  deleteComment(index: number) {
    this.reminderArray.splice(index, 1);
  }

  toggleDrawer() {
    this.isOpen = !this.isOpen;
  }

  toggleReminderStatus(index:number){
    this.reminderArray[index].status=!this.reminderArray[index].status
  
  
  }

  openFormHandler() {
    this.isFormOpen = true;
  }

  deleteFormInputs(e: Event) {

    e.preventDefault();
    this.drawerForm.form.reset();
    this.isFormOpen = false;
  }

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {}
}
