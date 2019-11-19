import React from 'react';
import Item from '../Item/Item';
import './List.css';

const List = ({ data, handleRemove }) => <div className="list">{data.map(item => <Item key={item.id} item={item} handleRemove={handleRemove} />)}</div>

export default List;