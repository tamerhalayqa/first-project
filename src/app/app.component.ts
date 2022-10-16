import { Component, ViewChild, ElementRef } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employeeData: Employee = { firstName: 'Jack', lastName: 'Mark' };

  @ViewChild('firstName') firstName: ElementRef<HTMLInputElement>;
  @ViewChild('lastName') lastName: ElementRef<HTMLInputElement>;

  setEmployee(fName: string, lName: string) {
    this.employeeData = {
      firstName: fName,
      lastName: lName,
    };
  }

  resetEmployee(data: string) {
    this.employeeData = { firstName: 'Jack', lastName: 'Mark' };
    this.firstName.nativeElement.value = '';
    this.lastName.nativeElement.value = '';
    alert(data);
  }
}
