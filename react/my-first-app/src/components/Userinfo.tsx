import React from 'react';
import "./Userinfo.css"

interface Props {
    username: string
}

function UserInfo(props: Props) {
    const { username } = props
    let initials = username.split(" ").reduce((newArray: Array<string>, element ): string[] => {
        newArray.push(element[0])
        return newArray
    }, []).join("")
    return (
        <div className="UserInfo">
            <div className="Initials">{initials}</div> <span>{username}</span>
        </div>
    );
}

export default UserInfo;
