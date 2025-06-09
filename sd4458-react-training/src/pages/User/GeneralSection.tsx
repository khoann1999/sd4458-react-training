import { type FieldErrors, type UseFormRegister, type Control } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useGetUserById, type User } from '../../hooks/userUser';
import BasicInformation from '../../features/user-profile/BasicInformation';
import ContactInformation from '../../features/user-profile/ContactInformation';
import Address from '../../features/user-profile/Address';
import Phones from '../../features/user-profile/Phones';
import IdentificationDocuments from '../../features/user-profile/IdentificationDocuments';
import EmploymentInformation from '../../features/user-profile/EmploymentInformation';
import { type UserProfileFormData } from '../../features/user-profile/types';
import { useEffect } from 'react';

interface GeneralSectionProps {
    register: UseFormRegister<UserProfileFormData>;
    errors: FieldErrors<UserProfileFormData>;
    control: Control<UserProfileFormData>;
    user: User;
}

export default function GeneralSection({ register, errors, control, user }: GeneralSectionProps) {
    return (
        <div className="space-y-6">
            <BasicInformation register={register} errors={errors} user={user} />
            <ContactInformation register={register} errors={errors} control={control} user={user} />
            <Address register={register} errors={errors} control={control} user={user} />
            <Phones register={register} errors={errors} control={control} user={user} />
            <IdentificationDocuments register={register} errors={errors} control={control} user={user} />
            <EmploymentInformation register={register} errors={errors} control={control} user={user} />
        </div>
    );
}
