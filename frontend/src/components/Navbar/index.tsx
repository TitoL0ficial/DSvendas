import { NavLink } from 'react-router-dom';
import imgDsDark from '../../assets/img/ds-dark.svg';

export default function Navbar() {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">
                <NavLink to="/" className="my-2 my-md-0 mr-md-3">
                    <img src={imgDsDark} alt="DevSuperior" width="120" />
                </NavLink>
            </div>
        </div>
    );
}
