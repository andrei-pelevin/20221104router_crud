import moment from 'moment';
import {  NavLink } from 'react-router-dom';

const PostItem = ({ item }) => {
    return (
        <div className="card col-4 m-5">
            <div className='d-flex justify-content-between'>

                <div className="m-3 d-flex" >
                    <img alt='' style={{ borderRadius: '50%', height: '50px', width: '50px' }} src='https://ae01.alicdn.com/kf/HTB1VaQUdFHM8KJjSZJiq6zx3FXak/-.jpg' />
                    <div className='col-1'></div>
                    <b>Ракета Поперечного</b>
                </div>

                <div className="m-3">
                    {moment(item.created).format('HH:mm DD.MM.YYYY')}
                </div>
            </div>
            <hr />
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{item.content}</p>
                </blockquote>
            </div>
            <hr />
            <div className='container d-flex justify-content-end'>
                <NavLink className='btn btn-primary m-3'
                    to={{
                        pathname: `/posts/${item.id}`,
                        state: { data: item }
                    }}>Перейти к посту</NavLink>
            </div>
        </div>
    )
}
export default PostItem;