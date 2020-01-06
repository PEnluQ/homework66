import React, {Component} from 'react';
import axiosQuotes from "../../axios-quotes";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {CATEGORIES} from "../../constants";

class Edit extends Component {
    state = {
        author: '',
        quote: '',
        category: '',
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        let response = await axiosQuotes.get('/quotes/' + id + '.json');
        const res = response.data;
        if(res) {
            this.setState({author: res.author, quote: res.quote, category: res.category});
        }
    }

    postForm = async event => {
        const mess = {
          author: this.state.author,
          quote: this.state.quote,
          category: this.state.category
        };

        if(event){
            event.preventDefault();
        }
        const put = await axiosQuotes.put('/quotes/' + this.props.match.params.id + '.json', mess);
        if(put.statusText === 'OK'){
            alert('Change is save');
            this.props.history.replace('/');
        }
    };

    changeText = event => {
        this.setState({[event.target.name]:event.target.value});
    };

    render() {
        return  (
            <div>
                <div className='FormInfo'>
                    <h2>Quote</h2>
                    <Form>
                        <FormGroup>
                            <Label for="category">Category</Label>
                            <Input type="select" name="category" id="category"
                                   value={this.state.category}
                                   onChange={this.changeText}
                            >
                                {CATEGORIES.map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="author">Author</Label>
                            <Input type="text" name="author" id="author"
                                   value={this.state.author}
                                   onChange={this.changeText}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="quote">Quote text</Label>
                            <Input type="textarea" name="quote" id="quote"
                                   value={this.state.quote}
                                   onChange={this.changeText}
                            />
                        </FormGroup>
                        <Button onClick={this.postForm}>Save</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Edit;