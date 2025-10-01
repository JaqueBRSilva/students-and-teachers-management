import { useParams } from "react-router-dom"
import App from "../../App"

export function Teacher() {
    const { teacherId } = useParams()

    return (
        <App>
            <div>Teacher: {teacherId}</div>
        </App>
    )
}