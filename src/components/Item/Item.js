import React from 'react';
import './Item.css';

/* Font awesome */
import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";

const Item = ({ item, handleRemove }) => <div className="itemContainer"><div>{item.name}</div><div onClick={() => handleRemove(item.id)}><i className="far fa-trash-alt"></i></div></div>;

export default Item;