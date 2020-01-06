import React from 'react';
import {Button, Toast, ToastBody, ToastHeader} from "reactstrap";
import {Link} from "react-router-dom";
import './Posts.css';

const Posts = props => {
    return (
        <div className="p-3 my-2 rounded">
            <Toast>
                <ToastHeader>{props.name}</ToastHeader>
                <ToastBody>{props.text}
                    <Button className='btn-1' tag={Link} color='primary' to={props.to}>Edit</Button>
                    <Button className='btn-2' onClick={props.onCLick} color='danger'>X</Button>
                </ToastBody>
            </Toast>
        </div>
    );
};

export default Posts;