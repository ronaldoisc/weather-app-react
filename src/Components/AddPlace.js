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
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row">
                    <div>
                        <input
                            type="text"
                            name="place"
                            value={place}
                            onChange={handleInputChange}
                            placeholder="Ingresa un lugar"
                            className="w-96 py-2 mx-2  rounded-lg outline-none bg-gray-100 text-center" />
                    </div>
                    <div>
                        <button type="submit" className="py-2 px-2 text-white bg-green-500 rounded-md">Aceptar</button>

                    </div>
                </div>
            </form>
        </div>
    )
}
