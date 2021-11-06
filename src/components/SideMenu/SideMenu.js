import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css'

class SideMenu extends Component {
    constructor(props) {
        super(props);

        this.menu = React.createRef();

        ///// BINDS /////
        this.handleClick = this.handleClick.bind(this)
        this.handleMenuToggle = this.handleMenuToggle.bind(this);
    }


    handleClick(e) {
        this.props.onCategoryChange(+e.currentTarget.dataset.key)
    }

    listItems() {
        const listItems = this.props.categories.map((category, key) => {
            let classes = 'sidemenu__item ';
            if (key === this.props.selectedCategory) {
                classes += 'sidemenu__item_selected';
            }

            return (
                <li 
                    className={classes} 
                    key={key}
                    data-key={key}
                    onClick={this.handleClick}
                >
                    <Link className="sidemenu__link" to={`/${category.categoryName}`}>{category.categoryName}</Link>
                </li>
            )
        })

        return listItems;
    }

    handleMenuToggle(e) {
        this.menu.current.classList.toggle('sidemenu_closed')
        e.currentTarget.classList.toggle('sidemenu__btn_opened')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleMenuToggle} className="sidemenu__btn sidemenu__btn_opened">{/*sidemenu__btn_opened*/}
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div ref={this.menu} className="sidemenu ">{/*sidemenu_closed*/}
                    <ul className="sidemenu__list">
                        {this.listItems()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideMenu;