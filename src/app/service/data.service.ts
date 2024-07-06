import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get("api/users");
  }

  getUserById(id: number) {
    return this.http.get("api/user/" + id);
  }

  updateUser(id: number, payload: any) {
    return this.http.put("api/user/" + id, payload);
  }

  deleteUser(id: number) {
    return this.http.delete("api/user/" + id);
  }
}
