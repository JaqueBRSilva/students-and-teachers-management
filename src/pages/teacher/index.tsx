import { useParams } from "react-router-dom"

export function Teacher() {
    const { teacherId } = useParams()

    return (
        <div>Teacher: {teacherId}</div>
    )
}