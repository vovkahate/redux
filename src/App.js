import { useDispatch, useSelector } from 'react-redux';
import {
    addCustomerAction,
    removeCustomerAction,
} from './store/customerReducer';

function App() {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);
    const customers = useSelector((state) => state.customers.customers);
    console.log('cash', cash);

    const addCash = (cash) => {
        dispatch({ type: 'ADD_CASH', payload: cash });
    };

    const removeCash = (cash) => {
        dispatch({ type: 'REMOVE_CASH', payload: cash });
    };

    const addCustomer = (name) => {
        const customer = {
            name: name,
            id: Date.now(),
        };
        dispatch(addCustomerAction(customer));
    };

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id));
    };

    return (
        <div className="App">
            <div>{cash}</div>
            <div style={{ display: 'flex' }}>
                <button onClick={() => addCash(Number(prompt('Add Cash')))}>
                    Add Cash
                </button>
                <button
                    onClick={() => removeCash(Number(prompt('Remove Cash')))}
                >
                    Remove Cash
                </button>
                <button onClick={() => addCustomer(prompt('Add Customer'))}>
                    Add Customer
                </button>
                <button
                    onClick={() => removeCash(Number(prompt('Remove Client')))}
                >
                    Remove Cash
                </button>
            </div>
            {customers.length > 0 ? (
                <div>
                    {customers.map((customer) => (
                        <div
                            onClick={() => removeCustomer(customer)}
                            style={{ border: '1px solid red', padding: '30px' }}
                        >
                            {customer.name}
                        </div>
                    ))}
                </div>
            ) : (
                <div>No customers</div>
            )}
        </div>
    );
}

export default App;
