import { useState } from 'react';

import CustomData from './CustomData';
import '../styles/PeriodicalData.css';

const PeriodicalData = (stats) => {
    let currentDate = new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0];

    const [selectedCountry, setCountry] = useState('Select a country');
    const [startDate, setStartDate] = useState(currentDate);
    const [endDate, setEndDate] = useState(currentDate);
    const [resultStatus, setResultStatus] = useState(false);

    const globalData = stats.stats[0]['Global'];
    const countryData = stats.stats[0]['Countries'];
    let countrySlugs = [];

    const addSlug = (slug) => {
        countrySlugs = [...countrySlugs, slug];
    };

    // eslint-disable-next-line
    const printGlobalStats = Object.entries(globalData).map(([key, value]) => {
        if (key !== 'ID') {
            return (
                <tr>
                    <td style={{ width: '68.5%' }}>
                        <h4>{key}</h4>
                    </td>
                    <td>
                        <h4>{JSON.stringify(value)}</h4>
                    </td>
                </tr>
            );
        }
    });

    const printOptions = Object.entries(countryData).map(([key, value]) => {
        return (
            <option key={key}>
                {value.Slug}
                {addSlug(value.Slug)}
            </option>
        );
    });

    //   function setStatusFalse() {
    //     setStatus(false);
    //     //console.log("Status changed to false")
    //   }

    //   function setStatusTrue() {
    //     setStatus(true);
    //     //console.log("Status changed to true")
    //   }

    function changeCountry(e) {
        setResultStatus(false);
        setCountry(e.target.value);
        //console.log(e.target.value)
    }

    function changeStartDate(e) {
        setResultStatus(false);
        // console.log(e.target.value);
        console.log(endDate, startDate);
        if (endDate < e.target.value) {
            // console.log('yo');
            setEndDate(e.target.value);
        }
        setStartDate(e.target.value);
    }

    function changeEndDate(e) {
        setResultStatus(false);
        // console.log(e.target.value);

        setEndDate(e.target.value);
    }

    function getCustomData() {
        setResultStatus(true);
    }

    return (
        <>
            <div className="periodicalData">
                <h2>Periodical Data</h2>
                <div className="overflowContainer">
                    <select
                        name="country"
                        onChange={changeCountry}
                        value={selectedCountry}
                        // defaultValue={""}
                        required
                    >
                        <option>Select a country</option>
                        {printOptions}
                        {/* {console.log(countrySlugs)} */}
                    </select>
                    <div className="dates">
                        <input
                            type="date"
                            name="startDate"
                            min="2020-01-01"
                            max={currentDate}
                            onChange={changeStartDate}
                            value={startDate}
                            required
                        ></input>
                        <input
                            type="date"
                            name="endDate"
                            min={startDate}
                            max={currentDate}
                            onChange={changeEndDate}
                            value={endDate}
                        ></input>
                    </div>
                    <button
                        className="getResult"
                        onClick={getCustomData}
                        disabled={startDate === endDate}
                        style={{
                            backgroundColor:
                                startDate === endDate ? 'grey' : '#F45333'
                        }}
                    >
                        Get Result
                    </button>
                    {startDate === endDate
                        ? 'Please select a valid date range'
                        : null}

                    {resultStatus ? (
                        <CustomData
                            country={selectedCountry}
                            startDate={startDate}
                            endDate={endDate}
                        />
                    ) : (
                        <> </>
                    )}
                </div>
            </div>
        </>
    );
};

export default PeriodicalData;
