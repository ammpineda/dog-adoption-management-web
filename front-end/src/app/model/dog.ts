import { Application } from "./application"

export class Dog {
    id: number = 0
    name: string = ' '
    displayImage: string = ' '
    breed: string = ' '
    birthDate: Date | null = null
    age: string = ' '
    gender: string = ' '
    color: string = ' '
    size: string = ' '
    adoptionStatus: string = ' '
    description: string = ' '
    registeredDate: string = ' '
    application: Application[] = []
}
