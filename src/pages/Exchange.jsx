import { Button, Divider, Input, Option, Select, Stack } from '@mui/joy'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SendIcon from '@mui/icons-material/Send'

const Exchange = () => {
    const url = 'https://v6.exchangerate-api.com/v6/b3f46455a50a6163e6c6c032/latest/USD'
    const [value, setValue] = useState()
    const [convert, setConvert] = useState('')
    const [usd, setUsd] = useState()
    const [brl, setBrl] = useState()
    const [currency, setCurrency] = useState('dollar')

    async function run() {
        const response = await axios.get(url)
        const result = await response.data.conversion_rates
        setUsd(result.USD)
        setBrl(result.BRL)
        console.log(result)
    }

    useEffect(() => {
        try {
            run()
        } catch {
            console.log('error')
        }
    }, [])

    return (
        <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} spacing={1.5}>
            <Input
                fullWidth={true}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                    console.log(value)
                }}
                placeholder="Valor"
                startDecorator={{ dollar: '$', reais: 'R$' }[currency]}
                endDecorator={
                    <React.Fragment>
                        <Divider orientation="vertical" />
                        <Select
                            variant="plain"
                            value={currency}
                            onChange={(_, value) => {
                                setCurrency(value)
                                console.log(currency)
                            }}
                            slotProps={{
                                listbox: {
                                    variant: 'outlined',
                                },
                            }}
                            sx={{ mr: -1.5, '&:hover': { bgcolor: 'transparent' } }}>
                            <Option value="dollar">US dollar</Option>
                            <Option value="reais">Reais</Option>
                        </Select>
                    </React.Fragment>
                }
                sx={{ width: 300 }}
            />
            <Button fullWidth={true} startDecorator={<SendIcon />} onClick={() => {
                setConvert(currency === 'dollar' ? value * brl : value / brl)
                console.log(convert)
            }} />
            <Button fullWidth={true} startDecorator={{ dollar: 'R$', reais: '$' }[currency]}
                disabled>{convert === '' ? 'Enter an amount' : parseFloat(convert).toFixed(2)}
            </Button>
        </Stack>
    )
}

export default Exchange