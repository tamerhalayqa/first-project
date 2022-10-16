import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  title = 'Employee';

  @Input() empData: Employee;
  @Output() employeeReset = new EventEmitter<string>();

  resetEmployee() {
    this.employeeReset.emit('Employee has been reset');
  }
}
