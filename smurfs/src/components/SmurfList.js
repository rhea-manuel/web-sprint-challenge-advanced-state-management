import React from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions'

class SmurfList extends React.Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        return (
            <div>
                {this.props.smurfs.map((item) => {
                    return (
                        <div>
                            <h3>{item.name}</h3>
                            <ul>
                                <li>Height: {item.height}</li>
                                <li>Age: {item.age}</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { getData })(SmurfList)