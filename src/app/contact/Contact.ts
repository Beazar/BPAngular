export class Contact {
    id: number;
    voornaam: string;
    achternaam: string;
    afbeelding: string;
    telefoon: string;


	constructor(voornaam: string, achternaam: string, afbeelding: string, telefoon: string,id?: number) {
        this.id = id;
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.afbeelding = afbeelding;
        this.telefoon = telefoon;
    }
    
    static fromJson(json: any): Contact{
        if(json != null){
            const cont = new Contact(json.firstName,json.lastName,json.image,json.phone, json.id);
            return cont;
        }
        else{
            return null;
        }
    }

    toJSON() {
        return {
          id: this.id,
          firstName : this.voornaam,
          lastName: this.achternaam,
          image: this.afbeelding,    
          phone: this.telefoon        
        };
    }
}