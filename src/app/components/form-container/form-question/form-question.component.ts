import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../question-base';

@Component({
  selector: 'app-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.scss']
})
export class FormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
