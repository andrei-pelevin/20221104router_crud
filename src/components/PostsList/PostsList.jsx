import PostItem from '../PostItem/PostItem';

function PostList({ posts }) {
    return (
        <div>
            <h3 className='m-3'>{posts.length > 0 ? 'Список постов:' : 'Здесь еще никто не писал, напиши первым'}</h3>
            {posts.map(item => <PostItem item={item} key={item.id} />)}
        </div>
    )
}
export default PostList;