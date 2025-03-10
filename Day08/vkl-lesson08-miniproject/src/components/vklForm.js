import React, { Component } from 'react'

class vklForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          vklStudent: this.props.rendervklStudent || {
              vklId: '',
              vklName: '',
              vklAge: '',
              vklGender: '',
              vklBirthday: '',
              vklBirthPlace: '',
              vklAddress: ''
          }
      };
  }

  componentDidUpdate(prevProps) {
      if (prevProps.rendervklStudent !== this.props.rendervklStudent) {
          this.setState({ vklStudent: this.props.rendervklStudent });
      }
  }

  handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
          vklStudent: {
              ...this.state.vklStudent,
              [name]: value
          }
      });
  }

  handleSubmit = (e) => {
      e.preventDefault();
      if (this.props.isEdit) {
          this.props.onvklHandleEdit(this.state.vklStudent);
      } else {
          this.props.onvklHandleAdd(this.state.vklStudent);
      }
      this.setState({
          vklStudent: {
              vklId: '',
              vklName: '',
              vklAge: '',
              vklGender: '',
              vklBirthday: '',
              vklBirthPlace: '',
              vklAddress: ''
          }
      });
  }
  render() {
    let {rendervklStudent} = this.props;
    return (
        <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" value={rendervklStudent.vklId}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" value={rendervklStudent.vklStudentName} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" value={rendervklStudent.vklAge}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select className="form-control" name="vklGender" value={vklGender} onChange={this.handleChange} >
                  <option>Chọn giới tính</option>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input className="form-control" placeholder="dd/mm/yyyy" value={rendervklStudent.vklBirthday}/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control" value={rendervklStudent.vklBirthPlace}>
                  <option value={"HN"}>Hà Nội</option>
                  <option value={"TpHCM"}>TP. Hồ Chí Minh</option>
                  <option value={"DN"}>Đà Nẵng</option>
                  <option value={"QN"}>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea className="form-control" defaultValue={rendervklStudent.vklAddress} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default vklForm;