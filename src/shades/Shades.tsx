import * as React from "react";
import Button from '@material-ui/core/Button'

interface IProps {
  primaryColor: string;
  secondaryColor: string;
}

const Palette: React.FunctionComponent<IProps> = (props: IProps) => {
  const SinglePalette = (props: { name:"primary"|"secondary" }) => {
    const { name } = props;
    return <Button color={name} variant="contained" >
    Change Shade</Button>;
  };

  return (
    <div>
      <SinglePalette name="primary" />
      <SinglePalette name="secondary"/>
    </div>
  );
};

export default Palette;
