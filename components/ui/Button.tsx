interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ className, children }: ButtonProps) => {
  return (
    <button
      className={`flex flex-row items-center justify-center bg-primary hover:bg-yellow-50 
        transition duration-150 ease-in-out px-3 md:px-6 py-3 md:py-4 text-center font-medium 
        text-black rounded-[30px] text-sm md:text-base ${className}`}
    >
      {children}
    </button>
  );
};
