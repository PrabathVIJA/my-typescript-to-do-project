interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export default function Input({ value, onChange, placeholder }: InputProps) {
  return (
    <>
      <input placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
}
