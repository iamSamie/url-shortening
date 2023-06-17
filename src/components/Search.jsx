import { useContext, useState } from 'react'
import { Context } from '../context'

function Search() {
    const { val, setVal, res, setRes } = useContext(Context)
    const [correctLink, setCorrectLink] = useState(true)
    const handleClick = () => {
        if (!val.length) setCorrectLink(false)
        if (val.length && correctLink) {
            try {
                fetch(`https://api.shrtco.de/v2/shorten?url=${val}`)
                    .then((response) => response.json())
                    .then((data) => {
                        setRes([data.result, ...res])
                    })
            } catch (error) {
                alert('Invalid link, please try again')
            }
            setVal('')
        }
    }
    const handleBlur = () => {
        if (val.length > 2) setCorrectLink(true)
    }

    return (
        <div className="search">
            <div className="search-left">
                <input
                    className={correctLink ? null : 'invalid-input'}
                    value={val}
                    onChange={(event) => setVal(event.target.value)}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Shorten a link here..."
                    autoComplete="off"
                />
                {correctLink ? null : (
                    <p className="invalid-input-link">Please, add correct link</p>
                )}
            </div>
            <div className="search-right">
                <button onClick={handleClick}>Shorten It!</button>
            </div>
        </div>
    )
}

export { Search }
