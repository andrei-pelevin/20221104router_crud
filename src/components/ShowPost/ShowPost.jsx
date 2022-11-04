import moment from 'moment';
import { NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';

const ShowPost = () => {
    const { rID } = useParams();
    const [post, setPost] = useState([{ id: 0, content: 'загрузка...', created: 1667557767471 }]);

    fetch(`http://localhost:7777/posts/${rID}`)
        .then(response => response.json())
        .then(response => setPost(response))

    const onDel = (i) => {
        fetch(`http://localhost:7777/posts/${i}/`, {
            method: 'DELETE',
            headers: {
            },
        });
    }

    return (
        <div className="card col-4 m-5">
            <div className='d-flex justify-content-between'>
                <div className="m-3 d-flex" >
                    <img alt='' style={{ borderRadius: '50%', height: '50px', width: '50px' }} src='https://ae01.alicdn.com/kf/HTB1VaQUdFHM8KJjSZJiq6zx3FXak/-.jpg' />
                    <div className='col-1'></div>
                    <b>Ракета Поперечного</b>
                </div>

                <div className="m-3">
                    {moment(post.created).format('HH:mm DD.MM.YYYY')}
                </div>
            </div>
            <hr />
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{post[0].content}</p>
                </blockquote>
            </div>
            <hr />
            <div className='container d-flex justify-content-end'>
                <NavLink to={{
                    pathname: `/edit/${rID}`,
                    state: { post }
                }}>
                    <button
                        className="btn btn-primary m-1">Изменить
                    </button>
                </NavLink>

                <NavLink to='/'>
                    <button
                        className="btn btn-danger m-1"
                        onClick={() => onDel(post[0].id)}>Удалить
                    </button>
                </NavLink>
            </div>
        </div>
    )
}
export default ShowPost;