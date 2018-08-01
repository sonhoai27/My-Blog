import * as React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="modal fade" id="modal-login" role="dialog" aria-labelledby="modal-login" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login