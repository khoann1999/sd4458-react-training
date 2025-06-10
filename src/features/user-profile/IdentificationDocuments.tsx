import { type FieldErrors, type UseFormRegister, type Control } from 'react-hook-form';
import { type FinancialKycData } from '../../types/kycTypes';
import { type User, type UserProfileFormData } from '../../types/userTypes';

interface IdentificationDocumentsProps {
    register: UseFormRegister<UserProfileFormData & FinancialKycData>;
    errors: FieldErrors<UserProfileFormData & FinancialKycData>;
    control: Control<UserProfileFormData & FinancialKycData>;
    user: User;
}

export default function IdentificationDocuments({ register, errors, control, user }: IdentificationDocumentsProps) {
    return (
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Identification Documents</h3>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="identificationDocuments.idDocument"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        ID Document
                    </label>
                    <input
                        id="identificationDocuments.idDocument"
                        type="file"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        {...register('identificationDocuments.idDocument')}
                    />
                    {errors.identificationDocuments?.idDocument && (
                        <p className="text-red-500 text-sm mt-1">
                            {typeof errors.identificationDocuments.idDocument === 'object'
                                ? (errors.identificationDocuments.idDocument as { message?: string })?.message
                                : 'This field is required'}
                        </p>
                    )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="identificationDocuments.driverLicense"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Driver's License
                    </label>
                    <input
                        id="identificationDocuments.driverLicense"
                        type="file"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        {...register('identificationDocuments.driverLicense')}
                    />
                    {errors.identificationDocuments?.driverLicense && (
                        <p className="text-red-500 text-sm mt-1">
                            {typeof errors.identificationDocuments.driverLicense === 'object'
                                ? (errors.identificationDocuments.driverLicense as { message?: string })?.message
                                : 'This field is required'}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
} 