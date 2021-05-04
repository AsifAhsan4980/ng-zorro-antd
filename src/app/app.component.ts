import { UserModule } from './user/user.module';
import { GetApiService } from './get-api.service';
import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'form';
    users : UserModule;
    constructor(private api: GetApiService) { }
    ngOnInit() {
        // return this.api.apiCall().subscribe(data => this.users =data);
    }
}
