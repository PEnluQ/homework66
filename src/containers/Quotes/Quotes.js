import React, {Component, Fragment} from 'react';
import axiosQuotes from "../../axios-quotes";
import Posts from "../../components/Posts/Posts";
import {CATEGORIES} from "../../constants";
import {NavLink} from "react-router-dom";
import requestInfo from "../../hoc/requestInfo/requestInfo";

class Quotes extends Component {
    state = {
      quotes: [],
    };

    requestInfo = async () => {
        let url = '/quotes.json';

        if(this.props.match.params.name) {
            url += `?orderBy="category"&equalTo="${this.props.match.params.name}"`
        }

        const response = await axiosQuotes.get(url);

        if (response.data) {
            this.setState({quotes: response.data});
        }
    };

    async componentDidMount() {
        this.requestInfo();
    };

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.name !== this.props.match.params.name){
           return this.requestInfo();
        }
    }

    removeQuote = async (id) => {
      const remove = await axiosQuotes.delete('/quotes/' + id + '.json');
      if(remove.status === 200){
          return this.requestInfo();
      }
    };

    render() {
        return (
            <Fragment>
                <ul>
                    <li><NavLink to={'/'}>{CATEGORIES[0]}</NavLink></li>
                    {CATEGORIES.filter(item => (
                        item !== 'All'
                    )).map(c => (
                        <li key={c}>
                            <NavLink to={'/categories/' + c}>{c}</NavLink>
                        </li>
                    ))}
                </ul>
                {Object.keys(this.state.quotes).map(id => (
                    <Posts
                        key={id}
                        onCLick={() => this.removeQuote(id)}
                        name={this.state.quotes[id].author}
                        text={this.state.quotes[id].quote}
                        to={"/quotes/" + id}
                    />
                ))}
            </Fragment>
        );
    }
}

export default requestInfo(Quotes, axiosQuotes);