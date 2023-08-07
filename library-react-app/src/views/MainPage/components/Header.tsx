import React, {FC} from "react";

export const Header: FC = () => {
    return (
        <div className={" flex h-16 bg-blue-300 relative"}>
            <span><img src={"/images/logo/logo.png"} alt={"logo"} width={70} height={70}/></span>
            <div className={"w-64 text-white flex mx-4 justify-evenly  py-4"}>

                <a href={"#"}><span>Home</span></a>
                <a href={"#"}><span>Search Books</span></a>
            </div>
            <button className={"border-1 rounded text-white absolute top-4 right-8"}>Sign in</button>
        </div>
    );
}