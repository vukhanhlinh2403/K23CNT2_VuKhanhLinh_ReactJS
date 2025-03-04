
import React, { Component } from 'react';

class vklEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            vklName:'Linh',
            vklAge:45,
            vklGender:'Female',
            vklEventForm5Course:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    vklHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    vklHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.vklName + "\n" + this.state.vklAge);

        if (this.props.onvklHandleSubmit) {
            this.props.onvklHandleSubmit(this.state);
          } else {
            console.error("Lỗi: onvklHandleSubmit chưa được truyền vào props!");
          }
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='vklName'>Student Name:</label>
                        <input type='text' name='vklName' id='vklName' 
                            value={this.state.vklName}
                            onChange={this.vklHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='vklAge'>Student Age:</label>
                        <input type='text' name='vklAge' id='vklAge' 
                            value={this.state.vklAge}
                            onChange={this.vklHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='vklGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='vklGender' id='vklMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.vklGender === 'Male'}
                                onChange={this.vklHandleChange} />
                            <label htmlFor='vklMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='vklGender' id='vklFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.vklGender === 'Female'}
                                onChange={this.vklHandleChange} />
                            <label htmlFor='vklFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='vklGender' id='vklNone' className='mx-2'
                                value={'None'}
                                checked={this.state.vklGender === 'None'}
                                onChange={this.vklHandleChange} />
                            <label htmlFor='vklNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='vklCourse'>
                            <select name='vklCourse' id='vklCourse' 
                                    value={this.state.vklCourse}
                                    onChange={this.vklHandleChange} >
                                <option value={'HTML5'}>HTML5</option>
                                <option value={'CSS3'}>CSS3</option>
                                <option value={'Javascript'}>Javascript</option>
                                <option value={'Jquery'}>Jquery</option>
                                <option value={'Bootstrap'}>Bootstrap</option>
                            </select>   
                        </label>
                    </div>
                    <button onClick={this.vklHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default vklEventForm5;
