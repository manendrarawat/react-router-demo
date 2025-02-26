import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/auth"
                className={({isActive, isPending, isTransitioning}) =>
                [
                    isPending ? "pending" : "",
                    isActive ? "activeLink" : "",
                    isTransitioning ? "transitioning" : "",
                ].join(" ")
            }
            >Home</NavLink>
            <NavLink to="/posts"
                className={({isActive, isPending, isTransitioning}) =>
                    [
                        isPending ? "pending" : "",
                        isActive ? "activeLink" : "",
                        isTransitioning ? "transitioning" : "",
                    ].join(" ")
                }

                // style={({isActive, isPending, isTransitioning}) => {
                // return {
                //     fontWeight: isActive ? "bold" : "",
                //     color: isPending ? "red" : "black",
                //     viewTransitionName: isTransitioning ? "slide" : "",
                // };
                // }}
            >Posts</NavLink>
        </header>
    );
};

export default Header;