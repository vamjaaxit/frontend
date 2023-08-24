import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

export default function Datatable() {

    // ADD DATATABLE 
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [filtercountries, setFiltercountries] = useState([]);

    const getcountrydata = async () => {
        try {
            const response = await axios.get("https://restcountries.com/v2/all");
            setCountries(response.data);
            setFiltercountries(response.data);
        }
        catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getcountrydata();
    }, [])

    useEffect(() => {
        const result = countries.filter(thiscountry => {
            return thiscountry.name.toLowerCase().match(search.toLocaleLowerCase())
        });

        setFiltercountries(result);
    }, [search])


    const columns = [
        {
            name: "Country Name",
            Selector: (row) => { row.name },
        },
        {
            name: "Country Native Name",
            Selector: (row) => { row.nativeName },
        },
        {
            name: "Country Capital",
            Selector: (row) => row.capital,
        },
        {
            name: "Country Falg",
            Selector: (row) => <img width={50} height={50} src={row.flag} />
        },
        {
            name: "Action",
            cell: (row) => (
                <button onClick={() => alert(row.capital)}>Capital</button>
            )
        }
    ]
    return (
        <Fragment>
            <DataTable
                title="Country List"
                columns={columns}
                data={filtercountries}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='450px'
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                subHeader
                subHeaderComponent={
                    <input
                        type='text'
                        placeholder='search here'
                        className='w-25 form-control'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                }
            />
        </Fragment>
    )
}
