import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        {/* <img src="./loading.gif" alt="loading" /> // Not Working */}
        <img src={loading} className="my-3" alt="loading" style={{height:'80px',width:'80px'}}/>
      </div>
    )
  }
}
