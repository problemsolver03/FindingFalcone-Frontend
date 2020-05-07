import React from 'react'

export default function Planets({ planets, option, planetsSelected, handleChange }) {
    let filteredArray = [...planets];
    return (
        <div>
            <br />
            <label>Choose Planet</label>
            <select
                type="text"
                className='form-control planets'
                list={`option${option}`}
                onChange={handleChange}>
                <option value="" ></option>
                {
                    filteredArray.map((planet, i) => {

                        return (
                            planetsSelected.indexOf(planet.name) === -1 ?
                                <option
                                    value={planet.name}
                                    key={i}>
                                    {planet.name}
                                </option>
                                :
                                <option
                                    value={planet.name}
                                    key={i}
                                    disabled="disabled">
                                    {planet.name}
                                </option>
                        )
                    })
                }
            </select>
        </div>
    )
}
