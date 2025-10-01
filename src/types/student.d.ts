import type { DegreeType } from "./degree"

export type StudentType = {
    id: number
    ra: number
    name: string
    degreeId: DegreeType
    classId: number
}