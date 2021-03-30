import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Hoa Thịnh Hành',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/a/b/7/f/ab7f60a54d3c73a36cc383936372c321.jpg'
        },
        {
            id: 2,
            name: 'Rap Việt Nghe là Ghiền',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/e/4/d/de4d2f3fcaf1fc72499ea79a0722e996.jpg'
        },
        {
            id: 3,
            name: 'Trào Lưu Nhạc Hot',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/a/8/3/5/a83526bea972a1cef4e148aae49a67d9.jpg'
        }
    ]
    return (
        <div>
            <h2>Học hiển thị các components</h2>
            <AlbumList albumList={albumList}></AlbumList>
        </div>
    );
}

export default AlbumFeature;