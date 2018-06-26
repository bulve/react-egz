import React, {Component} from "react"
import axios from "axios"


export default class LibraryView extends Component{
    constructor(props){
        super(props);
        this.state = {
           library: null
        };
    }
    componentWillMount = () =>{
        axios.get("http://localhost:8080/api/library")
            .then((response) =>{
                this.setState({
                    library:response.data.map(this.composeBooks)
                })
                console.log(response.data) 
            })
    }

    composeBooks = (library,index) =>{
        return(
            <div key={index}>
                <p>{library.id} | {library.name} | {library.location} | <a href={"#library/view/"+library.id} >Perziureti</a></p>
            </div>
        )  
    }

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading"><b>Bibliotekos</b> <a href="#library/new">Prideti nauja <b>Biblioteka</b></a></div>
                    <div className="panel-body">
                        <div>{this.state.library}</div>
                    </div>
                </div>
            </div>
        )
    }
}