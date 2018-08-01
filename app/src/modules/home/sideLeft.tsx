import * as React from "react";

class SideLeft extends React.Component {
    render() {
        return (
            <>
                <ul className="list-group">
                    <li className="filter list-group-item d-flex justify-content-between align-items-center">
                        <a href="">
                            Morbi leo risus
                            <span className="badge badge-primary badge-pill">1</span>
                        </a>
                    </li>
                    <li className="filter list-group-item d-flex justify-content-between align-items-center">
                        <a href="">
                            Morbi leo risus
                            <span className="badge badge-primary badge-pill">1</span>
                        </a>
                    </li>
                    <li className="filter list-group-item d-flex justify-content-between align-items-center">
                        <a href="">
                            Morbi leo risus
                            <span className="badge badge-primary badge-pill">1</span>
                        </a>
                    </li>
                </ul>
            </>
        )
    }
}

export default SideLeft