import React, {useEffect, useState} from 'react';
import BlankCard from "@/app/components/shared/BlankCard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ProjectCard from "@/app/components/Projects/ProjectCard/ProjectCard";
import {useSelector} from "@/store/hooks";
import {Client} from "@/app/components/Leads/Leads";

const Projects = () => {
    const projects:Client[]=useSelector(store=>store.dashboard.projects);
    return (
        <BlankCard sx={{mb:2}}>
            {<>
                <Box sx={{display: "flex",justifyContent:"space-between"}}>
                    <h2>Projects ({projects.length})</h2>
                    <Button>Create  new project</Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 2,
                    }}
                >
                    {projects.filter(el=>el.status==="project").map((card, index) => (
                        <ProjectCard
                            key={index}
                            title={card.project}
                            description={card.name}
                            status={card.status}
                        />
                    ))}
                </Box>
            </>}
        </BlankCard>

    );
};

export default Projects;