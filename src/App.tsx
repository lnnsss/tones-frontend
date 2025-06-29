import './styles/App.css';
import { RootStoreContext } from './stores/root-store-context';
import RootStore from './stores/root-store';
import { observer } from 'mobx-react-lite';
import Wrapper from "./components/Wrapper.tsx"
import { useMemo } from 'react';

const App = observer(() => {
    const rootStore = useMemo(() => new RootStore(), []);

    return (
        <RootStoreContext.Provider value={rootStore}>
            <Wrapper />
        </RootStoreContext.Provider>
    );
});

export default App;