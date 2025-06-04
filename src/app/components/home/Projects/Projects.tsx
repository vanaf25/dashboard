import React, { useEffect, useState } from 'react';
import BlankCard from "@/app/components/shared/BlankCard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ProjectCard from "@/app/components/home/Projects/ProjectCard/ProjectCard";
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import CreateProjectPopup from "@/app/components/home/Projects/CreateProjectPopup/CreateProjectPopup";

const Projects = () => {
    const [projects, setProjects] = useState<any[]>([]);  // Change 'any' type if needed
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isPopupOpen,setIsPopupOpen]=useState(false);
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('/api/contracts/getContracts');
                setProjects(response.data.documents || []);
            } catch (err) {
                setError('Failed to fetch projects');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);
    return (
        <BlankCard sx={{ mb: 2 }}>
            <>
            {isPopupOpen && <CreateProjectPopup open={isPopupOpen}
                                          close={()=>setIsPopupOpen(false)} />}
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <h2>Projects ({projects.length})</h2>
                    <Button onClick={()=>setIsPopupOpen(true)}>Create new project</Button>
                </Box>

                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                        <p>{error}</p>
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: 2,
                        }}
                    >
                        {projects.map((card:any, index) => (
                            <ProjectCard
                                id={card.id}
                                key={index}
                                title={card.service}
                                description={card?.customers?.name}
                                totalPrice={card.totalPrice}
                            />
                        ))}
                    </Box>
                )}
            </>
        </BlankCard>
    );
};

export default Projects;
