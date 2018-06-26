import React, {Component} from "react"
import BookFormComp from "../Components/BookFormComp";
import axios from 'axios'

export default class BookCreationView extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            years: ""
        };
    }
    onSubmit = (e) =>{
        e.preventDefault();
        let uri = "http://localhost:8080/api/book"
        if(this.props.params.library_id){
            uri = uri + "/library/" + this.props.params.library_id
        }
        
        axios.post(uri, {
            name:this.state.name,
            years:this.state.years
            
        })
        .then((response)=>{
            console.log(this.props)
            console.log(response.status)
            this.setState({
                name: "",
                years: ""
            })
            if(this.props.params.library_id){
                this.props.router.push("/library/view/" + this.props.params.library_id)
            }else{
                this.props.router.push("books")
            }
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
                    <div className="panel-heading">BookCreationView</div>
                    <div className="panel-body">
                        <BookFormComp 
                            onSubmit={this.onSubmit}
                            onChange={this.onChange}
                            name={this.state.name}
                            years={this.state.years}
                            />
                    </div>
                </div>
            </div>
        )
    }
}