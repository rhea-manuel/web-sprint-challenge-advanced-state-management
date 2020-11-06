import React from 'react'
import { connect } from 'react-redux'

import { changeValue } from '../actions'

class Form extends React.Component {

    onChange = (evt) => {
        this.props.changeValue({
            name: evt.target.name,
            value: evt.target.value
        })
    }

    render() {
        return (
            <form>
                <label>
                    Name:
                    <input value={this.props.form.name} onChange={this.onChange} name="name"></input>
                </label>
                <label>
                    Age:
                    <input type="number" value={this.props.form.age}  onChange={this.onChange} name="age"></input>
                </label>
                <label>
                    Height:
                    <input type="number" value={this.props.form.height}   onChange={this.onChange} name="height"></input>
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        form: state.form
    }
}

export default connect(mapStateToProps, { changeValue })(Form)