import type { Control, UseFormRegister, FieldErrors } from "react-hook-form";
import { type User, type UserProfileFormData } from "../../types/userTypes";
import { type FinancialKycData } from "../../types/kycTypes";
import BasicInformation from "../../features/user-profile/BasicInformation";
import Address from "../../features/user-profile/Address";
import ContactInformation from "../../features/user-profile/ContactInformation";
import EmploymentInformation from "../../features/user-profile/EmploymentInformation";
import IdentificationDocuments from "../../features/user-profile/IdentificationDocuments";

interface GeneralSectionProps {
  register: UseFormRegister<UserProfileFormData & FinancialKycData>;
  errors: FieldErrors<UserProfileFormData & FinancialKycData>;
  control: Control<UserProfileFormData & FinancialKycData>;
  user: User;
  isReadOnly: boolean;
}

const GeneralSection = ({
  register,
  errors,
  control,
  user,
  isReadOnly,
}: GeneralSectionProps) => {
  return (
    <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <h3 className="mb-4 text-xl font-semibold dark:text-white">
        Basic Information
      </h3>
      <div className="space-y-6">
        <BasicInformation
          register={register}
          errors={errors}
          control={control}
          user={user}
          isReadOnly={isReadOnly}
        />
        <Address
          register={register}
          errors={errors}
          control={control}
          user={user}
          isReadOnly={isReadOnly}
        />
        <ContactInformation
          register={register}
          errors={errors}
          control={control}
          user={user}
          isReadOnly={isReadOnly}
        />
        <IdentificationDocuments
          register={register}
          errors={errors}
          control={control}
          user={user}
          isReadOnly={isReadOnly}
        />
        <EmploymentInformation
          register={register}
          errors={errors}
          control={control}
          user={user}
          isReadOnly={isReadOnly}
        />
      </div>
    </div>
  );
};

export default GeneralSection;
