interface ButtonProps {
  icon: string;
  text: string;
}

export const Button = ({ icon, text }: ButtonProps) => {
  return (
    <button className="bg-zinc-800 px-2 py-4 rounded-lg flex flex-col justify-center items-center">
      <img src={icon} alt={text} />
      {text}
    </button>
  );
};
