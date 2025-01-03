import { TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaBaseProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
}

const TextareaBase = forwardRef<HTMLTextAreaElement, TextareaBaseProps>(
  ({ id, ...props }, ref) => {
    return <textarea id={id} name={id} ref={ref} {...props} />;
  }
);

TextareaBase.displayName = "TextareaBase";

export default TextareaBase;
