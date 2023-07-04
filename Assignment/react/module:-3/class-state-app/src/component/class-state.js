import React, { Component } from "react";
// import { Button } from "bootstrap";
class Stateclass extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: "Deep",
            age: "20",
            study: "Bsc(cs)",
            salary:"34000"
        };
 
    } 

render() {
    return (
        <table className="bg-warning text-white w-75 mx-auto mt-5 pt-5">
            <tbody>
                <tr>
                    <td>
                        <h1>My Name is <span style={{color:"black"}}>{this.state.name}</span></h1>
                    </td>
                    <td>
                        <button type="button" className="btn btn-sm btn-primary mt-3" onClick={() => this.setState({ name: "Axit" })}>Update Name</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h1><span className="text-black"> My Age is</span><span className="textcolor"> :&nbsp;{this.state.age}</span></h1>
                    </td>
                    <td>
                        <button type="button" className="btn btn-sm btn-primary mt-3" onClick={() => this.setState({ age: "22" })}>Update age</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h1>My Study is <span className="textcolor1"> :&nbsp;{this.state.study}</span></h1>
                    </td>
                    <td>
                        <button type="button" className="btn btn-sm btn-primary mt-3" onClick={() => this.setState({ study: "Web Deeloper" })}>Update study</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h1><span className="text-black">My Salary is </span><span className="textcolor"> :&nbsp;{this.state.salary}</span></h1>
                    </td>
                    <td>
                        <button type="button" className="btn btn-sm btn-primary mt-3" onClick={() => this.setState({ salary: "45000" })}>Update study</button>
                    </td>
                </tr>
  
            </tbody>
        </table>
    )
}

}

export default Stateclass;
