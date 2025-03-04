import React, { Component } from "react";

class vklEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            vklSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    vklHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.vklSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
       
        this.setState({
            vklSelectCheckBox:selectedOptions
        });
    }
    // submit
    vklEventHandleSubmit = (ev)=>{
        // lay du lieu trong submit
        ev.preventDefault();
        alert("Select:" + this.state.tvcSelectCheckBox);
    }
  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.vklSelectCheckBox.includes("Apple")}
              onChange={this.vklHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.vklSelectCheckBox.includes("Banana")}
              onChange={this.vklHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.vklSelectCheckBox.includes("Orange")}
              onChange={this.vklHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.vklEventHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default vklEventForm4;