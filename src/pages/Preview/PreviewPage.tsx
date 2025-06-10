// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React, { useCallback } from 'react';
import { useGetUsers } from '../../hooks/userUser.tsx';
import type { User } from '../../types/userTypes.ts';

const PreviewPage = () => {
    const navigate = useNavigate();
    const { users, loading, error, limit, skip, total, fetchUsers } = useGetUsers();

    const handlePreviousPage = useCallback(() => {
        if (skip > 1) {
            fetchUsers(skip - limit, limit);
        }
    }, [skip, limit, fetchUsers]);

    const handleNextPage = useCallback(() => {
        if (skip + limit <= total) {
            fetchUsers(skip + limit, limit);
        }
    }, [skip, limit, total, fetchUsers]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const editUser = (id: string) => {
        navigate(`/pages/users/${id}/edit`);
    }

    return (
        <React.Fragment>
            <div
                className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
                <div className="w-full mb-1">
                    <div className="mb-4">
                        <nav className="flex mb-5" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                                <li className="inline-flex items-center">
                                    <a href="#"
                                        className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                                        <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                        </svg>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        <span className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500"
                                            aria-current="page">Preview Page</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">All users</h1>
                    </div>
                    <div className="sm:flex">
                        <div
                            className="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                            <form className="lg:pr-3" action="#" method="GET">
                                <label htmlFor="users-search" className="sr-only">Search</label>
                                <div className="relative mt-1 lg:w-64 xl:w-96">
                                    <input type="text" name="email" id="users-search"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Search for users" />
                                </div>
                            </form>
                        </div>
                        <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                            <button type="button" data-modal-target="add-user-modal" data-modal-toggle="add-user-modal"
                                className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                Add user
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col"
                                            className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Name
                                        </th>
                                        <th scope="col"
                                            className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Status
                                        </th>
                                        <th scope="col"
                                            className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Date
                                        </th>
                                        <th scope="col"
                                            className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    {
                                        users?.map((user: User) => (
                                            <tr key={user.id} className="hover:bg-gray-100 dark:hover:bg-gray-700" >
                                                <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400" onClick={() => editUser(user.id)}>
                                                    {user.firstName} {user.lastName}
                                                </td>
                                                <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div className="flex items-center">
                                                        <div
                                                            className={`h-2.5 w-2.5 rounded-full mr-2 ${user.status === 'Active' ? 'bg-green-400' : 'bg-red-500'
                                                                }`}
                                                        ></div>
                                                        {user.status}
                                                    </div>
                                                </td>
                                                <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {user.country}
                                                </td>

                                                <td className="p-4 space-x-2 whitespace-nowrap">
                                                    <button onClick={() => editUser(user.id)}
                                                        type="button"
                                                        data-modal-target="edit-user-modal"
                                                        data-modal-toggle="edit-user-modal"
                                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                    >
                                                        <svg
                                                            className="w-4 h-4 mr-2"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                                clipRule="evenodd"
                                                            ></path>
                                                        </svg>
                                                        Approve
                                                    </button>
                                                    <button
                                                        type="button"
                                                        data-modal-target="delete-user-modal"
                                                        data-modal-toggle="delete-user-modal"
                                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                                                    >
                                                        <svg
                                                            className="w-4 h-4 mr-2"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                clipRule="evenodd"
                                                            ></path>
                                                        </svg>
                                                        Reject
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center mb-4 sm:mb-0">
                    <button
                        onClick={handlePreviousPage}
                        disabled={skip <= 1}
                        className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={skip + limit >= total}
                        className="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span
                        className="font-semibold text-gray-900 dark:text-white">{skip}-{Math.min(skip + limit - 1, total)}</span> of <span
                            className="font-semibold text-gray-900 dark:text-white">{total}</span></span>
                </div>
                <div className="flex items-center space-x-3">
                    <button
                        onClick={handlePreviousPage}
                        disabled={skip <= 1}
                        className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg
                            className="w-5 h-5 mr-1 -ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        Previous
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={skip + limit >= total}
                        className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                        <svg className="w-5 h-5 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PreviewPage;