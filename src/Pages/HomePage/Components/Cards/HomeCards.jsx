import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ image, title, ...props }) {
    return (
        <Card className='p-0 m-0 border rounded-5'>
            <CardActionArea sx={{color: "#FFBA08", border: "1px solid #F0E68C", borderColor: "#F0E68C"}}>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src={image} alt="card" style={{ filter: 'brightness(20%)' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
                        <h6 align="center" sx={{fontSize: "calc(0.5rem + 1vw)"}}>
                            {title}
                        </h6>
                    </div>
                </div>
            </CardActionArea>
        </Card>
    );
}