import { Adopter } from "./adopter"
import { Dog } from "./dog"

export class Application {
    id: number = 0
    status: string = ' '
    submittedDate: Date | null = null
    reviewDate: Date | null = null
    approvalDate: Date | null = null
    applicant: Adopter[] = []
    dog: Dog[] = []
}