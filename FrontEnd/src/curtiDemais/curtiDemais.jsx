// import React, {Component} from 'react'
// import axios from 'axios'

// import $ from 'jquery'
// import CurtiForm from './curtiDemaisForm'
// import CurtiList from './curtiDemaisList'
// import {BasicURL, AuthToken} from '../main/configAxios'
// import Grid from '../template/grid'
// const URL = 'http://localhost:3003/api/shots'

// export default class CurtiDeMais extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       title: '',
//       tamanho: false,
//       list: []
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSearch = this.handleSearch.bind(this)
//     this.handleSize = this.handleSize.bind(this)
//     this.handleViewShot = this.handleViewShot.bind(this)
//     this.refresh()
//   }

//      refresh(title = '') {
//         const search = title ? `&title__regex=/${title}/` : ''
//         axios.get(`${URL}?sort=-createdAt${search}`)
//             .then(resp => this.setState({...this.state, title, list: resp.data}))
//     }

//     handleSearch() {
//         this.refresh(this.state.title)
//     }

//     handleChange(e) {
//         this.setState({...this.state, title: e.target.value })
//     }

//   handleSize() {
//     this.setState(prevState => ({
//       mudarTamanho: !prevState.mudarTamanho
//     }));
//     //$('#app').fadeOut(3000);
//   }

//   handleViewShot(shot) {
//      window.location = `#/shot/${shot.id}`
//   }

//   render() {
//     return (
//       <div className="">
//         <div className="box-body row">
//           <CurtiForm
//             username={this.state.username}
//             handleChange={this.handleChange}
//             handleSearch={this.handleSearch}/>
//         </div>

//           <button id='alteraTamanho' className='btn btn-primary tamanho' onClick={this.handleSize}>
//             <i className='icon-grid'></i> Alterar Tamanho
//           </button>
//         <div className={ this.state.mudarTamanho ? 'alterarTamanho' : ''}>
//         <CurtiList
//           list={this.state.list}
//           handleViewShot={this.handleViewShot}/>
//       </div>
//       </div>
//     )
//   }
// }

import React from 'react'

import CurtiDemaisForm from './curtiDemaisForm'
import CurtiDemaisList from './curtiDemaisList'

export default props => (
  <div>
    <div className="box-body row">
      <CurtiDemaisForm />
    </div> 
    <CurtiDemaisList  />
  </div>
)
  
