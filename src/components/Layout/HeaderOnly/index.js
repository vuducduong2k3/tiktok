import Header from "~/components/Layout/components/Header";

function HeaderOnly({children}) {
    return ( <h2>
        <Header/>
        <div className="container">
            <div className="Content">
                {children}
            </div>
        </div>
    </h2> );
}

export default HeaderOnly;