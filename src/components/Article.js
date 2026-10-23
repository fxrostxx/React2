import './Article.css';
import Card from './Card';

function Article(props)
{
    return (
        <div className='article'>
            {
                Object.keys(props.db).map
                (
                    elem =>
                    {
                        return <Card human={props.db[elem]} />
                    }
                )
            }
        </div>
    );
}

export default Article;