import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {
    album: PropTypes.object,
};


function Album(props) {
    const { } = props;
    return (
        <div className="album">
            <div className="album__thumbnail">
                <img src={props.album.thumbnailUrl} title={props.album.name} />
            </div>

            <div className="album__name">
                {props.album.name}
            </div>
        </div>
    );
}

export default Album;