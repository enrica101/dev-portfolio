import React from "react";

const ContactInfoDialog = () => {
  return (
    <dialog
      id="contactModal"
      className=" modal modal-bottom sm:modal-middle"
      data-theme="pastel"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg" data-theme="pastel">
          Let's get in touch!
        </h3>
        <p className="py-4" data-theme="pastel">
          Email Address:{" "}
          <a
            href="mailto:enricajcarpena@gmail.com"
            className="text-neutral font-bold"
          >
            enricajcarpena@gmail.com
          </a>
        </p>
        <div className="modal-action" data-theme="pastel">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <a className="btn btn-accent" href="#">
              Close
            </a>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ContactInfoDialog;
