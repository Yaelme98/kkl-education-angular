import { QuestionBase } from 'src/app/components/form-container/question-base';
import { FormControl, FormBuilder, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private fb: FormBuilder
  ) { }


  private errorsMessage = {
    'required': (key: string): string => `${key} is required`,
    'pattern': (key: string): string => `${key} is not in  valid format`,
    'string.empty': (key: string): string => `${key} is required`,
    'number.base': (key: string): string => `${key} must be a number`,
  };


  private setFormGroup = (formTemplate: QuestionBase<string>[]) => formTemplate.map((question) => question).reduce((acc, control) => {
    const { key, value, label, validations } = control;
    return { ...acc, [key || label.toLowerCase()]: [value, validations] };
  }, {});


  public setGroup(quiestions: QuestionBase<string>[]) {
    return this.fb.group(this.setFormGroup(quiestions))
  }

  // handle input error messages
  public getErrorMessage(control: FormControl, placeHolder: string): string {

    if (control.hasError('required')) {
      return 'שדה חובה ';
    }

    if (control.hasError('min')) {
      return 'ערך קצר מידי ';
    }


    if (control.hasError('pattern')) {
      return `invalid ${placeHolder} format`;
    }

    return ''

  }



}
