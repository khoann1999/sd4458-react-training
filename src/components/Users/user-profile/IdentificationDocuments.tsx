import { type FieldErrors, type UseFormRegister, type Control } from 'react-hook-form';
import type { FinancialKycData } from '../../../types/kycTypes';
import type { UserProfileFormData, User } from '../../../types/userTypes';


interface IdentificationDocumentsProps {
    register: UseFormRegister<UserProfileFormData & FinancialKycData>;
    errors: FieldErrors<UserProfileFormData & FinancialKycData>;
    control: Control<UserProfileFormData & FinancialKycData>;
    user: User;
    isReadOnly: boolean;
}

export default function IdentificationDocuments({ register, errors, control, user, isReadOnly }: IdentificationDocumentsProps) {
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
                        placeholder="Enter ID Document"
                        {...register('identificationDocuments.idDocument')}
                        disabled={isReadOnly}
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
                        placeholder="Enter Driver's License"
                        {...register('identificationDocuments.driverLicense')}
                        disabled={isReadOnly}
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