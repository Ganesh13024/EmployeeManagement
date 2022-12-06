export const userColumns2 = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "products",
      headerName: "Products",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "productname",
      headerName: "Product Name",
      width: 230,
    },
  
    {
      field: "productprice",
      headerName: "Product Price",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  