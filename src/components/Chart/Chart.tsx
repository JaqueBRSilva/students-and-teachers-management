import { useState } from 'react'
import './Chart.css'

export function Chart() {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <>
            {isLoading &&
                <div className='chart__container'>
                    Loading...
                </div>
            }
        </>
    )
}