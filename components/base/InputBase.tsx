import { InputHTMLAttributes, forwardRef } from "react";

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ id, ...props }, ref) => {
    return <input id={id} ref={ref} {...props} />;
  }
);

InputBase.displayName = "InputBase";

export default InputBase;
