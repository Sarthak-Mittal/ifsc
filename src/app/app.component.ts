import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { BankDetails } from './model/bank-details';
import { BankService } from './services/bank.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toogleDisplay: boolean = false;
  bankDetails: BankDetails = null;
  bank = new FormGroup({
    ifsc: new FormControl('', Validators.required),
  });

  constructor(private bankService: BankService) {}

  submit() {
    let ifscCode = this.bank.controls['ifsc'].value;
    console.log('ifsc::', ifscCode);

    this.bankService.getBranchData(ifscCode).subscribe((data: BankDetails) => {
      this.bankDetails = data;
      console.log(this.bankDetails);
      this.toogleDisplay = true;
      this.renderValues();
    });
  }

  renderValues() {
    console.log('UPI:', this.bankDetails.UPI);
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.submit();
    }
  }

  redirectToGoogleMaps() {
    let url =
      'https://www.google.com/maps/search/?api=1&query=' +
      this.bankDetails.BANK +
      ', ' +
      this.bankDetails.ADDRESS;
    window.open(url, '_blank');
  }
}
