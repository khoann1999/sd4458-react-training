import type { Control, UseFormRegister, FieldErrors } from "react-hook-form";
import { type User, type UserProfileFormData } from "../../types/userTypes";
import { type FinancialKycData } from "../../types/kycTypes";
import Address from "../../components/Users/user-profile/Address";
import BasicInformation from "../../components/Users/user-profile/BasicInformation";
import ContactInformation from "../../components/Users/user-profile/ContactInformation";
import EmploymentInformation from "../../components/Users/user-profile/EmploymentInformation";
import IdentificationDocuments from "../../components/Users/user-profile/IdentificationDocuments";


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
