export interface Address {
    country: string;
    city: string;
    street: string;
    postalCode?: string;
    type: 'Mailing' | 'Work';
}

export interface Phone {
    number: string;
    type: 'Work' | 'Personal';
    preferred: boolean;
}

export interface Email {
    email: string;
}

export interface Employment {
    name: string;
    fromYear: string;
    toYear?: string;
}

export interface IdentificationDocument {
    idDocument?: File;
    driverLicense?: File;
}

export interface BasicInfo {
    firstName: string;
    middleName?: string;
    lastName: string;
    birthDate: string;
    age: number;
}

export interface UserProfileFormData {
    basicInfo: BasicInfo;
    addresses: Address[];
    phones: Phone[];
    emails: Email[];
    employment: Employment[];
    identificationDocuments: IdentificationDocument;
} 