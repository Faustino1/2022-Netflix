import styled from "styled-components";
import { InputBase } from "@material-ui/core";

const handleWidth = wide =>{
    switch (wide) {
        case "fullWidth": return "100%";            
            break;
            case "medium": return "260px";            
            break;
        default: return "160px";            
            break;
    }
}

export const NetflixInput = styled(InputBase)`
z-index: 30;
background: #fff;
padding: 25.5px;
height: 30px;
border-radius: 5px;
border: none;
`

export const NetflixButton = styled.button`
z-index: 15;
background-color: ${({color})=> color === "gray" ? "lightgray": "red"};
color: #fff;
border-radius: ${(radius)=>(radius ? "5px": null)};
text-transform: inherit;
padding: 15px;
font-size: 1.1rem;
border: none;
outline: none;
cursor: pointer;
width: ${({wide}) => handleWidth(wide)};
`