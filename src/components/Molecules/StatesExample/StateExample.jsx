import { useEffect, useState } from "react"
import hi from "./styles.module.css"


export default function StateExample() {

    let [likes, setLikes] = useState(202)
    let [isUserLike, setIsUserLike] = useState(false)

    let [title, setTitle] = useState("Before Refresh")

    const handleClick = () => {
        if (isUserLike === false) {
            setLikes(likes + 1)
            setIsUserLike(true)
        }
        else {
            setLikes(likes - 1)
            setIsUserLike(false)
        }
    }

    useEffect(() => {
        setTitle("After Refresh")
    }, [isUserLike])

    return (
        <div>
            <h1 className={hi.header1Styles}>{likes}</h1>
            <h1 className={hi.header2Styles}>{title}</h1>
            <button onClick={() => handleClick()}>Like</button>
        </div>
    )
}
