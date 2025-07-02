import React from 'react';

interface FormFieldProps {
    title: string;
    text: string;
    type?: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
                                                 title,
                                                 text,
                                                 type = "text",
                                                 placeholder,
                                                 value,
                                                 onChange
                                             }) => {
    return (
        <div className="formField">
            <label htmlFor={title}>{text}</label>
            <input
                type={type}
                id={title}
                name={title}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default FormField;