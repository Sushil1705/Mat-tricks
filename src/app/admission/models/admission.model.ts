export interface AdmissionDetails {
    id:string;
    name:string;
    mobileno:string;
    email:string;
    dob:string;
    gender:string;
    address:string;
    state:string;
    city:string;
    country:string;
    pincode:string;
    bloodgroup:string;
    subject:string[];
}

export interface postalDetails{
    name:string[];
    pincode:string[];
    state:string[];
    city:string[];
    country:string[];

}