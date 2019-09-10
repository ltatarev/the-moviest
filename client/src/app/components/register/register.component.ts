import { Component, OnInit } from "@angular/core";
import {
    FormGroup,
    FormControl,
    FormBuilder,
    Validators
} from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import * as $ from "jquery";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
    // Form
    private registerForm: FormGroup;

    constructor(private fb: FormBuilder, private userService: UserService) {
        this.registerForm = this.fb.group({
            email: this.fb.control([], [Validators.required, Validators.email]),
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
        $(".next-button.email").click(function() {
            $(".email-section").addClass("fold-up");
            $(".username-section").removeClass("folded");
        });

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
        let value: any = this.registerForm.value;
        this.userService.register(value).subscribe();
    }
}
