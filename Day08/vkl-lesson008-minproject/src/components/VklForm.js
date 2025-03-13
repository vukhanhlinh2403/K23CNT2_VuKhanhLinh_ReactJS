import React, { Component } from 'react'

export default class VklForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vklStudent: this.props.renderVklStudent || {
                vklID: '',
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
        if (prevProps.renderVklStudent !== this.props.renderVklStudent) {
            this.setState({ vklStudent: this.props.renderVklStudent });
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
            this.props.onVklHandleEdit(this.state.vklStudent);
        } else {
            this.props.onVklHandleAdd(this.state.vklStudent);
        }
        this.setState({
            vklStudent: {
                vklID: '',
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
        const { vklID, vklName, vklAge, vklGender, vklBirthday, vklBirthPlace, vklAddress } = this.state.vklStudent;
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{this.props.isEdit ? 'Sửa thông tin sinh viên' : 'Thêm mới sinh viên'}</h3>
                        <form className="form-sample" onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="vklID" value={vklID} onChange={this.handleChange} readOnly={this.props.isEdit} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="vklName" value={vklName} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tuổi</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="vklAge" value={vklAge} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Giới tính</label>
                                <div className="col-sm-9">
                                    <select className="form-control" name="vklGender" value={vklGender} onChange={this.handleChange}>
                                        <option>Chọn giới tính</option>
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                                <div className="col-sm-9">
                                    <input type='date' className="form-control" placeholder="dd/mm/yyyy" name="vklBirthday" value={vklBirthday} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="vklBirthPlace" value={vklBirthPlace} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name="vklAddress" value={vklAddress} onChange={this.handleChange} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary me-2">
                                {this.props.isEdit ? 'Sửa' : 'Thêm mới'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}