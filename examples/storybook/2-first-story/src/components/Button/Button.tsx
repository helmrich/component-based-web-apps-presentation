export type ButtonProps = {
  text: string;
  fontSize: number;
  backgroundColor: string;
  color: string;
  borderRadius: number;
  paddingHorizontal: number;
  paddingVertical: number;
};

const Button = ({
  text,
  fontSize,
  backgroundColor,
  color,
  borderRadius,
  paddingHorizontal,
  paddingVertical,
}: ButtonProps) => {
  return (
    <button
      style={{
        fontSize: `${fontSize}px`,
        backgroundColor,
        color,
        borderRadius,
        padding: `${paddingVertical}px ${paddingHorizontal}px`,
        border: 0,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
