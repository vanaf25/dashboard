import TableGrid from "../UserTable/UserTable";
import Box from '@mui/material/Box'; // Assuming TableGrid is in the same folder

const UserDetails = () => {
  // Data for the "Other workers paid out on behalf of sub or lead" table
  const workersData = [
    { label: "NAME", value: "0" },
    { label: "PHONE", value: "0" },
    { label: "NAME", value: "0" },
    { label: "PHONE", value: "0" },
    { label: "NAME", value: "0" },
    { label: "PHONE", value: "0" },
    { label: "NAME", value: "0" },
    { label: "PHONE", value: "0" },
  ];

  // Data for the "Managing Lead or Subcontractor" table
  const managingData = [
    { label: "Name", value: "0" },
    { label: "Address", value: "0" },
    { label: "Phone", value: "0" },
    { label: "Email", value: "0" },
  ];
  const projectData = [
    { label: "Name",type:"text", value: "0" },
    { label: "Address",type:"text", value: "0" },
    { label: "Start",type: "date" },
    { label: "End",type: "date" }
  ];

  return (
    <Box sx={{display:"flex",mb:2}}>
      <Box sx={{mr:1}}>
        <TableGrid title="Managing Lead or Subcontractor" data={managingData} />
        <TableGrid title="Project or Customer" data={projectData as any} />
      </Box>
      <TableGrid title="Other workers paid out on behalf of sub or lead" data={workersData} />
    </Box>
  );
};

export default UserDetails;
