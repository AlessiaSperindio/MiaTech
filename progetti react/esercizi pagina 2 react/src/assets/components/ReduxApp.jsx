//Modifica il componente App per includere il Provider di Redux.
import { Provider } from 'react-redux';
import { store } from './assets/store/store';
import TodoInput from './assets/components/TodoInput';

const ReduxApp = () => {
    return (
        <Provider store={store}>
            <TodoInput />
        </Provider>
    );
}

export default ReduxApp;