import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Cross the Border- ${title}`
    }, [title])
}
export default useTitle;