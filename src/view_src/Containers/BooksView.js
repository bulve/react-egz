import React, {Component} from "react"
import axios from "axios"

export default class BooksView extends Component{
    constructor(props){
        super(props);
        this.state = {
           books: null
        };
    }
    componentWillMount = () =>{
        axios.get("http://localhost:8080/api/book")
            .then((response) =>{
                this.setState({
                    books:response.data.map(this.composeBooks)
                })
                console.log(response.data)
                
            })
    }

    composeBooks = (book,index) =>{
        return(
            <div key={index}>
                <p>{book.book_id} | {book.name} | {book.years}</p>
            </div>
        )  
    }

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading"><b>Knygos</b> <a href="#book/new" >Prideti nauja <b>Knyga</b></a></div>
                    <div className="panel-body">
                        <div>{this.state.books}</div>
                    </div>
                </div>
            </div>
        )
    }
}