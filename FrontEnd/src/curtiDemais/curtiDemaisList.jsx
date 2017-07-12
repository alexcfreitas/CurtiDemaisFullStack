import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { handleViewShot, alterarTamanho } from './curtiActions'

import Grid from '../template/grid'

const CurtiDemaisList = props => {

  const renderShots = () => {
    const list = props.list || []
    return list.map(shot => (
      <Grid key={shot.id} cols={'12 6 4'}>
        <div  className="dribbble">
          <div   className="dribbble-shot">
            <div className="shot-img">
              <img className="img-responsive" src={shot.images.hidpi ? shot.images.hidpi : shot.images.normal }  
               onClick={() => props.handleViewShot(shot)} alt="Sem Imagem"/>
            </div>
            <ul  className="tools group">
              {/* <li className="fav">
                <i className='fa fa-heart' ></i><span>{shot.likes_count}</span>
              </li>
              <li className="cmnt">
                <i className='fa fa-comments'></i><span> {shot.comments_count}</span>
              </li> */}
              <li className="views">
                <a id='' className='tamanho' title="Alterar Tamanho do Shot" onClick={() => props.alterarTamanho(shot.id)} >
                 <i className='fa fa-eye'></i> 
                </a>
               
              </li>
            </ul>
          </div>
        </div>
      </Grid>
    ))
  }

  return (

      <Grid cols='12'>
        <div className="clearfix"></div>
        <div className='row'>
        {renderShots()}
        </div>
      </Grid>
  )
}


const mapStateToProps = state => ({list: state.curti.list})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ handleViewShot, alterarTamanho }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CurtiDemaisList)