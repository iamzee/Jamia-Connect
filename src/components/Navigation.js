import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <div className="navigation">
        <div className="navigation__list">
            <div className="navigation__list-item navigation__list-item--notes">
                <NavLink className="navigation__link" to="/notes">
                    Notes
                </NavLink>
            </div>
            <div className="navigation__list-item navigation__list-item--confessions">
                <NavLink className="navigation__link" to="/confessions">
                    Confessions
                </NavLink>
            </div>
        </div>
    </div>
);

export default Navigation;
