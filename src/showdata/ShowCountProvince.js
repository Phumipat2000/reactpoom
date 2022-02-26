import React, {Component} from "react";
import axios from "axios";
import Modal from 'react-awesome-modal';
import './Showdata.css';
//import '../../server/app';
import {ip,port} from "../setIP/setting";

export default class ShowCountProvince extends Component{
    constructor() {
        super();
        this.state ={
            list:[],
            // idkey:"",
            // firstname:"",
            // lastname:"",
            id_province:"",
            north_province:"",
            // timestamp:""
        }
        this.handleChang = this.handleChang.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
        //console.log("hello show data");
    }
    componentDidMount() {
        //console.log("before get data");
        this.getData();
        //console.log("after get data");
    }
    getData = () => {
        console.log("before fetch data");
        fetch('/count_north_province')
            .then(res => res.json())
            .then(list => this.setState({ list }))
        console.log("after fetch data");
    }

    onDelete=(user)=>{
        let url = `https://localhost:3000/delete`;
        let data = {
            idkey:user.id
        }
        axios.put(url,data)
        setTimeout(()=>{this.componentDidMount()},1)
    }

    openModal() {
        this.setState({
            visible : true
        });

    }
    closeModal() {
        this.setState({
            visible : false
        });
    }
    call=(user)=>{
        this.openModal();
        this.setState({
            // idkey:user.id,
            // firstname:user.firstname,
            // lastname:user.lastname,
            id_province:user.id_province,
            north_province:user.north_province,
            // timestamp:user.timestamp	
        })
    }
    handleChang = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        let url = `https://localhost:3000/data`;
        let data = {
            // idkey:this.state.idkey,
            // firstname:this.state.firstname,
            // lastname:this.state.lastname,
            id_province:this.state.id_province,
            north_province:this.state.north_province,
            // timestamp:this.state.timestamp
        }
        axios.put(url,data)
    }

    handleClicked(){
        let url = `https://localhost:3000/data`;
        let data = {
            // idkey:this.state.idkey,
            // firstname:this.state.firstname,
            // lastname:this.state.lastname,
            id_province:this.state.id_province,
            north_province:this.state.north_province,
            // timestamp:this.state.timestamp
        }
        axios.put(url,data)
        this.setState({
            // idkey:"",
            // firstname:"",
            // lastname:"",
            id_province:"",
            north_province:"",
            // timestamp:""
        });
	this.closeModal();
        setTimeout(()=>{this.componentDidMount()},1)
    }
    render() {
        let {list} = this.state;

        return (
            <div className="App">
                <h2 className="my-4">Users Information<br/></h2>
                <hr/>
                <div className="container p-3 my-3 bg-dark text-white">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                            {/* <th>ID</th> */}
                            {/* <th>First Name</th>
                            <th>Last Name</th> */}
                            <th>Province</th>
                            <th>Count Total</th>
                            {/* <th>Time</th> */}
                            </tr>
                        </thead>
                        <tbody>
                                {list.map((user) =>{
                                    return(
                                        <tr>
                                            {/* <td>{user.id}</td> */}
                                            {/* <td>{user.firstname}</td>
                                            <td>{user.lastname}</td> */}
                                            <td>{user.province}</td>
                                            <td>{user.total}</td>
                                            {/* <td>{user.timestamp}</td> */}
                                            {/* <td><button type="button" class="btn btn-warning" onClick={()=>this.call(user)}>Edit</button></td>
                                            <td><button type="button" class="btn btn-danger"  onClick={()=>this.onDelete(user)}>Delete</button></td> */}
                                            {/* <div className="box">
                                                <Modal visible={this.state.visible}
                                                       width="1200"
                                                       height="600"
                                                       effect="fadeInUp"
                                                       onClickAway={() => this.closeModal()}
                                                > */}
                                                    {/* <form className="container" id='form'> */}
                                                        {/* <div className="form-group">
                                                            <h3><label htmlFor="id">ID: {this.state.idkey}<br/></label></h3>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>First Nname:</label>
                                                            <input type="text" className="form-control" id="firstname" onChange={this.handleChang} value={this.state.firstname}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Last Name:</label>
                                                            <input type="text" className="form-control" id="lastname" onChange={this.handleChang} value={this.state.lastname}/>
                                                        </div> */}
                                                        {/* <div>
                                                            <select className="form-group" id="province" value={this.state.province} onChange={this.handleChang} required>
                                                                <option value="">Select Province</option>
                                                                    {this.state.data.map(item => {
                                                                        return <option value={item.id_province}>{item.nprovince}</option>
                                                                    })}
                                                            </select>
                                                        </div> */}
                                                        {/* <button type="button" className="btn btn-primary" onClick={this.handleClicked}>Submit</button> */}
                                                    {/* </form> */}
                                                {/* </Modal>
                                            </div> */}
                                        </tr>
                                    )})}
                        </tbody>
                    </table>
                </div><br/>
            </div>
        );
    }
}
