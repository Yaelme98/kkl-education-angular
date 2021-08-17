import { Component, OnInit, forwardRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';


import { MatInput } from '@angular/material/input';
// import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true
    },
  ]
})
export class FormInputComponent implements OnInit {

  @ViewChild(MatInput) input!: HTMLInputElement;

  @Input() public control!: FormControl

  @Input() public type!: string;
  @Input() public label!: string;
  @Input() public placeHolder!: string;
  @Input() public hint!: string;
  @Input() public controlName!: string;

  @Input() public serverErrorMode!: boolean;
  @Input() public pendingHint!: boolean;

  public value!: any
  public error!: string
  public serverError!: string

  public OnChange!: (event : Event) => void
  public onTouched!: () => void
  public disabled!: boolean

  constructor(
    // private messageServcie: MessageService
  ) { }

  ngOnInit(): void {

    this.subscribeToControl();
  }

  // ControlValueAccessor logic

  public writeValue(value: any): void {
    this.value = value ? value : ""
  }

  public registerOnChange(fn: any): void {
    this.OnChange = fn
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  public handleChange(event: Event) {
    console.log(event)

  }

  // subscription section


  private subscribeToControl() {
   
  }


  // LOGIC SECTION

  // method to handle validation messages
  public validate() {

    // this.error = this.messageServcie.getErrorMessage(this.control, this.placeHolder)

    this.control.valueChanges.subscribe(
      () => {
        // this.error = this.messageServcie.getErrorMessage(this.control, this.placeHolder)
      }
    )
  }

  // end of logic section
}
