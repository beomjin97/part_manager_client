import TextField from '@mui/material/TextField';
import { ForwardedRef, forwardRef } from "react";

interface Props {
    id: "admin" | "password"
    label: "Administrator" | "Password"
    size: "small" | "medium"
    type?: "password" 
}

const InputStyled = forwardRef(({id, label, size, type }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return <TextField id={id} label={label} size={size} type={type} ref={ref} inputRef={ref}/>  
})

export default InputStyled