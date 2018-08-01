import * as React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to={'/'}>SonHoai</Link>
                        <div className="header-content">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Music </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Project </a>
                                </li>
                            </ul>
                            <div className="form-inline my-2 my-lg-0 float-right">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="modal" data-target="#modal-login">Login </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
export default Header