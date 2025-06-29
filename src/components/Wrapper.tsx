import { observer } from "mobx-react-lite";
import { useStores } from "../stores/root-store-context";
import AdminLayout from "./adminLayout";
import Layout from "./layout";

const Wrapper = observer(() => {
    const {
        token: { hasRole }
    } = useStores();

    const isAdmin = hasRole('ADMIN');

    return (
        <div className="wrapper">
            {isAdmin ? <AdminLayout /> : <Layout />}
        </div>
    );
});

export default Wrapper;