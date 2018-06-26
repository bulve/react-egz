import React, {Component} from "react"
import LibraryFormComp from "../Components/LibraryFormComp";
import axios from 'axios'

export default class LibraryCreationView extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            location: ""
        };
    }
   
    onSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8080/api/library', {
            name:this.state.name,
            location:this.state.location
            
        })
        .then((response)=>{
            console.log(response.status)
            this.setState({
                name: "",
                location: ""
            })
            this.props.router.push("librares")
        })
        .catch((erorr) => {
            console.log(erorr)
        })
    }

    onChange = (e) =>{
        console.log(e.target.name + " value is " + e.target.value)
        this.setState({
            [e.target.name]:e.target.value 
        })
    }

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">LibraryCreationView</div>
                    <div className="panel-body">
                        <LibraryFormComp 
                            onSubmit={this.onSubmit}
                            onChange={this.onChange}
                            name={this.state.name}
                            location={this.state.location}
                            />
                    </div>
                </div>
            </div>
        )
    }
}