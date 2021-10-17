import React from 'react'
import { useForm } from '../customHooks/useForm'

export const AddPlace = ({ setplace }) => {
    const [{ place }, handleInputChange, reset] = useForm({
        place: ''

    })
    const handleSubmit = (e) => {
        e.preventDefault();
        setplace(() => place);
        reset();

    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div className="flex md:flex-row flex-col justify-around">
                    <div>
                        <input
                            type="text"
                            name="place"
                            value={place}
                            onChange={handleInputChange}
                            placeholder="Ingresa un lugar"
                            className="w-96 outline-none bg-gray-100 text-center rounded-md py-2 mt-2" />
                    </div>
                    <div className="text-white md:mx-2">
                        <button type="submit" className="w-full bg-green-500  rounded-md py-2 px-3 mt-2 mr-2">Aceptar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
