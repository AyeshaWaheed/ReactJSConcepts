import React, { Component } from 'react'        /*rec tab class base componet*/

export class TodoItem extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

export default TodoItem
