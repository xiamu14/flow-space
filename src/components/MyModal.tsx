import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import TiptapEditor from "./TiptapEditor";
import { closeModal, useModal } from "@/dataflow/myModal";

export default function MyModal() {
  const { isOpen } = useModal();
  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={closeModal}
          __demoMode
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/80">
            <div className="flex h-full items-center justify-center p-20">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-[900px] h-full rounded-xl bg-white p-6 backdrop-blur-2xl">
                  <TiptapEditor />
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
