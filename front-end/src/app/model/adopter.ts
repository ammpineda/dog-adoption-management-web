import { Application } from "./application"

export class Adopter {
    id: number = 0
    firstName: string = ' '
    lastName: string = ' '
    fullName: string = ' '
    displayImage: string = ' '
    email: string = ' '
    password: string = ' '
    phoneNumber: string = ' '
    homeAddress: string = ' '
    registeredDate: Date | null = null
    applications: Application[] = []
}
