import React from 'react';
import { Link } from 'react-router-dom';

const TableOfContents = ({ activeMenus, toggleMenu, blogSchema }) => {
    const noBulletStyle = {
        listStyleType: 'none',
        paddingLeft: 0,
        marginLeft: 0,
        alignItems: 'left',
    };

    const generateId = (text) => {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    };

    return (
        <aside className="menu">
            <p className="menu-label">Table of Contents</p>
            <ul className="menu-list" style={noBulletStyle}>
                {blogSchema.map((section, index) => {
                    const [sectionTitle, subheadings] = Object.entries(section)[0];
                    const sectionId = generateId(sectionTitle);
                    return (
                        <li key={index} style={noBulletStyle}>
                            <Link to={`#${sectionId}`} onClick={() => toggleMenu(sectionTitle)}>
                                {sectionTitle}
                                <span className="icon is-small is-pulled-right">
                                    <i className={`fas fa-angle-${activeMenus[sectionTitle] ? 'down' : 'left'}`}></i>
                                </span>
                            </Link>
                            {activeMenus[sectionTitle] && (
                                <ul style={noBulletStyle}>
                                    {subheadings.map((subheading, subIndex) => {
                                        const subheadingId = generateId(`${sectionTitle}-${subheading}`);
                                        return (
                                            <li key={subIndex} style={noBulletStyle}>
                                                <a href={`#${subheadingId}`}>{subheading}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default TableOfContents;