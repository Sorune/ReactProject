import React from 'react';
import { Carousel } from '@material-tailwind/react/components/Carousel';
import { IconButton } from '@material-tailwind/react';

const CustomCarousel = ({
                            onDelete,
                            onAdd,
                            ...carouselProps
                        }) => {
    return (
        <Carousel {...carouselProps}>
            {/* 기존 Carousel의 children */}
            {carouselProps.children}
            {/* 새로운 버튼 추가 */}
            {onDelete && (
                <IconButton onClick={onDelete}>
                    {/* 삭제 버튼 아이콘 */}
                    Delete
                </IconButton>
            )}
            {onAdd && (
                <IconButton onClick={onAdd}>
                    {/* 추가 버튼 아이콘 */}
                    Add
                </IconButton>
            )}
        </Carousel>
    );
};

export default CustomCarousel;