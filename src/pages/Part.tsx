import { useParams } from "react-router-dom";

const Part = () => {
    const {id} = useParams()

    return <div>Part {id}</div>
}

export default Part;