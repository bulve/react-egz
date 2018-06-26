import React, {Component} from "react"
import axios from 'axios'

export default class LibraryDetailsView extends Component{
    constructor(props){
        super(props);
        this.state = {
           library: "",
           books: null
        };
    }
    componentWillMount = () =>{
        axios.get("http://localhost:8080/api/library/" + this.props.params.library_id)
            .then((response) =>{
                this.setState({
                    library:this.composeLibrary(response.data),
                    books:response.data.books.map(this.composeBooks)
                })
                console.log(response.data)
                
            })
    }

    composeLibrary = (library) =>{
        return(
            <div>
                <p>{library.id} | {library.name} | {library.location} </p>
            </div>
        )  
    }

    composeBooks = (book,index) =>{
        return(
            <div>
                <p>{book.book_id} | {book.name} | {book.years}</p>
            </div>
        )  
    }

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading"> <div><b>Biblioteka</b> <b><a href={"#book/new/library/"+this.props.params.library_id}>Prideti knyga</a></b> {this.state.library}</div> </div>
                    <div className="panel-body">
                        <b>Knygos</b>
                        <div>{this.state.books}</div>
                    </div>
                </div>
            </div>
        )
    }
}