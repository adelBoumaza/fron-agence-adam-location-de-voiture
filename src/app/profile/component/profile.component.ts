import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Profile } from '../model/profile.model';

@Component({
    selector: 'app-profile',
    templateUrl: '../views/profile.component.html',
    styleUrls:
        [
            '../css/profile.component.css',
            '../../../assets/scss/style.scss',
            '../../../assets/css/font-awesome.min.css'
        ]
})
export class ProfileComponent implements OnInit {
    profile: Profile = {} as Profile;
    titleHeaderPart: string = 'Gestion profile Agence';
    @ViewChild('profileForm') profileForm: NgForm;
    settingsForm: FormGroup;
    @ViewChild('fileInput') inputEl: ElementRef;
    formData: FormData;
    url: string;
    nameFile: string;
    file: string;
    btnSave = true;
    constructor(private formBuilder: FormBuilder) {
        this.initModel();
    }
    // convenience getter for easy access to form fields
    get forms() { return this.settingsForm.controls; }
    ngOnInit(): void { }
    initModel() {
        this.init();
    }
    init() {
        this.settingsForm = this.formBuilder.group({
            nom: ['', Validators.required],
            prenom: ['', Validators.required],
            adresse: ['', Validators.required],
            nomAgence: ['', Validators.required],
            email: '',
            logo: '',
            nomFichier: '',
            numeTelOne: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern('[0-9]+')]],
            numTelTwo: ['', [Validators.minLength(10), Validators.maxLength(12), Validators.pattern('[0-9]+')]],
            actived: true,
            idUser: localStorage.getItem('id')
        });
        this.url = undefined;
        this.file = undefined;
        this.nameFile = undefined;
    }
    upload(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.url = e.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
            this.file = event.target.files[0];
            this.nameFile = event.target.files[0].name;
        }
    }

    submitForm() {
        if (this.settingsForm.invalid) {
            return;
        }
        this.updateModel(this.settingsForm.value);
    }

    updateModel(values: Object) {
        Object.assign(this.profile, values);
        this.profile.logo = this.file;
        this.profile.nomFichier = this.nameFile;
    }

}
