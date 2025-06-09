import { type FieldErrors, type UseFormRegister } from 'react-hook-form';
import { type UserProfileFormData, type BasicInfo } from './types';
import { type User } from '../../hooks/userUser';

interface BasicInformationProps {
    register: UseFormRegister<UserProfileFormData>;
    errors: FieldErrors<UserProfileFormData>;
    user: User;
}

interface BasicField {
    label: string;
    name: keyof BasicInfo;
    type: string;
    required: boolean;
    placeholder?: string;
}

export default function BasicInformation({ register, errors, user }: BasicInformationProps) {
    const basicFields: BasicField[] = [
        {
            label: 'First Name',
            name: 'firstName',
            type: 'text',
            required: true,
            placeholder: 'Enter first name'
        },
        {
            label: 'Middle Name',
            name: 'middleName',
            type: 'text',
            required: false,
            placeholder: 'Enter middle name'
        },
        {
            label: 'Last Name',
            name: 'lastName',
            type: 'text',
            required: true,
            placeholder: 'Enter last name'
        },
        {
            label: 'Birth Date',
            name: 'birthDate',
            type: 'date',
            required: true
        },
        {
            label: 'Age',
            name: 'age',
            type: 'number',
            required: true,
            placeholder: 'Enter age'
        }
    ];

    return (
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Basic Information</h3>
            <div className="grid grid-cols-6 gap-6">
                {basicFields.map((field) => (
                    <div key={field.name} className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor={`basicInfo.${field.name}`}
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            {field.label}
                            {!field.required && <span className="text-gray-500 ml-1">(Optional)</span>}
                        </label>
                        <input
                            id={`basicInfo.${field.name}`}
                            type={field.type}
                            placeholder={field.placeholder}
                            className={`shadow-sm bg-gray-50 border ${
                                errors.basicInfo?.[field.name]
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                            } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                            {...register(`basicInfo.${field.name}`, {
                                required: field.required ? `${field.label} is required` : false
                            })}
                        />
                        {errors.basicInfo?.[field.name] && (
                            <p className="text-red-500 text-sm mt-1">
                                {typeof errors.basicInfo[field.name] === 'object' 
                                    ? (errors.basicInfo[field.name] as { message?: string })?.message 
                                    : 'This field is required'}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
} 