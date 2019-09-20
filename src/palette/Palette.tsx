import * as React from "react";

interface IProps {
  primaryColor: string;
  secondaryColor: string;
}

const Palette: React.FunctionComponent<IProps> = (props: IProps) => {
  const SinglePalette = (props: { color: string }) => {
    const { color } = props;
    return <div style={{
      minWidth: '200px',
      backgroundColor: color,
      color: '#fff',
      padding: '4px 0px',
      textAlign: 'center',
      textTransform: 'uppercase'
    }}>Shades</div>;
  };

  return (
    <div>
      <SinglePalette color={props.primaryColor} />
      <SinglePalette color={props.secondaryColor} />
    </div>
  );
};

export default Palette;
