import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumericInput]'
})
export class NumericInputDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: any) {
    let input = event.target.value;
    // Remove non-numeric characters
    input = input.replace(/[^0-9]/g, '');
    // Check if the input is a valid number
    const parsedNumber = parseInt(input, 10);
    if (!isNaN(parsedNumber)) {
      // Set the formatted number with commas as the input value
      const formattedNumber = this.formatNumberWithCommas(parsedNumber);
      this.el.nativeElement.value = formattedNumber;
    } else {
      this.el.nativeElement.value = '';
    }
  }

  formatNumberWithCommas(number: number): string {
    // Format the number with commas
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
