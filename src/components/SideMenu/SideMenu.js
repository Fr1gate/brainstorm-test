import React, { Component } from 'react';
import './SideMenu.css'

class SideMenu extends Component {
    render() {
        return (
            <div className="sidemenu">
                <ul className="sidemenu__list">
                    <li className="sidemenu__item"><a className="sidemenu__link" href="javascript:void(0)">Работа</a></li>
                    <li className="sidemenu__item sidemenu__item_selected"><a className="sidemenu__link" href="javascript:void(0)">Дом</a></li>
                    <li className="sidemenu__item"><a className="sidemenu__link" href="javascript:void(0)">Семья</a></li>
                </ul>
            </div>
        );
    }
}

export default SideMenu;