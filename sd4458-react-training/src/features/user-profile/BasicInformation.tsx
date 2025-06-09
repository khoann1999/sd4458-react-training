import type { Control, UseFormRegister, FieldErrors } from 'react-hook-form';
import type { UserProfileFormData } from '../../types/userTypes';
import type { FinancialKycData } from '../../types/kycTypes';
import { type User } from '../../hooks/userUser';

interface BasicInformationProps {
    register: UseFormRegister<UserProfileFormData & FinancialKycData>;
    errors: FieldErrors<UserProfileFormData & FinancialKycData>;
    control: Control<UserProfileFormData & FinancialKycData>;
    user: User;
}

const BasicInformation = ({ register, errors, user }: BasicInformationProps) => {
    return (
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold dark:text-white">Basic Information</h3>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input
                        type="text"
                        id="firstName"
                        {...register('basicInfo.firstName')}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="First name"
                    />
                    {errors.basicInfo?.firstName && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.basicInfo.firstName.message}</p>
                    )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                    <input
                        type="text"
                        id="lastName"
                        {...register('basicInfo.lastName')}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Last name"
                    />
                    {errors.basicInfo?.lastName && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.basicInfo.lastName.message}</p>
                    )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="birthDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birth Date</label>
                    <input
                        type="date"
                        id="birthDate"
                        {...register('basicInfo.birthDate')}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                    {errors.basicInfo?.birthDate && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.basicInfo.birthDate.message}</p>
                    )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                    <input
                        type="number"
                        id="age"
                        {...register('basicInfo.age')}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Age"
                    />
                    {errors.basicInfo?.age && (
                        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.basicInfo.age.message}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BasicInformation; 