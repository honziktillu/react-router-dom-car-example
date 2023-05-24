import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Car = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    const [loaded, setLoaded] = useState(false);

    const getCar = async () => {
        /*const res = await fetch(`http://localhost:3000/car/${id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "GET",
        });
        const data = await res.json();*/
        //setCar(data);
        setLoaded(true);
    }

    useEffect(() => {
        getCar();
        console.log(car.result)
    }, [])

    if (!loaded)
        return (
            <>
                <p>Loading car...</p>
            </>
        )

    return (
        <>
            <p>Car with id: {id}</p>
        </>
    )
}

export default Car;