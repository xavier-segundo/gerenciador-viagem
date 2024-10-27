import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <Link to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" >
                        <span className="mb-3 mb-md-0 text-body-secondary">
                            © 2024 Company, Inc
                        </span>
                    </Link>
                </div>
            </footer>
        </div>

    );
}