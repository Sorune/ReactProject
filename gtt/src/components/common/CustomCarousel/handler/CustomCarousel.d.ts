import React from 'react';
import { Carousel, CarouselProps } from '@material-tailwind/react/components/Carousel';
import { IconButton } from '@material-tailwind/react';

interface CustomCarouselProps extends CarouselProps {
    onDelete?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onAdd?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({
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