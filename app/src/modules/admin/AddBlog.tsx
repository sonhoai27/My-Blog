import * as React from "react";
import Editor from "../shared/Editor";
declare var $:any;
interface State {
    title:string,
    alias:string
}
class AddBlog extends React.Component<{}, State>{
    constructor(props){
        super(props)
        this.state = {
            title:'',
            alias:''
        }
    }
    add = () => {
        console.log({...this.state, ...{
            promo: $(".promo-blog").html(),
            content: $(".content-blog").html()
        }})
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = (name === 'file' ? target.files[0] : target.value);
        // @ts-ignore
        this.setState({
            [name]: value
        })
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 paddingY-64">
                        <h1>Add Blog</h1>
                    </div>
                    <div className="col-sm-8">
                        <div className="form-group">
                            <label htmlFor="name-category">Name Blog</label>
                            <input name="title"
                                   onChange={(e)=> this.onChange(e)}
                                   type="text" className="form-control" id="name-blog"
                                   placeholder="Name Blog"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="alias-category">Alias Blog</label>
                            <input name="alias"
                                   onChange={(e)=> this.onChange(e)}
                                   type="text" className="form-control" id="alias-blog"
                                   placeholder="Alias Blog"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name-category">Cover Blog</label>
                            <input name="file"
                                   onChange={(e)=> this.onChange(e)}
                                   type="file"
                                   className="form-control" id="cover-blog"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="promo-blog">Promo Blog</label>
                            <Editor class="promo-blog"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="promo-blog">Content Blog</label>
                            <Editor height={400} class="content-blog"/>
                        </div>
                        <button className="btn btn-primary" onClick={() => this.add()}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddBlog