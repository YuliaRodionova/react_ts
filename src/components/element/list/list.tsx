import React from 'react';
import "./list.scss";

interface IlistItem {
    text: string,
    link: string
}

interface IList {
    title: string;
    items: IlistItem[]
}

function List(props: IList): JSX.Element {
    const { title, items } = props;

    const itemsElems = items.map(item => {
        return <li className='list__item'><a href={item.link}>{item.text}</a></li>;
    })

    return (
        <div className='wrapper'>
            <h3>{title}:</h3>
            <ul className='list'>{itemsElems}</ul>
        </div>
    );
}
export default List;