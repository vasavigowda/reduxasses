import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Post.css';
class Post extends Component {
render() {
return (
<div className="post">
<table>
    <div>
    <tr>
    <td><h2 className="tabl1">name</h2>
<p id="tabl3" className="post_title">{this.props.post.title}</p></td>
<td><h2 className="tabl2">User name</h2>
<p className="post_message">{this.props.post.message}</p></td>
</tr>
</div>
</table>
<div className="control-buttons">
<button className="edit"
onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
}
>Edit</button>
<button className="delete"
onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}
>Delete</button>
</div>
</div>
);
}
}
export default connect()(Post);