import { Component, OnInit } from '@angular/core';
import { Contact } from './Contact';
import { FormGroup } from '@angular/forms';
import { ContactService } from './contact.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  rForm: FormGroup;
  contact: Contact;
  constructor(private contactDataService: ContactService) { }

  contacts : Contact[]


  ngOnInit() {
    this.contact = new Contact("","","","");
    this.contactDataService.contacts.subscribe(
      contacts => (
        (this.contacts = contacts.filter(contact => contact)),
        (error: HttpErrorResponse) =>  {
          console.log(error);
        }
      )
    )

   
  }

  add(){
    this.contacts.push(this.contact);

    this.contactDataService.createContact(this.contact).subscribe(
      (data) => {
        this.contact = data
        console.log(this.contact);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    );
    window.location.reload();
    }
}
