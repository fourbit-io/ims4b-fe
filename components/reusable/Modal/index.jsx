import { buttonText } from "@/contents/bengali";

const Modal = ({ state, setState, content, action, id }) => {
  const { proceed, cancel } = buttonText;
  return state ? (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0  w-full h-full bg-black opacity-40"
        onClick={() => setState(false)}></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="mt-3">
            <div className="mt-2 text-center">
              <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                {content}
              </p>
            </div>
          </div>
          <div className="items-center gap-2 mt-3 sm:flex">
            {action && (
              <button
                className="w-full mt-2 p-2.5 flex-1 text-white bg-primary-600 rounded-md outline-none ring-offset-2 ring-primary-600 focus:ring-2 hover:bg-primary-500"
                onClick={() => {setState(false); action(id);}}>
                {proceed}
              </button>
            )}
            <button
              className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border hover:bg-red-600 hover:text-white"
              onClick={() => setState(false)}>
              {cancel}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;
