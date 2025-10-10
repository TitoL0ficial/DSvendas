import { useEffect, useState } from "react";
import type { SalePage } from "../../models/sale";
import axios from "axios";
import { BASE_URL } from "../../utils/requests";
import { formartLocalDate } from "../../utils/format";

export default function DataTable() {

    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=1&size=5&sort=date,desc`)
            .then(response => {
                setPage(response.data);
            })
    }, []);

    return (
        <div className="table-responsive container">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        page.content?.map(x =>  (
                           <tr key={x.id}>
                                <td>{formartLocalDate(x.date, "dd/MM/yyyy")}</td>
                                <td>{x.seller.name}</td>
                                <td>{x.visited}</td>
                                <td>{x.deals}</td>
                                <td>{x.amount.toFixed(2)}</td>
                            </tr> 
                        ))
                    }      
                </tbody>
            </table>
        </div>
    );
}
