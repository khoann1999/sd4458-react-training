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
    basicInfo: {
        firstName: string;
        lastName: string;
        birthDate: string;
        age: number;
    };
    addresses: Array<{
        country: string;
        city: string;
        street: string;
        postalCode: string;
        type: string;
    }>;
    phones: Array<{
        number: string;
        type: string;
        preferred: boolean;
    }>;
    emails: Array<{
        email: string;
    }>;
    employment: Array<{
        name: string;
        fromYear: string;
        toYear: string;
    }>;
    identificationDocuments: {
        idDocument?: File;
        driverLicense?: File;
    };
} 


export interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
        color: string;
        type: string;
    };
    ip: string;
    address: {
        address: string;
        city: string;
        state: string;
        stateCode: string;
        postalCode: string;
        coordinates: {
            lat: number;
            lng: number;
        };
        country: string;
    };
    macAddress: string;
    university: string;
    bank: {
        cardExpire: string;
        cardNumber: string;
        cardType: string;
        currency: string;
        iban: string;
    };
    company: {
        department: string;
        name: string;
        title: string;
        address: {
            address: string;
            city: string;
            state: string;
            stateCode: string;
            postalCode: string;
            coordinates: {
                lat: number;
                lng: number;
            };
            country: string;
        };
    };
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: {
        coin: string;
        wallet: string;
        network: string;
    };
    role: string;
}