export interface User {
    id: number,
    firstName: string,
    middleName: string,
    lastName: string,
    dob: Date,
    gender: string,
    email: string,
    address: Array<UserAddress>
}

export interface UserAddress {
    address1: string,
    address2: string,
    city: string,
    state: string,
    pincode: string
}