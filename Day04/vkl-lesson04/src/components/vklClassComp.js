import React, { Component } from 'react'

class vklClassComp extends Component {
    constructor(props){
        super(props)
        // khoi tao state
        this.state = {
            fullName:"Vu Linh",
            ags:40,
            phone:"0584184154"
        }
    }
    // ham xu ly su kien
    changeInfo = (ev)=>{
        // cap nhap state
        this.setState({
            fullName:"Vu Khanh Linh"
        });
    }
  render() {
    let users = this.props.renderUsers;
    console.log('=============================');
    console.log(users);
    console.log('=============================');
    return (
      <div className='alert alert-success'>
        <h2>trinh bay du lieu tu state</h2>
        <p>info state (fullName): {this.state.fullName}</p>
        <p>info state (age): {this.state.age}</p>
        <p>info state (phone): {this.state.phone}</p>

        <hr/>
        <button className='btn btn-primary' onClick={this.changeInfo}>Change Info</button>
        <hr/>
        <h3>lay du lieu tu props</h3>
        <p>Name: {this.props.renderName}</p>
        <p>fullName: {this.props.renderUsers ?this.props.renderUsers.fullName:''}</p>
        <p>age: {this.props.renderUsers ?this.props.renderUsers.age:''}</p>
        <p>phone: {this.props.renderUsers ?this.props.renderUsers.phone:''}</p>
      </div>
    );
  }
}
export default vklClassComp;