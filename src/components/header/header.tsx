import { Box } from "@mui/system";
import fingerPointing from '../../icons/fingerIcon.png';

export const Header = () => {

    return (
        <Box
            sx={{ height: '30px', margin: '101px 0 53px', width: '980px' }}
            display='flex'
            justifyContent='space-between'
        >
            <div 
                style ={{ 
                    border: '1px solid white',
                    boxSizing: 'border-box', 
                    color: 'white', 
                    display: 'flex',
                    height: '28px', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    width: '107px'
                }}
            >
                <span style ={{ fontSize: '12px', lineHeight: '12px' }} >ПОКЕМОНЫ API</span>
            </div>
            <div style={{ 
                alignItems: 'center',
                display: 'flex',
                height: '30.66px',
                justifyContent: 'center',
                width: '142px'
             }}>
                <img alt="finger" src={fingerPointing} style={{ height: '31px', width: '24px' }} />
                <p style={{
                    color: 'white', 
                    fontSize: '12px', 
                    fontWeight: '600', 
                    height: '24px', 
                    lineHeight: '12px',
                    margin: '0 0 0 10px'
                }}>Нажмите на нужное Покемона</p>
            </div>
        </Box>
    );
};