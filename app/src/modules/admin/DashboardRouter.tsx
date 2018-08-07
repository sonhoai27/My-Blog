import * as React from 'react';
import {Route} from 'react-router-dom';
import Dashboard from "./Dashboard";
import AddBlog from "./AddBlog";
import AddCategory from "./AddCategory";
import DetailCategory from "./DetailCategory";
import DetailBlog from "./DetailBlog";
import Header from "../home/header";
import Footer from "../home/footer";

const DashboardRouter = ({match} : { match: any}) => {
    return (
        <div>
            <Header/>
            <Route exact path={`${match.url}`} component={Dashboard}/>
            <Route path={`${match.url}/add/blog`} component={AddBlog}/>
            <Route path={`${match.url}/add/category`} component={AddCategory}/>
            <Route path={`${match.url}/edit/category/:id`} component={DetailCategory}/>
            <Route path={`${match.url}/edit/blog/:id`} component={DetailBlog}/>
            <Footer/>
        </div>
    )
}

export default DashboardRouter