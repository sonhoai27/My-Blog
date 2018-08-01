import * as React from "react";

class Footer extends React.Component {
    constructor(props){
        super(props)
    }
    currentYear = () => {
        const date = new Date()
        return (<span>{date.getFullYear()}</span>)
    }
    render(){
        return (
            <>
                <div id="footer">
                   <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <p className="copyright">SonHoai © {this.currentYear()}&nbsp;&nbsp;·&nbsp;&nbsp;
                            <a target="_blank">Dashboard</a></p>
                        </div>
                        <div className="col-6 text-right">
                            <p className="copyright">Facebook © 2018&nbsp;&nbsp;·&nbsp;&nbsp;
                            <a target="_blank">Careers</a></p>
                        </div>
                    </div>
                   </div>
                </div>
            </>
        )
    }
}
export default Footer