import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const TrailerCard = (props) => {
    const [src, setSrc] = useState('');
    useEffect(() => {
        props.data && setSrc(props.data);
    }, [props.data]);
    return (
        src && (
            <iframe
                className="w-54 h-48 rounded-xl mr-5"
                src={`http://www.youtube.com/embed/${src}`}
                allow="encrypted-media"
                title="video"
                allowFullScreen={true}
            />
        )
    );
};
export default TrailerCard;
