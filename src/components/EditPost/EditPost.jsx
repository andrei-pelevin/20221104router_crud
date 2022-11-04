import moment from 'moment';
import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const EditPost = () => {
    const { rID } = useParams();
    const [post, setPost] = useState({ id: 1, content: 'загрузка...', created: 1667557767471 });

    useEffect(() => {
        fetch(`http://localhost:7777/posts/${rID}`)
            .then(response => response.json())
            .then(response => setPost(response[0]))
    }, [rID])


    const onChange = (event) => {
        let text = event.target.value
        setPost(prevForm => ({ ...prevForm, content: text }))
    }

    const onSubmit = () => {
        const data = async () => {
            try {
                const response = await fetch('http://localhost:7777/posts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({ "id": post.id, "content": post.content })
                })
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
            } catch (e) {
                console.error(e);
            }
        }
        data();

    }

    return (
        <form className='col-4 m-5 border'>
            <div >
                <div className='d-flex justify-content-between'>
                    <div className='col-1'></div>
                    <h4 className=''>Редактировать пост.</h4>
                    <NavLink style={{ textDecoration: 'none' }} to='/'>
                        <span className="material-icons d-flex justify-content-end m-1">
                            highlight_off
                        </span>
                    </NavLink>
                </div>

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
            </div>

            <div className="m-3">
                <input type="text" className="form-control" placeholder='Введите текст' value={post.content} onChange={(event) => onChange(event)} />
            </div>
            <div className=' d-flex justify-content-end'>
                <NavLink to='/' onClick={(event) => onSubmit(event)} className="btn btn-primary" >
                    Сохранить
                </NavLink>
            </div>
        </form>
    )
}

export default EditPost;