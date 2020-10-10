import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { faCheckCircle, faTimesCircle, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { BankDetails } from 'src/app/model/bank-details';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  toggleDisplay: boolean = false;
  bankDetails: BankDetails = null;
  apiTransitState: boolean = false;
  bank = new FormGroup({
    ifsc: new FormControl('', Validators.required)
  });
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  faMapMarker = faMapMarker;

  constructor(private bankService: BankService) {}

  submit() {
    const ifscCode = this.bank.controls['ifsc'].value;
    console.log('ifsc::', ifscCode);
    this.apiTransitState = true;

    this.bankService.getBranchData(ifscCode).subscribe(
      (data: BankDetails) => {
        this.bankDetails = data;
        console.log(this.bankDetails);
        this.toggleDisplay = true;
        this.apiTransitState = false;
      },
      (error) => {
        console.log(error);
        this.bankDetails = null;
        this.toggleDisplay = false;
        this.apiTransitState = false;
      }
    );

  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.submit();
    }
  }

  redirectToGoogleMaps() {

    const url = 'https://www.google.com/maps/search/?api=1&query=' +
      this.bankDetails.BANK + ', ' + this.bankDetails.ADDRESS;
    window.open(url, '_blank');
  }

  /* To copy any Text */
  copyText(val: string){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
