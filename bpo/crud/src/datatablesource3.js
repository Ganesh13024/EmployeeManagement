export const userColumns3 = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "salesman",
      headerName: "Salesman",
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
      field: "displayName",
      headerName: "Full Name",
      width: 230,
    },
  
    {
      field: "phone",
      headerName: "Contact Number",
      width: 100,
    },
    {
      field: "email",
      headerName: "Email",
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
  