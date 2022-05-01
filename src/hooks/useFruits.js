import { useEffect, useState } from "react";

const useFruits = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fetch('https://thawing-hollows-22749.herokuapp.com/fruits')
            .then(res => res.json())
            .then(data => setFruits(data));
    }, [fruits]);

    return [fruits, setFruits];
}

export default useFruits;