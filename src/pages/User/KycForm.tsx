import { useEffect, useContext } from 'react';
import type { UserProfileFormData } from '../../types/userTypes.ts';
import GeneralSection from './GeneralSection.tsx';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useGetUserById } from '../../hooks/userUser.tsx';
import IncomeSection from '../../features/user-profile-kyc/IncomeSection';
import AssetsSection from '../../features/user-profile-kyc/AssetsSection';
import LiabilitiesSection from '../../features/user-profile-kyc/LiabilitiesSection';
import WealthSourceSection from '../../features/user-profile-kyc/WealthSourceSection';
import InvestmentProfileSection from '../../features/user-profile-kyc/InvestmentProfileSection';
import NetWorthSection from '../../features/user-profile-kyc/NetWorthSection';
import type { FinancialKycData } from '../../types/kycTypes.ts';
import { AuthenticatedContext } from '../../shared/Authenticated';

const KycForm = () => {
    const params = useParams();
    const { id } = params;
    const { user, loading, error } = useGetUserById(id || '');
    const { user: currentUser } = useContext(AuthenticatedContext);
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<UserProfileFormData & FinancialKycData>({
        defaultValues: {
            incomes: [],
            assets: [],
            liabilities: [],
            wealthSources: [],
            investmentProfile: {
                experience: '< 5 years',
                riskTolerance: '10%'
            }
        }
    });

    useEffect(() => {
        if (user) {
            reset({
                basicInfo: {
                    firstName: user.firstName || '',
                    lastName: user.lastName || '',
                    birthDate: user.birthDate || '',
                    age: user.age || 0
                },
                addresses: user.address ? [{
                    country: user.address.country,
                    city: user.address.city,
                    street: user.address.address,
                    postalCode: user.address.postalCode,
                    type: 'Mailing'
                }] : [],
                phones: user.phone ? [{
                    number: user.phone,
                    type: 'Personal',
                    preferred: true
                }] : [],
                emails: user.email ? [{
                    email: user.email
                }] : [],
                employment: user.company ? [{
                    name: user.company.name,
                    fromYear: '',
                    toYear: ''
                }] : [],
                identificationDocuments: {
                    idDocument: undefined,
                    driverLicense: undefined
                },
                // Initialize financial KYC data
                incomes: [],
                assets: [],
                liabilities: [],
                wealthSources: [],
                investmentProfile: {
                    experience: '< 5 years',
                    riskTolerance: '10%'
                }
            });
        }
    }, [user, reset]);

    const onSubmit = async (data: UserProfileFormData & FinancialKycData) => {
        try {
            // Here you would typically make an API call to update the user data
            console.log('Submitted data:', data);
            // After successful submission, you could show a success message
            // and/or navigate to another page
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error (show error message, etc.)
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>No user found</div>;
    const isReadOnly = currentUser?.role === 'admin';

    return (
        <div className="grid grid-cols-1 px-4 pt-6 xl:gap-4 dark:bg-gray-900">
            <form onSubmit={handleSubmit(onSubmit)}>
                <GeneralSection register={register} errors={errors} control={control} user={user} isReadOnly={isReadOnly} />

                <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <h3 className="mb-4 text-xl font-semibold dark:text-white">KYC information</h3>
                    <div className="space-y-6">
                        <IncomeSection control={control} register={register} errors={errors} isReadOnly={isReadOnly} />
                        <AssetsSection control={control} register={register} errors={errors} isReadOnly={isReadOnly} />
                        <LiabilitiesSection control={control} register={register} errors={errors} isReadOnly={isReadOnly} />
                        <WealthSourceSection control={control} register={register} errors={errors} isReadOnly={isReadOnly} />
                        <NetWorthSection control={control} isReadOnly={isReadOnly} />
                        <InvestmentProfileSection control={control} register={register} errors={errors} isReadOnly={isReadOnly} />
                    </div>
                </div>

                <div className="col-span-6 sm:col-full mt-4">
                    <button
                        disabled={isSubmitting || isReadOnly}
                        className="text-white bg-blue-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-50 disabled:cursor-not-allowed"
                        type="submit">
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default KycForm;
