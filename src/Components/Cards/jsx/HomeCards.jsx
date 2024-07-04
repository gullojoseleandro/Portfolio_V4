import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ image, title, ...props }) {
    return (
        <Card className='p-0 m-0 border rounded-5' sx={{ maxHeight: "auto"}}>
            <CardActionArea sx={{color: "skyblue"}}>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src={image} alt="card" className={"hover-shadow"} style={{ width: 'auto', filter: 'brightness(30%)' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
                        <Typography variant="h3" component="h3" align="center" sx={{fontSize: "calc(0.5rem + 1vw)"}}>
                            {title}
                        </Typography>
                    </div>
                </div>
            </CardActionArea>
        </Card>
    );
}