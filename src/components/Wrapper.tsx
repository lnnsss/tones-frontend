import { observer } from "mobx-react-lite";
import { useStores } from "../stores/root-store-context";
import AdminLayout from "./adminLayout";
import Layout from "./layout";
import Modals from "./Modals.tsx";

const Wrapper = observer(() => {
    const {
        token: { hasRole },
        modal: { isModalActive }
    } = useStores();

    const isAdmin = hasRole('ADMIN');

    return (
        <div className="wrapper">
            {isAdmin ? <AdminLayout /> : <Layout />}
            {isModalActive && <Modals />}
        </div>
    );
});

export default Wrapper;