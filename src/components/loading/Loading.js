import React from "react";
import {FadeLoader} from "react-spinners";
import "../../css/custom.css"

const Loading = ({isLoading}) => {
    return(
        <div className="sweet-loading">
            <FadeLoader
                color={"gray"}
                loading={isLoading}
                size={300}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loading
