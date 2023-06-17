import { useContext } from 'react'
import { Context } from '../context'

function MobileMenu() {
    const { setShowMenu } = useContext(Context)
    return (
        <div className="mobile-menu" onClick={() => setShowMenu(false)}>
            <div className="menu" onClick={(event) => event.stopPropagation()}>
                <div className="header-text">
                    <p className="h-t">Features</p>
                    <p className="h-t">Pricing</p>
                    <p className="h-t">Resources</p>
                </div>
                <hr />
                <div className="login">
                    <p className="log">Login</p>
                    <button className="btn-log">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export { MobileMenu }
