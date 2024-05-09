"use client"
import { createContext, ReactNode, useState } from 'react'
import { TicketProps } from '@/utils/ticket.type'
import { CustomerProps } from '@/utils/customer.type'
import { ModalTicket } from '@/components/modal'

interface ModalContextData{
  visible: boolean;
  hanleMotalVisible: () => void;
  ticket: TicketInfo | undefined;
  setDetailTicket: (detail: TicketInfo) => void;
}

interface TicketInfo {
  ticket: TicketProps,
  customer: CustomerProps | null;
}

export const ModalContext = createContext({} as ModalContextData)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisble] = useState(false);
  const [ticket, setTicket] =  useState<TicketInfo>()

  function hanleMotalVisible(){
    setVisble(!visible)
  }

  function setDetailTicket(detail: TicketInfo){
      setTicket(detail);
  }


  return(
     <ModalContext.Provider value={{ visible, hanleMotalVisible, ticket, setDetailTicket }}>
      {visible && <ModalTicket />}
       {children}
     </ModalContext.Provider> 
  )
} 