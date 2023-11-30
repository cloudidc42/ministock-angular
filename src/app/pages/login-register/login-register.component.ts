import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  message:string = "Hello Anglular";

  profile= {
      "name":"Phutjirakul",
      "tel":"0970416538",
      "gender":"Male"
    }
  
    // 2 Way data binding
    userData = {
      "email":"",
      "password":""
    }
  
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  submitLogin(){
    //alert("Hello Angular");
    if(this.userData.email == "admin@email.com" && this.userData.password == "1234"){
      alert("Login Success");
      this.router.navigate(["backend"])
    }else{
      alert("Login Fail!!!");
    }
  }

}
