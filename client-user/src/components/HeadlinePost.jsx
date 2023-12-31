import { Link } from "react-router-dom"

function HeadlinePost({headlinePost}) {
    if (headlinePost) return (
        <div className="" style={{width: "56%"}}>
            <Link to={`/post/${headlinePost.id}`} className="nav-link">
                <img src={headlinePost.imgUrl} className="card-img-top" alt="..." width={"100%"} height={"400px"} style={{objectFit: "cover"}}/>
                <div className="card-body">
                    <h2 className="card-title my-4 fw-bold" style={{}}>{headlinePost.title}</h2>
                    <p className="card-text">{headlinePost.content.substring(0, 240) + " ..."}</p>
                </div>
            </Link>
        </div>
    )
}

export default HeadlinePost