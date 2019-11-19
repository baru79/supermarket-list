import { uuid } from 'uuidv4';

const DELAY = 1000;

let DATA = [
    {
        id: '1',
        name: 'Beer'
    },
    {
        id: '2',
        name: 'Coffee'
    },
    {
        id: '3',
        name: 'More Beer'
    },
    {
        id: '4',
        name: 'Coke'
    },
];

const getAllItems = () =>
    new Promise(resolve => setTimeout(resolve, DELAY, { ok: true, results: [...DATA] }));

const addItem = name => {
    const obj = { id: uuid(), name };
    DATA.push(obj);
    return new Promise(resolve => setTimeout(resolve, DELAY, { ok: true, results: obj }));
}

const removeItem = id => {
    DATA = DATA.filter(item => item.id !== id);
    return new Promise(resolve => setTimeout(resolve, DELAY, { ok: true, results: id }));
}

export default { getAllItems, addItem, removeItem };