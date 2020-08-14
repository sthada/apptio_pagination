import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button'; 
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Dropdown, DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';
import './App.css';
import { onClickGetDetails, onClickApplyFilter } from './redux/action/service';
import { bindActionCreators } from 'redux';

const optionsCols = [
    { key: 'Column', text: 'Column', itemType: DropdownMenuItemType.Header },
    { key: 'country', text: 'country' },
    { key: 'capital', text: 'capital' },
    { key: 'region', text: 'region' },
    { key: 'area', text: 'area' },
];

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textFieldval:'',
        };

    }

    render() {
        
        return (
            <div className="content-left-pane">
            <h2>Filters</h2>

                <TextField
                    label="Basic controlled TextField"
                    value={this.state.textFieldval}
                    onChange={(ev) => this.setState({ textFieldval:ev.target.value})}
                />
                <DefaultButton text="Reset Filters" checked={true} onClick={()=>{
                    this.props.onClickGetDetails();
                    this.setState({
                    textFieldval:''
                })}
            }
                />
                <br />
                <br />
                <PrimaryButton text="Apply Filters" checked={true} onClick={() => {  this.props.onClickApplyFilter(this.state.textFieldval)}}
                />

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
    onClickGetDetails,onClickApplyFilter
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter)