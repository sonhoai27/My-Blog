import * as React from "react";
declare var $:any;
interface Props {
    class?:any,
    height?:any
}
interface State {
    class:any
}
class Editor extends React.Component<Props, State> {
    constructor(props){
        super(props)
        this.state = {
            class: this.props.class ? `.`+this.props.class : ''
        }
    }
    componentDidMount(){
        $(`${this.state.class} #bold`).on('click', () =>{
            document.execCommand('bold', false, null);
         });
         $(`${this.state.class} #table`).on('click',() => {
            $(".editor").append(`<table class="table table-bordered">
         <tbody>
         <tr>
         <td><br></td>
         <td><br></td>
         <td><br></td>
         <td><br></td>
         </tr>
         <tr>
         <td><br></td>
         <td><br></td>
         <td><br></td>
         <td><br></td>
         </tr>
         </tbody>
         </table>`);
         });
         $(`${this.state.class} #italic`).on('click', () =>{
            document.execCommand('italic', false, null);
         });
         $(`${this.state.class} #underline`).on('click', () => {
            document.execCommand('underline', false, null);
         });
         $(`${this.state.class} #align-left`).on('click', () => {
            document.execCommand('justifyLeft', false, null);
         });
         $(`${this.state.class} #align-center`).on('click', () => {
            document.execCommand('justifyCenter', false, null);
         });
         $(`${this.state.class} #align-right`).on('click',() => {
            document.execCommand('justifyRight', false, null);
         });
         $(`${this.state.class} #list-ul`).on('click', () => {
            document.execCommand('insertUnorderedList', false, null);
         });
         $(`${this.state.class} #list-ol`).on('click', () => {
            document.execCommand('insertOrderedList', false, null);
         });
         $(`${this.state.class} #fonts`).on('change',() => {
            let font = $('#fonts').val();
            document.execCommand('fontName', false, font);
         });
        $(`${this.state.class} #size`).on('change', () => {
            let size = $('#size').val();
            $('.editor').css('fontSize', size + 'px');
         });
        $(`${this.state.class} #link`).on('click', () => {
            let linkURL = prompt('Enter a URL:', 'http://');
            let sText:any = document.getSelection();
            if(sText.baseNode.data !== undefined){
                document.execCommand('insertHTML', false, '<a href="' + linkURL + '" target="_blank">' + sText + '</a>');
            }
        });
        $(`${this.state.class} #heading`).on('change', () => {
            let heading = $('#heading').val();
            let sText:any = document.getSelection();
            if(sText.baseNode.data !== undefined){
                document.execCommand('formatBlock', false, heading);
            }
        });
        $(`${this.state.class} #un-link`).on('click', () => {
            let sText:any = document.getSelection();
            if(sText.baseNode.data !== undefined){
                document.execCommand('unlink', false, sText);
            }
        });
        $(`${this.state.class} #color`).spectrum({
            color: '#000',
            showPalette: true,
            showInput: true,
            showInitial: true,
            preferredFormat: "hex",
            showButtons: false,
            change: (color) =>{
               color = color.toHexString();
               document.execCommand('foreColor', false, color);
            }
         });
    }
    render() {
        return (
            <div id="content-editor" className={this.props.class}>
                <div className="wrap">
                    <div className="toolbar">
                        <button id="bold" title="Bold (Ctrl+B)">
                            <i className="fa fa-bold" />
                        </button>
                        <button id="italic">
                            <i className="fa fa-italic" />
                        </button>
                        <button id="underline" title="Underline (Ctrl+U)">
                            <i className="fa fa-underline" />
                        </button>
                        <button id="link">
                            <i className="fa fa-link" />
                        </button>
                        <button id="un-link">
                            <i className="fa fa-unlink" />
                        </button>
                        <select name="heading" id="heading">
                            <option value="h1">h1</option>
                            <option value="h2">h2</option>
                            <option value="h3">h3</option>
                            <option value="44">h4</option>
                            <option value="h5">h5</option>
                            <option value="h6">h6</option>
                        </select>
                        <select name="fonts" id="fonts">
                            <option value="Arial" selected>Arial</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Tahoma">Tahoma</option>
                            <option value="Times New Roman">Times New Roman</option>
                            <option value="Verdana">Verdana</option>
                            <option value="Impact">Impact</option>
                            <option value="Courier New">Courier New</option>
                        </select>
                        <select name="size" id="size">
                            <option value="8">8</option>
                            <option value="10">10</option>
                            <option value="12">12</option>
                            <option value="14">14</option>
                            <option value="16" selected>16</option>
                            <option value="18">18</option>
                            <option value="20">20</option>
                            <option value="22">22</option>
                            <option value="24">24</option>
                            <option value="26">26</option>
                        </select>
                        <input type="text" id="color" />
                        <button id="align-left" title="Left">
                            <i className="fa fa-align-left" />
                        </button>
                        <button id="align-center" title="Center">
                            <i className="fa fa-align-center" />
                        </button>
                        <button id="align-right" title="Right">
                            <i className="fa fa-align-right" />
                        </button>
                        <button id="list-ul" title="Unordered List">
                            <i className="fa fa-list-ul" />
                        </button>
                        <button id="list-ol" title="Ordered List">
                            <i className="fa fa-list-ol" />
                        </button>
                        <button id="table">
                            <i className="fa fa-th" />
                        </button>
                        <button id="code">
                            <i className="fa fa-code" />
                        </button>
                    </div>
                    <div
                        style={{height: `${this.props.height ? this.props.height : 'auto'}`}}
                        className={`editor`}
                        contentEditable/>
                </div>
            </div>
        )
    }
}
export default Editor