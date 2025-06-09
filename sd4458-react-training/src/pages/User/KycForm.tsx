import { useEffect } from 'react';
import type { UserProfileFormData } from '../../features/user-profile/types.ts';
import GeneralSection from './GeneralSection.tsx';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useGetUserById } from '../../hooks/userUser.tsx';

const KycForm = () => {
    const params = useParams();
    const { id } = params;
    const { user, loading, error } = useGetUserById(id || '');
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<UserProfileFormData>();

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
                }
            });
        }
    }, [user, reset]);

    const onSubmit = async (data: UserProfileFormData) => {
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
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                 <GeneralSection register={register} errors={errors} control={control} user={user} />

                <div
                    className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <h3 className="mb-4 text-xl font-semibold dark:text-white">KYC information</h3>
                    <div className="grid grid-cols-6 gap-6">

                    </div>
                </div>
                <div className="col-span-6 sm:col-full mt-4">
                    <button
                        disabled={isSubmitting}
                        className="text-white bg-blue-400 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-50 disabled:cursor-not-allowed"
                        type="submit">
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </>
    );
}

export default KycForm;
