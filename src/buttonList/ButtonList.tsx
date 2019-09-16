import * as React from 'react';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";

interface IProps {
 color: string
};

const ButtonList:React.SFC<IProps> = (props) => {
    return(
        <Container>
            <Button variant="contained" color="primary" >
                Contained and primary
            </Button>
            <Button variant="contained" color="secondary" >
                Contained and secondary
            </Button>
        </Container>
    )
}

export default ButtonList;