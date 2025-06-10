import { useFieldArray } from 'react-hook-form';
import type { Control, UseFormRegister, FieldErrors } from 'react-hook-form';
import { type FinancialKycData } from '../../types/kycTypes';
import { type UserProfileFormData } from '../../types/userTypes';

interface AssetsSectionProps {
    control: Control<UserProfileFormData & FinancialKycData>;
    register: UseFormRegister<UserProfileFormData & FinancialKycData>;
    errors: FieldErrors<UserProfileFormData & FinancialKycData>;
    isReadOnly: boolean;
}

const AssetsSection = ({ control, register, errors, isReadOnly }: AssetsSectionProps) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'assets'
    });

    return (
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold dark:text-white">Assets Information</h3>
            </div>

            {fields.map((field, index) => (
                <div key={field.id} className="mb-6 p-4 border border-gray-200 rounded-lg dark:border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-medium dark:text-white">Asset {index + 1}</h4>
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
                        <div className="col-span-6 sm:col-span-2">
                            <label
                                htmlFor={`assets.${index}.type`}
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Type
                            </label>
                            <select
                                id={`assets.${index}.type`}
                                {...register(`assets.${index}.type`)}
                                className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${isReadOnly ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
                                disabled={isReadOnly}
                            >
                                <option value="Bond">Bond</option>
                                <option value="Liquidity">Liquidity</option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                            <label
                                htmlFor={`assets.${index}.amount`}
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Amount
                            </label>
                            <input
                                type="number"
                                id={`assets.${index}.amount`}
                                {...register(`assets.${index}.amount`)}
                                className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${isReadOnly ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
                                readOnly={isReadOnly}
                            />
                            {errors.assets?.[index]?.amount && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.assets[index].amount?.message || 'This field is required'}
                                </p>
                            )}
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                            <label
                                htmlFor={`assets.${index}.currency`}
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Currency
                            </label>
                            <input
                                type="text"
                                id={`assets.${index}.currency`}
                                {...register(`assets.${index}.currency`)}
                                className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${isReadOnly ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
                                readOnly={isReadOnly}
                            />
                            {errors.assets?.[index]?.currency && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.assets[index].currency?.message || 'This field is required'}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            {!isReadOnly && (
            <button
                type="button"
                onClick={() => append({ type: 'Bond', amount: 0, currency: 'USD' })}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Add Asset
            </button>
            )}
        </div>
    );
};

export default AssetsSection; 