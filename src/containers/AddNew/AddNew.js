import React, {Component, Fragment} from 'react';
import axiosQuotes from "../../axios-quotes";
import {CATEGORIES} from "../../constants";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class AddNew extends Component {
    state = {
        author: '',
        quote: '',
        category: CATEGORIES[0],
        load: false,
    };

    changeText = event => this.setState({[event.target.name]:event.target.value});

    submitInfo = async (event) => {
        event.preventDefault();

        if(this.state.author === '' || this.state.quote === ''){
            alert('Write')
        } else {
            const newQuote = {
                author: this.state.author,
                quote: this.state.quote,
                category: this.state.category,
            };
            this.setState({load:true});
            await axiosQuotes.post('/quotes.json', newQuote);
            this.setState({author: '', quote: '', load:false});
        }
    };

    render() {
        let add = !this.state.load ? <div className='FormInfo'>
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
                <Button onClick={this.submitInfo}>Save</Button>
            </Form>
        </div> : <h2>Loading...</h2>;
        return (
            <Fragment>
            {add}
            </Fragment>
        );
    }
}

export default AddNew;