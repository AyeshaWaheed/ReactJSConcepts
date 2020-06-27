import React, { Component } from 'react'        /*rec tab class base componet*/
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    // getStyle = () =>{                           S3
    //    if (this.props.todo.completed) {
    //        return {
    //            textDecoration : 'line-through'
    //        }
    //    } else {
    //        return {
    //            textDecoration : 'none'
    //        }
    //    }
    // }

    getStyle = () =>{
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
     }

    //  markComplete = (e) =>{        S4
    //      console.log(this.props)
    //  }
 

    render() {
        const { id, title } = this.props.todo;
        return (
         //   <div style = {{ backgroundColor: '#f4f4f4'}}>  S1
    //     <div style = {itemStyle}>               S2
        <div style= {this.getStyle()}>
            <p>
                {/* <input type="checkbox" onChange={this.markComplete}/> {' '}     S4 */}
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}
                { title }
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
            </p>
        </div>
        )
    }
}

// PropTypes : validation for the property, that component should have
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// const itemStyle = {                            S2
//     backgroundColor: '#f4f4f4'
// }

const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
