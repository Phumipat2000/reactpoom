import React, {Component} from "react";
import axios from "axios";
import {ip,port} from "../setIP/setting";
import{ useHistory } from 'react-router-dom';

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            idkey:"",
            firstname:"",
            lastname:"",
            email:localStorage.getItem('email'),
            // districtname:"",
            // provincename:""
        }
        this.handleChang = this.handleChang.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
    }
    handleChang = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleClicked(){
        let url = `https://localhost:3000/data`;
        let data = {
            idkey:this.state.idkey,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            // districtname:this.state.districtname,
            // provincename:this.state.provincename
        }
        axios.post(url,data)
        this.setState({
            idkey:"",
            firstname:"",
            lastname:"",
            email:"",
            // districtname:"",
            // provincename:""
        });
        this.props.history.push('/ShowData');
    }

    render() {
        return(
            <div>
                <div className="App">
                <h2 className="my-4">Register<br/></h2>
                    <hr/>
                </div>
                <form className="container">
                    <div className="form-group">
                        <label className="text-white"  htmlFor="id">ID</label>
                        <input type="text" className="form-control" size="10" id="idkey" onChange={this.handleChang} value={this.state.idkey}/>
                    </div>
                    <div className="form-group">
                        <label className="text-white" >First Name</label>
                        <input type="text" className="form-control" id="firstname" onChange={this.handleChang} value={this.state.firstname}/>
                    </div>
                    <div className="form-group">
                        <label className="text-white"  >Last Name</label>
                        <input type="text" className="form-control" id="lastname" onChange={this.handleChang} value={this.state.lastname}/>
                    </div>
                    {/* <div className="form-group">
                        <label className="text-white"  >District Name</label>
                        <input type="text" className="form-control" id="districtname" onChange={this.handleChang} value={this.state.districtname}/>
                    </div>
                    <div className="form-group">
                        <label className="text-white"  >Province Name</label>
                        <input type="text" className="form-control" id="provincename" onChange={this.handleChang} value={this.state.provincename}/>
                    </div> */}
                    <button type="button" className="btn btn-primary" onClick={this.handleClicked}>Submit</button>
                </form>
            </div>
        );
    }
}

export default function WithRouter(props){
    const history = useHistory();
    return (<Register {...props} history={history}/>);
}
