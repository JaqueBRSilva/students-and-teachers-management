import { useParams } from "react-router-dom"

export function Student() {
    const { studentId } = useParams()

    return (
        <div>Student: {studentId}</div>
    )
}