import type { Control, UseFormRegister, FieldErrors } from 'react-hook-form';
import { type User, type UserProfileFormData } from '../../types/userTypes';
import { type FinancialKycData } from '../../types/kycTypes';
import BasicInformation from '../../features/user-profile/BasicInformation';
import Address from '../../features/user-profile/Address';
import ContactInformation from '../../features/user-profile/ContactInformation';
import EmploymentInformation from '../../features/user-profile/EmploymentInformation';

interface GeneralSectionProps {
    register: UseFormRegister<UserProfileFormData & FinancialKycData>;
    errors: FieldErrors<UserProfileFormData & FinancialKycData>;
    control: Control<UserProfileFormData & FinancialKycData>;
    user: User;
}

const GeneralSection = ({ register, errors, control, user }: GeneralSectionProps) => {
    return (
        <div className="space-y-6">
            <BasicInformation register={register} errors={errors} control={control} user={user} />
            <Address register={register} errors={errors} control={control} user={user} />
            <ContactInformation register={register} errors={errors} control={control} user={user} />
            <EmploymentInformation register={register} errors={errors} control={control} user={user} />
        </div>
    );
};

export default GeneralSection;
