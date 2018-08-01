import * as React from "react";
import Header from "../home/header";
import Footer from "../home/footer";

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-12 paddingY-64">
                            <h1 className="display-4">Dashboard</h1>
                        </div>
                        <div className="col-sm-12">
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default Dashboard