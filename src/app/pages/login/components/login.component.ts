import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/services/contract/web3.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authenticated: boolean = false;
  data:string = '';
  amount:number = 0;


  constructor(
    private web3: Web3Service) {
  }
  ngOnInit(){}

  Connect() {
    this.web3.connectAccount().then((response:any) => {
      this.data = response[0];
      this.web3.accountInfo(response[0]).then((res:any) => {
        this.amount = res;
      })
    })
  }

}
