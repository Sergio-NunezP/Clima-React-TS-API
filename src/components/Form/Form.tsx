import { ChangeEvent, FormEvent, useState } from "react";
import { SearchType } from "../../types";
import { countries } from "../../data/countries";
import styles from './Form.module.css'
import Alert from "../Alert/Alert";

type FromProps = {
    fetchWeather: () => void
}

export default function Form({ fetchWeather }: FromProps) {

    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: ''
    })

    const [alert, setAlert] = useState('')

    // Manejo de los cambios en los campos de entrada del formulario.
    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    // Alerta por si hay campos vacios
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (Object.values(search).includes('')) {
            setAlert('Todos los campos son obligatorios')
            return
        }
        // Cuando pasemos la validación mandamos a llamar la funcion fetchWeather
        fetchWeather()
    }

    return (
        <form

            className={styles.form}
            onSubmit={handleSubmit}
        >

            {alert && <Alert>{alert}</Alert>}
            <div className={styles.field}>
                <label
                    htmlFor="city">Ciudad:</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="Ciudad"
                    value={search.city}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.field}>
                <label
                    htmlFor="country">País:</label>
                <select
                    id='country'
                    value={search.country}
                    name="country"
                    onChange={handleChange}
                >
                    <option value="">--Seleccione un País</option>
                    {countries.map(country => (
                        <option
                            key={country.code}
                            value={country.code}
                        >{country.name}</option>
                    ))}
                </select>
            </div>

            <input
                className={styles.submit}
                type="submit"
                value='Consultar Clima'
            />
        </form>
    )
}
