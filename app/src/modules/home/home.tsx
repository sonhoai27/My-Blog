import * as React from "react";
import Header from "./header";
import ListArticle from './listArticle';
import SideLeft from "./sideLeft";
import Footer from "./footer";
import Pagination from "../shared/Pagination";
import Login from "../admin/Login";

class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-12 paddingY-64">
                            <h1 className="display-2">What’s on our mind?</h1>
                            <h3 className="text-muted">Collection of articles, project, free ebook, and resources made by designers at SonHoai.</h3>
                        </div>
                        <div className="col-sm-8">
                            <div className="row">
                                <ListArticle />
                                <div style={{margin: '0 32px'}}>
                                    <Pagination
                                        totalItems={100}
                                        onChangePage={() => {
                                        }}
                                        initialPage={1}
                                        pageSize={10}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="col-sm-3">
                            <h4>Category</h4>
                            <SideLeft />
                        </div>
                    </div>
                </div>
                <Footer />
                <Login/>
            </>
        )
    }
}
export default Home