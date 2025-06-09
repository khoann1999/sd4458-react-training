import { type FieldErrors, type UseFormRegister, useFieldArray, type Control } from 'react-hook-form';
import { type UserProfileFormData, type Address as AddressType } from './types';
import { type User } from '../../hooks/userUser';

interface AddressProps {
    register: UseFormRegister<UserProfileFormData>;
    errors: FieldErrors<UserProfileFormData>;
    control: Control<UserProfileFormData>;
    user: User;
}

interface AddressField {
    label: string;
    name: keyof AddressType;
    type: string;
    required: boolean;
    placeholder?: string;
}

export default function Address({ register, errors, control, user }: AddressProps) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'addresses'
    });

    const addressFields: AddressField[] = [
        {
            label: 'Country',
            name: 'country',
            type: 'text',
            required: true,
            placeholder: 'Enter country'
        },
        {
            label: 'City',
            name: 'city',
            type: 'text',
            required: true,
            placeholder: 'Enter city'
        },
        {
            label: 'Street',
            name: 'street',
            type: 'text',
            required: true,
            placeholder: 'Enter street'
        },
        {
            label: 'Postal Code',
            name: 'postalCode',
            type: 'text',
            required: false,
            placeholder: 'Enter postal code'
        }
    ];

    return (
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold dark:text-white">Addresses</h3>
                <button
                    type="button"
                    onClick={() => append({ country: '', city: '', street: '', type: 'Mailing' })}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Add Address
                </button>
            </div>
            {fields.map((field, index) => (
                <div key={field.id} className="mb-6 p-4 border border-gray-200 rounded-lg dark:border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-medium dark:text-white">Address {index + 1}</h4>
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        >
                            Remove
                        </button>
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                        {addressFields.map((addressField) => (
                            <div key={addressField.name} className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor={`addresses.${index}.${addressField.name}`}
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    {addressField.label}
                                    {!addressField.required && <span className="text-gray-500 ml-1">(Optional)</span>}
                                </label>
                                <input
                                    id={`addresses.${index}.${addressField.name}`}
                                    type={addressField.type}
                                    placeholder={addressField.placeholder}
                                    className={`shadow-sm bg-gray-50 border ${
                                        errors.addresses?.[index]?.[addressField.name]
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                    } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                                    {...register(`addresses.${index}.${addressField.name}`, {
                                        required: addressField.required ? `${addressField.label} is required` : false
                                    })}
                                />
                                {errors.addresses?.[index]?.[addressField.name] && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {typeof errors.addresses[index][addressField.name] === 'object' 
                                            ? (errors.addresses[index][addressField.name] as { message?: string })?.message 
                                            : 'This field is required'}
                                    </p>
                                )}
                            </div>
                        ))}
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor={`addresses.${index}.type`}
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Address Type
                            </label>
                            <select
                                id={`addresses.${index}.type`}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                {...register(`addresses.${index}.type`)}
                            >
                                <option value="Mailing">Mailing</option>
                                <option value="Work">Work</option>
                            </select>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
} 