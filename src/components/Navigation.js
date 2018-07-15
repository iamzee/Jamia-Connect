import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <div className="navigation">
        <div className="navigation__list">
            <div className="navigation__list-item">
                <NavLink
                    activeClassName="navigation__link--active"
                    className="navigation__link"
                    to="/notes"
                >
                    Notes
                </NavLink>
            </div>
        </div>
    </div>
);

export default Navigation;
