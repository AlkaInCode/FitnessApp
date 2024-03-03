import React from 'react';
import TodoItem from "../MyComponents/TodoItem";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCreativeCommons } from '@fortawesome/free-brands-svg-icons';

export default function Todos(props) {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    };

    return (
        <div className='container my-3' style={myStyle}>
            <div className='row'>
                <div className='col'>
                    <h3 className='my-3'>My List</h3>
                </div>
            </div>
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((todo) => (
                    <React.Fragment key={todo.sno}>
                        <TodoItem todo={todo} onDelete={props.onDelete} onToggle={props.onToggle} />
                        <hr />
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <Link to="/f-solid">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ margin: '10px', cursor: 'pointer' }} />
                            </Link>
                            <Link to="/c-solid">
                                <FontAwesomeIcon icon={faCreativeCommons} size="2x" style={{ margin: '10px', cursor: 'pointer' }} />
                            </Link>
                        </div>
                    </React.Fragment>
                ))
            }
        </div>
    );
}
