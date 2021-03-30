import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './styles.scss';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList(props) {
    const { } = props;
    return (
        <ul className="album-list">
            {props.albumList.map(value => (
                <li key={value.id}>
                    <Album album={value}></Album>
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;