import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Form
  private registerForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.registerForm = this.fb.group({   
      email: this.fb.control([], [Validators.required, Validators.email]),
      username: this.fb.control([], [Validators.required, Validators.maxLength(15), Validators.minLength(3)]),
      password: this.fb.control([], Validators.required),
    });
   }

  ngOnInit() {
    $('.email').on("change keyup paste",
      function () {
        if ($(this).val()) {
          var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
          if (testEmail.test($(this).val())){
            $('.icon-paper-plane').addClass("next");}
        } else {
          $('.icon-paper-plane').removeClass("next");
        }
      }
    );

    $('.next-button').hover(
      function () {
        $(this).css('cursor', 'pointer');
      }
    );

    $('.next-button.email').click(
      function () {
        $('.email-section').addClass("fold-up");
        $('.username-section').removeClass("folded");
      }
    );

    $('.username').on("change keyup paste",
      function () {
        let val = $('.username').val();
        if (val&&(val.length>2)) {
          $('.icon-lock').addClass("next");
        } else {
          $('.icon-lock').removeClass("next");
        }
      }
    );

    $('.next-button').hover(
      function () {
        $(this).css('cursor', 'pointer');
      }
    );

    $('.next-button.username').click(
      function () {
        $('.username-section').addClass("fold-up");
        $('.password-section').removeClass("folded");
      }
    );

    $('.password').on("change keyup paste",
      function () {
        if ($(this).val()) {
          $('.icon-repeat-lock').addClass("next");
        } else {
          $('.icon-repeat-lock').removeClass("next");
        }
      }
    );

    $('.next-button.password').click(
      function () {
        $('.repeat-password-section').addClass("fold-up");
        $('.success').css("marginTop", 0);
      }
    );
  }

  onSubmit() {
    let formValue = this.registerForm.value;
    console.log(formValue)
  }

}


