import { useState } from 'react'

function Link(props) {
    const { short_link, original_link } = props
    const [copy, setCopy] = useState(false)
    return (
        <div className="link">
            <div className="original-link">{original_link}</div>
            <div className="short-link">{short_link}</div>
            <button
                className="copy"
                onClick={(event) => {
                    navigator.clipboard.writeText(short_link)
                    event.target.setAttribute('copy-attribute', 'copied')
                    setCopy(true)
                }}>
                {copy ? 'Copied!' : 'Copy'}
            </button>
        </div>
    )
}

export { Link }
