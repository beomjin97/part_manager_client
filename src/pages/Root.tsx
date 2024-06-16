import { useSearchParams } from "react-router-dom"
import SideBar from "../components/root/Sidebar";
import Footer from "../components/common/Footer";

const Root = () => {
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type')

    return <>
    <SideBar />
    <Footer />
    </>
}

export default Root