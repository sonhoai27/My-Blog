import * as React from "react";
import Editor from "../shared/Editor";

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12 paddingY-64">
                            <h1 className="display-4">Dashboard</h1>
                        </div>
                        <div className="col-sm-12">
                            <Editor/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Dashboard