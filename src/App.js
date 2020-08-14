import React, { Component } from 'react';
import Filter from './Filter';
import Pagination from "react-js-pagination";

import { connect } from 'react-redux';
import './App.css';
import { onClickGetDetails, onClickChangeSort  } from './redux/action/service';
import { bindActionCreators } from 'redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resultList: [],
      activePage:1
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  componentDidMount(){
    this.props.onClickGetDetails();
  }
  componentDidUpdate(prevProps, prevState){
    if (JSON.stringify(this.props.resultList) !== JSON.stringify(prevProps.resultList) ){
      this.setState({
        resultList: [...this.props.resultList].slice(0,10)
      });
    }
  }
  handlePageChange(pageNumber) {
    let startInd = pageNumber * 10 -10;
    let tempArr = [...this.props.resultList].splice(startInd, 10);

    console.log(`active page is ${startInd}`);
    this.setState({ activePage: pageNumber,
      resultList: tempArr
    });
    console.log(JSON.stringify(tempArr));
    // console.log(JSON.stringify(this.props.resultList.slice(startInd, 10)));
  }
  render() {
    return (
      <div className='App'>
      <Filter/>
          <table style={{border:'2px solid black'}}>
          <thead>
            {this.state.resultList[0] ?Object.keys(this.state.resultList[0]).map((keyItem,index) => { return <th key={keyItem}>{keyItem}</th>}):<th></th>}
          </thead>
          <tbody>
        {this.state.resultList.map((item, index) => {
          return <tr key={item.country}>
          <td>{item.country}</td>
            <td>{item.capital}</td>
            <td>{item.area}</td>
            <td>{item.region}</td>
            <td>{item.population}</td>
          </tr>
           })}
           </tbody>
          </table>

        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.props.resultList.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}>
        </Pagination>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    resultList: state.resultList
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
  onClickGetDetails, onClickChangeSort
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);