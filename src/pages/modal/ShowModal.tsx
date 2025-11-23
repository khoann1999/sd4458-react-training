import React from 'react';

type ShowModalProps = {
  open: boolean;
  title?: string;
  message?: React.ReactNode;
  onClose: () => void;
  okText?: string;
  cancelText?: string;
  showCancel?: boolean;
};

const ShowModal = ({
  open,
  title = 'Success',
  message,
  onClose,
  okText = 'Close',
  cancelText = 'Cancel',
  showCancel = false,
}: ShowModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        {message && <div className="mb-4 text-sm text-gray-600 dark:text-gray-300">{message}</div>}
        <div className="flex justify-end space-x-2">
          {showCancel && (
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
            >
              {cancelText}
            </button>
          )}
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            {okText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowModal;
