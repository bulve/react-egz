import React, {Component} from "react"

export default class View extends Component{
    constructor(props){
        super(props);
        this.state = {
           books: "props????"
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
            <div>
                <p>{book.book_id} | {book.name} | {book.years}</p>
            </div>
        )  
    }

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">View</div>
                    <div className="panel-body">
                        <BookComp books={this.state.books}/>
                    </div>
                </div>
            </div>
        )
    }
}