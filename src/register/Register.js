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
            province:"",
            data: []

        }
        this.handleChang = this.handleChang.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
    }
    handleChang = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        console.log(e.target.id);
        console.log(e.target.value);
    }
    handleClicked(){
        let url = `https://localhost:3000/data`;
        let data = {
            idkey:this.state.idkey,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            province:this.state.province
        }
        axios.post(url,data)
        this.setState({
            idkey:"",
            firstname:"",
            lastname:"",
            email:"",
            province:""
        });
        this.props.history.push('/ShowData');
    }

    componentDidMount() {
        //console.log("before get data");
        this.getData();
        //console.log("after get data");
    }
    getData = () => {
        console.log("before fetch data");
        fetch('/north_province')
            .then(res => res.json())
            .then(list => this.setState({ data:list }))
        console.log("after fetch data");
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
                    <div>
                        <select className="from-group" id="province" value={this.state.province} onChange={this.handleChang} required>
                            <option value="">Select Province</option>
                                {this.state.data.map(item => {
                                    return <option value={item.id_province}>{item.nprovince}</option>
                                })}
                        </select>
                    </div>
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
