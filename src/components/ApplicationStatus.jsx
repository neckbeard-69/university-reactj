function ApplicationStatus({
    isSuccessful,
    chooseTextLanguage,
    setStatus,
    setIsOpen,
    message,
}) {
    return (
        <dialog className="popup">
            <span className="heading-200">
                {isSuccessful
                    ? chooseTextLanguage(
                          "Applied successfully!",
                          "!تم التقديم بنجاح"
                      )
                    : chooseTextLanguage(
                          "Unsuccessful!",
                          "!فشل في عملية التقديم"
                      )}
            </span>
            <p className="popup-content">
                {!isSuccessful
                    ? message
                    : chooseTextLanguage(
                          "Application submitted successfully, waiting for review",
                          "تم التقديم بنجاح، يرجى انتظار المراجعة"
                      )}
            </p>
            <Icon type={isSuccessful ? "success" : "failure"} />
            <button
                onClick={() => {
                    setStatus(null);
                    setIsOpen(false);
                }}
            >
                {chooseTextLanguage("Close", "إغلاق")}
            </button>
        </dialog>
    );
}

function Icon({ type }) {
    return type === "success" ? (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="popup-icon success"
        >
            <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
            />
        </svg>
    ) : (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="popup-icon failure"
        >
            <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default ApplicationStatus;
