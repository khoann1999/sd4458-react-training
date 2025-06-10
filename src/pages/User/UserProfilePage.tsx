import ProfileForm from "./ProfileForm.tsx";
import { useContext } from "react";
import { AuthenticatedContext } from "../../shared/Authenticated";
import { Navigate, useParams } from "react-router-dom";

const UserProfilePage = () => {
    const { user } = useContext(AuthenticatedContext);
    const { id } = useParams();

    if (user?.role !== 'admin' && id !== user?.id.toString()) {
        return <Navigate to={`/pages/users/${user?.id}/details`} replace />;
    }

    return <ProfileForm />;
};

export default UserProfilePage;
