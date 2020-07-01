import React from 'react';       
export const tableColumn =[ {
    Header: 'Tenant ID',
    accessor: 'TenantID',
    Footer:'Tenant ID',
  },
  {
    Header: 'Client',
    accessor: 'Client',
    Footer:'Client' ,
  },
  {
    Header: 'Total Amount Due',
    accessor: 'TotalAmountDue',
    Footer: info => {
      // Only calculate total visits if rows change
      const total = React.useMemo(
        () =>
          info.rows.reduce((sum, row) => parseFloat(row.values.TotalAmountDue) + parseFloat(sum), 0),
        [info.rows]
      )
      return <div>Total: {total}</div>
    },
  },
  {
    Header: 'Amount Pending',
    accessor: 'amountPending',
    Footer:'Amount Pending',
    disableSortBy:true
  },
  {
    Header: 'Amount Paid',
    accessor: 'amountPaid',
    Footer: info => {
      const total = React.useMemo(
        () =>
          info.rows.reduce((sum, row) => parseFloat(row.values.amountPaid) + parseFloat(sum), 0),
        [info.rows]
      )
      return <div>Total: {total}</div>
    },
  },
]
