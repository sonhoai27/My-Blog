import * as React from "react";
declare var $:any;
class AddCategory extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){}
    add = () => {
        const name = $("#name-category").val()
        const alias = $("#alias-category").val()
        alert(name+alias)
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 paddingY-64">
                        <h1>Add category</h1>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="name-category">Name Category</label>
                            <input type="text" className="form-control" id="name-category"
                                   placeholder="Name Category"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="alias-category">Alias Category</label>
                            <input type="text" className="form-control" id="alias-category"
                                   placeholder="Alias Category"/>
                        </div>
                        <button className="btn btn-primary" onClick={() => this.add()}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddCategory