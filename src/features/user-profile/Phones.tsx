import { type FieldErrors, type UseFormRegister, useFieldArray, type Control } from 'react-hook-form';
import { type UserProfileFormData, type Phone as PhoneType } from '../../types/userTypes';
import { type FinancialKycData } from '../../types/kycTypes';
import { type User } from '../../hooks/userUser';

interface PhonesProps {
    register: UseFormRegister<UserProfileFormData & FinancialKycData>;
    errors: FieldErrors<UserProfileFormData & FinancialKycData>;
    control: Control<UserProfileFormData & FinancialKycData>;
    user: User;
}

interface PhoneField {
    label: string;
    name: keyof PhoneType;
    type: string;
    required: boolean;
    placeholder?: string;
}

export default function Phones({ register, errors, control, user }: PhonesProps) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'phones'
    });

    const phoneFields: PhoneField[] = [
        {
            label: 'Phone Number',
            name: 'number',
            type: 'tel',
            required: true,
            placeholder: 'Enter phone number'
        }
    ];

    return (
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold dark:text-white">Phone Numbers</h3>
                <button
                    type="button"
                    onClick={() => append({ number: '', type: 'Personal', preferred: false })}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Add Phone
                </button>
            </div>
            {fields.map((field, index) => (
                <div key={field.id} className="mb-6 p-4 border border-gray-200 rounded-lg dark:border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-medium dark:text-white">Phone {index + 1}</h4>
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        >
                            Remove
                        </button>
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                        {phoneFields.map((phoneField) => (
                            <div key={phoneField.name} className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor={`phones.${index}.${phoneField.name}`}
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    {phoneField.label}
                                    {!phoneField.required && <span className="text-gray-500 ml-1">(Optional)</span>}
                                </label>
                                <input
                                    id={`phones.${index}.${phoneField.name}`}
                                    type={phoneField.type}
                                    placeholder={phoneField.placeholder}
                                    className={`shadow-sm bg-gray-50 border ${
                                        errors.phones?.[index]?.[phoneField.name]
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                    } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                                    {...register(`phones.${index}.${phoneField.name}`, {
                                        required: phoneField.required ? `${phoneField.label} is required` : false
                                    })}
                                />
                                {errors.phones?.[index]?.[phoneField.name] && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {typeof errors.phones[index][phoneField.name] === 'object' 
                                            ? (errors.phones[index][phoneField.name] as { message?: string })?.message 
                                            : 'This field is required'}
                                    </p>
                                )}
                            </div>
                        ))}
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor={`phones.${index}.type`}
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Phone Type
                            </label>
                            <select
                                id={`phones.${index}.type`}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                {...register(`phones.${index}.type`)}
                            >
                                <option value="Personal">Personal</option>
                                <option value="Work">Work</option>
                            </select>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor={`phones.${index}.preferred`}
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Preferred Phone
                            </label>
                            <input
                                type="checkbox"
                                id={`phones.${index}.preferred`}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                {...register(`phones.${index}.preferred`)}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
} 