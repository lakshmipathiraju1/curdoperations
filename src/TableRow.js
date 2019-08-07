import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
}
delete() {
  if(window.confirm("this item deleted or not"))
    axios.get('http://localhost:4000/business/delete/'+this.props.obj._id)
        .then((results) => {
          alert(" deleted Successfully");
          window.location.href="/index";
      })
      .catch((err) => {
        alert("this some errors"+JSON.stringify(err))
      })        
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.person_name}
          </td>
          <td>
            {this.props.obj.business_name}
          </td>
          <td>
            {this.props.obj.business_gst_number}
          </td>
          <td>
            <button className="btn btn-primary">
              
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
            </button>
          </td>
          <td>
            <button className="btn btn-danger"><button onClick={this.delete} className="btn btn-danger">Delete</button></button>
          </td>
        </tr>
    );
  }
}

export default TableRow;