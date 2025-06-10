import type { Control, UseFormRegister, FieldErrors } from 'react-hook-form';
import { type FinancialKycData } from '../../types/kycTypes';
import { type UserProfileFormData } from '../../types/userTypes';

interface InvestmentProfileSectionProps {
    control: Control<UserProfileFormData & FinancialKycData>;
    register: UseFormRegister<UserProfileFormData & FinancialKycData>;
    errors: FieldErrors<UserProfileFormData & FinancialKycData>;
    isReadOnly: boolean;
}

const InvestmentProfileSection = ({ register, errors, isReadOnly }: InvestmentProfileSectionProps) => {
    return (
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold dark:text-white">Investment Profile</h3>
            </div>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="investmentProfile.experience"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Experience in financial markets
                    </label>
                    <select
                        id="investmentProfile.experience"
                        {...register('investmentProfile.experience')}
                        className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${isReadOnly ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
                        disabled={isReadOnly}
                    >
                        <option value="< 5 years">Less than 5 years</option>
                        <option value="> 5 and < 10 years">Between 5 and 10 years</option>
                        <option value="> 10 years">More than 10 years</option>
                    </select>
                    {errors.investmentProfile?.experience && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.investmentProfile.experience?.message || 'This field is required'}
                        </p>
                    )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="investmentProfile.riskTolerance"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Risk Tolerance
                    </label>
                    <select
                        id="investmentProfile.riskTolerance"
                        {...register('investmentProfile.riskTolerance')}
                        className={`shadow-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${isReadOnly ? 'bg-gray-100 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}
                        disabled={isReadOnly}
                    >
                        <option value="10%">10%</option>
                        <option value="30%">30%</option>
                        <option value="All-in">All-in</option>
                    </select>
                    {errors.investmentProfile?.riskTolerance && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.investmentProfile.riskTolerance?.message || 'This field is required'}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InvestmentProfileSection; 