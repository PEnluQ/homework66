import React, {Component, Fragment} from 'react';

const requestInfo = (WrappedComponent, axios) => {
    return class Spinner extends Component {
        constructor(props) {
            super(props);

            this.state = {
                spinner: false
            };

            this.state.interceptorId = axios.interceptors.request.use(req => {
                this.setState({spinner: true});
                console.log('This request', req);
                return req;
            }, error => {
                alert('Oops, we have problem');
                throw error
            });

           this.state.interceptorDi = axios.interceptors.response.use(res => {
                this.setState({spinner: false});
                return res;
            }, error => {
                alert('Oops, we have problem');
                throw error
            });
        };

        componentWillUnmount() {
            axios.interceptors.request.eject(this.state.interceptorId);
            axios.interceptors.response.eject(this.state.interceptorDi);
        }

        render() {
            return (
                <Fragment>
                    <WrappedComponent {...this.props}/>
                    <div>{this.state.spinner ? 'loading' : null}</div>
                </Fragment>
            )
        }
    }
};

export default requestInfo;