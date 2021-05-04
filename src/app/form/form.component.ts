import { UserModule } from './../user/user.module';
import { GetApiService } from './../get-api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    user: UserModule;
    getAllUser: any;
    checkAllArray= {
        id:'',
        Fullname: '',
        age:'',
        email:'',
    }
    isEdit=false;

    //employeeform: FormGroup;
    constructor(private api: GetApiService) { }

    employeeform = new FormGroup({
        Fullname : new FormControl(),
        age : new FormControl(),
        email : new FormControl(),
        id : new FormControl()
    })

    ngOnInit(): void {
        this.getLatestUser();
    }

    onSubmit(){
      this.api.createUser(this.employeeform.value).subscribe((Response)=>{
          console.log('any')
          this.getLatestUser();
      })
      this.employeeform.patchValue(this.checkAllArray);
}
    getLatestUser() {
        this.api.getAllUser().subscribe((Response)=>{
            this.getAllUser=Response;
        })
    }

    onAdd(){
        this.isEdit=false;
        this.api.updateUser(this.employeeform.value).subscribe(()=>{
            this.getLatestUser;
        })

        this.employeeform.patchValue(this.checkAllArray);
    }
    onDelete(users){
        this.api.deleteUser(users).subscribe(()=>{
           this.getLatestUser();
        })
    }
    onUpdate(user){
        this.isEdit=true;
        this.employeeform.patchValue(user);
    }
}
