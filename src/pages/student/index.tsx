import { useParams } from "react-router-dom"
import App from "../../App"

export function Student() {
    const { studentId } = useParams()

    return (
        <App>
            <div>Student: {studentId}</div>
        </App>
    )
}