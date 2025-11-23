import React from 'react';

type ConfirmModalProps = {
    open: boolean;
    title?: string;
    message?: React.ReactNode;
    onConfirm: () => void;
    onCancel: () => void;
    confirmText?: string;
    declineText?: string;
};

const ConfirmModal = ({
    open,
    title = 'Confirm',
    message,
    onConfirm,
    onCancel,
    confirmText = 'Yes',
    declineText = 'No',
}: ConfirmModalProps) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" role="dialog" aria-modal="true" aria-labelledby="confirm-modal-title">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <h2 id="confirm-modal-title" className="mb-2 text-lg font-semibold dark:text-white">{title}</h2>
                {message && <div className="mb-4 text-sm text-gray-600 dark:text-gray-300">{message}</div>}
                <div className="flex justify-end space-x-2">
                    <button
                        type="button"
                        onClick={onConfirm}
                        className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700"
                    >
                        {confirmText}
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
                    >
                        {declineText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
