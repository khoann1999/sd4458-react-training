import { useFieldArray } from 'react-hook-form';
import type { Control, UseFormRegister, FieldErrors } from 'react-hook-form';
import { type FinancialKycData } from '../../types/kycTypes';
import { type UserProfileFormData } from '../../types/userTypes';

interface LiabilitiesSectionProps {
    control: Control<UserProfileFormData & FinancialKycData>;
    register: UseFormRegister<UserProfileFormData & FinancialKycData>;
    errors: FieldErrors<UserProfileFormData & FinancialKycData>;
}

const LiabilitiesSection = ({ control, register, errors }: LiabilitiesSectionProps) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'liabilities'
    });

    return (
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold dark:text-white">Liabilities Information</h3>
            </div>

            {fields.map((field, index) => (
                <div key={field.id} className="mb-6 p-4 border border-gray-200 rounded-lg dark:border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-medium dark:text-white">Liability {index + 1}</h4>
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400"
                        >
                            Remove
                        </button>
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-2">
                            <label
                                htmlFor={`liabilities.${index}.type`}
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Type
                            </label>
                            <select
                                id={`liabilities.${index}.type`}
                                {...register(`liabilities.${index}.type`)}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            >
                                <option value="Personal Loan">Personal Loan</option>
                                <option value="Real Estate Loan">Real Estate Loan</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                            <label
                                htmlFor={`liabilities.${index}.amount`}
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Amount
                            </label>
                            <input
                                type="number"
                                id={`liabilities.${index}.amount`}
                                {...register(`liabilities.${index}.amount`)}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                            {errors.liabilities?.[index]?.amount && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.liabilities[index].amount?.message || 'This field is required'}
                                </p>
                            )}
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                            <label
                                htmlFor={`liabilities.${index}.currency`}
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Currency
                            </label>
                            <input
                                type="text"
                                id={`liabilities.${index}.currency`}
                                {...register(`liabilities.${index}.currency`)}
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                            {errors.liabilities?.[index]?.currency && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.liabilities[index].currency?.message || 'This field is required'}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            <button
                type="button"
                onClick={() => append({ type: 'Personal Loan', amount: 0, currency: 'USD' })}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Add Liability
            </button>
        </div>
    );
};

export default LiabilitiesSection; 