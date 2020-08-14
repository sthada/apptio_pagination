/**
 * Created by Shivam on  -4 Jan,2020.
 */

import axios from 'axios';

export const onClickGetDetails = () => {
    console.log('onClickGetDetails');
    return (dispatch) => {

        return axios.get("https://restcountries.eu/rest/v2/all").then((res) => {

            let result = [];
            res.data.forEach(item => {
                let resultObj = {
                    country: item.name,
                    capital: item.capital,
                    area: item.area,
                    region: item.region,
                    population: item.population
                };
                result.push(resultObj);
            });

            console.log('res received' + JSON.stringify(result));
            dispatch({
                type: 'GET_DETAILS',
                value: result,
            })
            return false;
        }).catch((error) => {
            alert("There was an error in uploading the event. Kindly try again in sometime");
            dispatch({
                type: "global/STOP_LOADING"
            })

        });
    }
}

export const onClickChangeSort = (list, sort) => {
    return (dispatch) => {
        dispatch({
            type: 'SORT_BY_CHANGE',
            value: list.reverse()
        })
    }
}

export const onClickApplyFilter = (filterStr) => {
    console.log('res received' + JSON.stringify(filterStr));
    return (dispatch) => {
        return axios.get("https://restcountries.eu/rest/v2/all").then((res) => {

            let result = [];
            res.data.forEach(item => {
                let resultObj = {
                    country: item.name,
                    capital: item.capital,
                    area: item.area,
                    region: item.region,
                    population: item.population
                };
                if (item.name.toLowerCase().includes(filterStr) || item.capital.toLowerCase().includes(filterStr)){
                result.push(resultObj)}
            });

            console.log('res received' + JSON.stringify(result));
            dispatch({
                type: 'FILTER',
                value: result
            })
            return false;
        }).catch((error) => {
            alert("There was an error in uploading the event. Kindly try again in sometime");
            dispatch({
                type: "global/STOP_LOADING"
            })

        });
    }
}
