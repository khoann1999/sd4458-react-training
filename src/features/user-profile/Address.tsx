import { type Control, type UseFormRegister, type FieldErrors, useFieldArray } from 'react-hook-form';
import type { User, UserProfileFormData } from '../../types/userTypes';
import type { FinancialKycData } from '../../types/kycTypes';

interface AddressProps {
    register: UseFormRegister<UserProfileFormData & FinancialKycData>;
    errors: FieldErrors<UserProfileFormData & FinancialKycData>;
    control: Control<UserProfileFormData & FinancialKycData>;
    user: User;
    isReadOnly: boolean;
}

const Address = ({ register, errors, control, user, isReadOnly }: AddressProps) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'addresses'
    });

    return (
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold dark:text-white">Address Information</h3>
            </div>

            {fields.map((field, index) => (
                <div key={field.id} className="mb-6 p-4 border border-gray-200 rounded-lg dark:border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-medium dark:text-white">Address {index + 1}</h4>
                        {!isReadOnly && (
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400"
                        >
                            Remove
                        </button>
                        )}
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor={`addresses.${index}.street`}
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Street Address
                            </label>
                            <input
                                type="text"
                                id={`addresses.${index}.street`}
                                {...register(`addresses.${index}.street`)}
                                className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${isReadOnly ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
                                placeholder="Enter Street Address"
                                readOnly={isReadOnly}
                            />
                            {errors.addresses?.[index]?.street && (
                                <p className="text-red-500 text-sm mt-1">
                                    {typeof errors.addresses[index].street === 'object'
                                        ? (errors.addresses[index].street as { message?: string })?.message
                                        : 'This field is required'}
                                </p>
                            )}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor={`addresses.${index}.city`}
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                City
                            </label>
                            <input
                                type="text"
                                id={`addresses.${index}.city`}
                                {...register(`addresses.${index}.city`)}
                                className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${isReadOnly ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
                                placeholder="Enter City"
                                readOnly={isReadOnly}
                            />
                            {errors.addresses?.[index]?.city && (
                                <p className="text-red-500 text-sm mt-1">
                                    {typeof errors.addresses[index].city === 'object'
                                        ? (errors.addresses[index].city as { message?: string })?.message
                                        : 'This field is required'}
                                </p>
                            )}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor={`addresses.${index}.country`}
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Country
                            </label>
                            <input
                                type="text"
                                id={`addresses.${index}.country`}
                                {...register(`addresses.${index}.country`)}
                                className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${isReadOnly ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
                                placeholder="Enter Country"
                                readOnly={isReadOnly}
                            />
                            {errors.addresses?.[index]?.country && (
                                <p className="text-red-500 text-sm mt-1">
                                    {typeof errors.addresses[index].country === 'object'
                                        ? (errors.addresses[index].country as { message?: string })?.message
                                        : 'This field is required'}
                                </p>
                            )}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor={`addresses.${index}.postalCode`}
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Postal Code
                            </label>
                            <input
                                type="text"
                                id={`addresses.${index}.postalCode`}
                                {...register(`addresses.${index}.postalCode`)}
                                className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${isReadOnly ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
                                placeholder="Enter Postal Code"
                                readOnly={isReadOnly}
                            />
                            {errors.addresses?.[index]?.postalCode && (
                                <p className="text-red-500 text-sm mt-1">
                                    {typeof errors.addresses[index].postalCode === 'object'
                                        ? (errors.addresses[index].postalCode as { message?: string })?.message
                                        : 'This field is required'}
                                </p>
                            )}
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor={`addresses.${index}.type`}
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Address Type
                            </label>
                            <select
                                id={`addresses.${index}.type`}
                                {...register(`addresses.${index}.type`)}
                                className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${isReadOnly ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
                                disabled={isReadOnly}
                            >
                                <option value="Mailing">Mailing</option>
                                <option value="Work">Work</option>
                            </select>
                            {errors.addresses?.[index]?.type && (
                                <p className="text-red-500 text-sm mt-1">
                                    {typeof errors.addresses[index].type === 'object'
                                        ? (errors.addresses[index].type as { message?: string })?.message
                                        : 'This field is required'}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            {!isReadOnly && (
            <button
                type="button"
                onClick={() => append({ country: '', city: '', street: '', postalCode: '', type: 'Mailing' })}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Add Address
            </button>
            )}
        </div>
    );
};

export default Address; 