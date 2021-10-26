const Table = ({headers, data}) => { 
    return (
        <table>
            <thead>
                <tr>
                {headers.map((head, index) => (
                    <th key={index}>{head}</th>
                ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {headers.map((head, index) => (
                            <td key={index}>{row[head]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );

}

export default Table;