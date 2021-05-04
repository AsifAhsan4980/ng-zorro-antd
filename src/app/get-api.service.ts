import { UserModule } from './user/user.module';
import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
@Injectable({
    providedIn: 'root'
})
export class GetApiService {
    apiUrl = 'http://localhost:3000/users/';

    constructor(
        private http: HttpClient
    ) { }

    createUser(user) {
        return this.http.post(this.apiUrl, user);
    }
    updateUser(user) {
        return this.http.put(this.apiUrl + user.id, user);
     }
    getAllUser() {
        return this.http.get(this.apiUrl);
    }
    deleteUser(user) {
        return this.http.delete(this.apiUrl + user.id)
    }
}
