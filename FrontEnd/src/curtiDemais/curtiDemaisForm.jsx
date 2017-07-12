
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import {  changeDescription, search } from './curtiActions'

class CurtiDemaisForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { search, description } = this.props

    }

    render() {
        const { search, description } = this.props
        return (
            <div role='form' className='curtiForm'>
              <Grid cols='12 10 '>
                <input id='username' className='form-control'
                  placeholder='O que voceê deseja pesquisar ?'
                                  onChange={this.props.changeDescription}
                                  value={this.props.description}></input>
              </Grid>
              <Grid cols='12 2'>
                <button className='btn btn-primary' onClick={search}>
                  <i className='icon-magnifier'></i> Pesquisar
                </button>
              </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.curti.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeDescription, search, }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CurtiDemaisForm)

