import { Component, OnInit } from "@angular/core";
import {
    FormGroup,
    FormControl,
    FormBuilder,
    Validators
} from "@angular/forms";
import { UserService } from "src/app/services/user.service";

import * as $ from "jquery";
import { Router } from "@angular/router";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    // Form
    public loginForm: FormGroup;

    constructor(private fb: FormBuilder, private userService: UserService) {
        this.loginForm = this.fb.group({
            username: this.fb.control(
                [],
                [
                    Validators.required,
                    Validators.maxLength(15),
                    Validators.minLength(3)
                ]
            ),
            password: this.fb.control(
                [],
                [Validators.required, Validators.minLength(3)]
            )
        });
    }

    ngOnInit() {
        // * Manipulating CSS classes with jQuery
        $(".next-button.username").click(function() {
            $(".username-section").addClass("fold-up");
            $(".password-section").removeClass("folded");
        });

        $(".next-button.password").click(function() {
            $(".repeat-password-section").addClass("fold-up");
            $(".success").css("marginTop", 0);
        });
    }

    onSubmit() {
        let value: any = this.loginForm.value;
        this.userService.login(value).subscribe();
        this.loginForm.reset;
    }
}
