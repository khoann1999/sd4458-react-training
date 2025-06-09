import { type FieldErrors, type UseFormRegister, useFieldArray, type Control } from 'react-hook-form';
import { type UserProfileFormData, type Email as EmailType } from '../../types/userTypes';
import type { FinancialKycData } from '../../types/kycTypes';
import { type User } from '../../hooks/userUser';

interface ContactInformationProps {
    register: UseFormRegister<UserProfileFormData & FinancialKycData>;
    errors: FieldErrors<UserProfileFormData & FinancialKycData>;
    control: Control<UserProfileFormData & FinancialKycData>;
    user: User;
}

interface ContactField {
    label: string;
    name: keyof EmailType;
    type: string;
    placeholder: string;
    required: boolean;
}

export default function ContactInformation({ register, errors, control, user }: ContactInformationProps) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "emails"
    });

    const emailFields: ContactField[] = [
        { label: 'Email Address', name: 'email', type: 'email', placeholder: 'example@company.com', required: true }
    ];

    return (
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold dark:text-white">Contact Information</h3>
            </div>

            {fields.map((field, index) => (
                <div key={field.id} className="mb-6 p-4 border border-gray-200 rounded-lg dark:border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-medium dark:text-white">Email {index + 1}</h4>
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400"
                        >
                            Remove
                        </button>
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                        {emailFields.map((emailField) => (
                            <div key={emailField.name} className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor={`emails.${index}.${emailField.name}`}
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    {emailField.label}
                                    {!emailField.required && <span className="text-gray-500 ml-1">(Optional)</span>}
                                </label>
                                <input
                                    id={`emails.${index}.${emailField.name}`}
                                    type={emailField.type}
                                    placeholder={emailField.placeholder}
                                    className={`shadow-sm bg-gray-50 border ${errors.emails?.[index]?.[emailField.name]
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                        } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                                    {...register(`emails.${index}.${emailField.name}`, {
                                        required: emailField.required ? `${emailField.label} is required` : false,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                />
                                {errors.emails?.[index]?.[emailField.name] && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.emails[index][emailField.name]?.message || 'This field is required'}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <button
                type="button"
                onClick={() => append({ email: '' })}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Add Email
            </button>
        </div>
    );
} 