import { BsCheckLg } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { RiFolderReceivedLine } from "react-icons/ri";
import {
    requisitionModal,
    buttons,
  } from "@/contents/bengali";
import { userInfo } from "@/api/authentication/userInfo";
import { useRouter } from "next/router";
import { useApproveRequisition, useReceiveRequisition, useReleaseRequisition } from "../useShowRequisition";
import { useState } from "react";
import Modal from "@/components/reusable/Modal";

const { role } = userInfo();
const Actions = ({ id, status }) => {
  const router = useRouter();

  const { approveModalContent, releaseModalContent, receiveModalContent } = requisitionModal;
  const [requisitionId, setRequisitionId] = useState();

  const [approveModal, setApproveModal] = useState(false);
  const [releaseModal, setReleaseModal] = useState(false);
  const [recevieModal, setReceiveModal] = useState(false);

  const { mutate: approveRequisition, isLoading: aprvIsLoading } =
    useApproveRequisition();

  const { mutate: releaseRequisition, isLoading: rlsIsLoading } =
    useReleaseRequisition();

    const { mutate: receiveRequisition, isLoading: rcvIsLoading } =
    useReceiveRequisition();

  const approveAction = (id) => {
    approveRequisition(id);
  };
  const releaseAction = (id) => {
    releaseRequisition(id);
  };
  const receiveAction = (id) => {
    receiveRequisition(id);
  };

  const redirectAssigneePage = (id) => {
    router.push(`/requisitions/assign/${id}`);
  };
  return (
    <>
      {approveModal && (
        <Modal
          state={approveModal}
          setState={setApproveModal}
          content={approveModalContent}
          action={approveAction}
          id={requisitionId}
        />
      )}
      {releaseModal && (
        <Modal
          state={releaseModal}
          setState={setReleaseModal}
          content={releaseModalContent}
          action={releaseAction}
          id={requisitionId}
        />
      )}
      {recevieModal && (
        <Modal
          state={recevieModal}
          setState={setReceiveModal}
          content={receiveModalContent}
          action={receiveAction}
          id={requisitionId}
        />
      )}
      <div className="flex-1 px-2 flex gap-4 items-center justify-end">
        {(role === "SHOPKEEPER" ||
          role === "MANAGER" ||
          role === "SUPERADMIN") &&
          status === "APPROVED" && (
            <button
              disabled={rlsIsLoading}
                className={`flex items-center gap-1 w-[100px] md:w-auto  border px-2 py-1 rounded-md  ${rlsIsLoading ? 'bg-gray-600 text-white hover:bg-gray-500 cursor-not-allowed' : 'bg-primary-600 text-white hover:bg-primary-500 cursor-pointer'}`}
              onClick={() => {
                setReleaseModal(true);
                setRequisitionId(id);
              }}>
              <ImExit />
              {rlsIsLoading ? buttons?.loading : buttons?.release}
            </button>
          )}
        {(role === "MANAGER" || role === "SUPERADMIN") && (
          <>
            {(status === "PENDING" || status === "MODIFIED" || status === "ASSIGNED") && (
              <button
                className="flex items-center gap-1 w-[100px] md:w-auto  border px-2 py-1 rounded-md bg-primary-600 text-white hover:bg-primary-500 cursor-pointer"
                onClick={() => redirectAssigneePage(id)}>
                <MdOutlineAssignmentInd />
                {buttons?.assign}
              </button>
            )}
            {status === "ASSIGNED" && (
              <button
              disabled={aprvIsLoading}
                className={`flex items-center gap-1 w-[100px] md:w-auto  border px-2 py-1 rounded-md  ${aprvIsLoading ? 'bg-gray-600 text-white hover:bg-gray-500 cursor-not-allowed' : 'bg-primary-600 text-white hover:bg-primary-500 cursor-pointer'}`}
                onClick={() => {
                  setApproveModal(true);
                  setRequisitionId(id);
                }}>
                <BsCheckLg />
                {aprvIsLoading ? buttons?.loading : buttons?.approve}
              </button>
            )}
          </>
        )}
        {(role === "USER" ||
          role === "MANAGER" ||
          role === "SUPERADMIN") &&
          status === "RELEASED" && (
            <button
              disabled={rcvIsLoading}
                className={`flex items-center gap-1 w-[100px] md:w-auto  border px-2 py-1 rounded-md  ${rcvIsLoading ? 'bg-gray-600 text-white hover:bg-gray-500 cursor-not-allowed' : 'bg-primary-600 text-white hover:bg-primary-500 cursor-pointer'}`}
              onClick={() => {
                setReceiveModal(true);
                setRequisitionId(id);
              }}>
              <RiFolderReceivedLine />
              {rcvIsLoading ? buttons?.loading : buttons?.receive}
            </button>
          )}
      </div>
    </>
  );
};

export default Actions;
