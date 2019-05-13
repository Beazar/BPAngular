import { Injectable } from '@angular/core';
import { Contact } from './Contact';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly appUrl = 'http://localhost:8090'

  constructor(private http: HttpClient) { }

  get contacts(): Observable<Contact[]>{
    console.log(`${this.appUrl}/contacts/`)
    return this.http.get(`${this.appUrl}/contacts/`).pipe(map((list: any[]): Contact[] => list.map(Contact.fromJson)));
  }

  createContact(contact: Contact): Observable<Contact>{
    return this.http.post(`${this.appUrl}/contacts/`, contact.toJSON()).pipe(map(Contact.fromJson));

  }
}
