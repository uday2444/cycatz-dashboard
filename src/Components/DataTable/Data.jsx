import img1 from "../../Images/boy-avatar.jpg";

export const UserColumns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user",
    headerName: "User",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cell-with-img">
          <img src={params.row.image} className="cell-img" alt="user-image" />
          {params.row.firstName}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email Id", width: 250 },
  { field: "age", headerName: "Age", width: 150 },
  {
    filed: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`cell-with-status ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const UserRows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    email: "snowjon@gmail.com",
    image: img1,
    status: "active",
    age: 35,
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    email: "lannistercersei@gmail.com",
    image: img1,
    status: "active",
    age: 42,
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    email: "lannisterjaime@gmail.com",
    image: img1,
    status: "passive",
    age: 45,
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    email: "starkarya@gmail.com",
    image: img1,
    status: "pending",
    age: 16,
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    email: "daenerys@gmail.com",
    image: img1,
    status: "passive",
    age: 40,
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Melis",
    status: "pending",
    image: img1,
    email: "melisandre@gmail.com",
    age: 150,
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    email: "clifford@gmail.com",
    status: "active",
    image: img1,
    age: 44,
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    email: "francerossini@gmail.com",
    image: img1,
    status: "pending",
    age: 36,
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    email: "roxieharvey@gmail.com",
    image: img1,
    status: "passive",
    age: 65,
  },
  {
    id: 9,
    lastName: "Ghost",
    firstName: "Wolf",
    email: "ghostwolf@gmail.com",
    image: img1,
    status: "pending",
    age: 12,
  },
];
