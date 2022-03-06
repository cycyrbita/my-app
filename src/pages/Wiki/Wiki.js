
import React, {Component} from "react";
import Avatars from "../../components/Avatars/Avatars";
import '../../scss/article.scss'
import '../../scss/aside.scss'

class Wiki extends Component {
    render() {
        return (
            <React.Fragment>
                <aside className="aside"></aside>
                <article className="article">
                    <Avatars />
                </article>
            </React.Fragment>
        )
    }
}

export default Wiki