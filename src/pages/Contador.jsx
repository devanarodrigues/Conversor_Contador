import  { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/joy';

const Contador = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <Stack gap={2}>
                <Button disabled>{count}</Button>
                <Button
                    loading={false}
                    onClick={() => setCount(parseInt(count + 1))}
                    variant="soft">
                    <AddIcon />
                </Button>
                <Button
                    loading={false}
                    onClick={() => setCount(parseInt(count - 1))}
                    variant="soft">
                    <RemoveIcon />
                </Button>
            </Stack>
        </>

    )
}

export default Contador