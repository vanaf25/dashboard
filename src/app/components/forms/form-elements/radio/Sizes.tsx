import React from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';

const SizesRadio = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange2 = (event: any) => {
        setSelectedValue(event.target.value);
    };
    
    const controlProps = (item: any) => ({
        checked: selectedValue === item,
        onChange: handleChange2,
        value: item,
        name: 'size-radio-button-demo',
        inputProps: { 'aria-label': item },
    });


    return (
        <Box textAlign="center">
            <Radio {...controlProps('a')} size="small" />
            <Radio {...controlProps('b')} />
            <Radio
                {...controlProps('c')}
                sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 28,
                    },
                }}
            />
        </Box>
    );
};

export default SizesRadio;
