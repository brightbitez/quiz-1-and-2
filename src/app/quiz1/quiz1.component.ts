import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.css']
})
export class Quiz1Component {
  inputNumber = 0;
  title = 'quiz1';
  numberBoolean = false;
  processNumber(event: any) {
    if(event.target.value < 0) {
        event.target.value = 1;
    }
    let inputNumber = event.target.value;
    this.inputNumber = Math.round(inputNumber);
  }
  identifyNumber(event: any) {
      if (event.target.value === "isPrime") {
          this.isPrime();
          console.log('call');
      }
      else if (event.target.value === 'isFibonacci') {
          this.isFibonacci();
      }
  }

  isPrime() {
      console.log(1);
    if (this.inputNumber < 2) {
        return this.numberBoolean = false;
    }
    for (let i = 2; i < this.inputNumber; i++) {
        if (this.inputNumber % i == 0) {
            return this.numberBoolean = false;
        }
    }
    return this.numberBoolean = true;
  }
  isFibonacci(): boolean {
    return this.numberBoolean = this.isPerfectSquare(this.inputNumber);
  }
  isPerfectSquare(x : number): boolean
  {
    let s = Math.sqrt(x);
    return (s*s == x);
  }
}
