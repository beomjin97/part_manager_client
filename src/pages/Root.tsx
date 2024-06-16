import { useSearchParams } from "react-router-dom"

const Root = () => {
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type')

    return <div>Root {type}</div>
}

export default Root