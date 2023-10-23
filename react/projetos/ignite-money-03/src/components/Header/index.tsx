import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { useState } from 'react'

export function Header() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] =
    useState<boolean>(false)

  function transactionModalOpenChange(value: boolean) {
    setIsTransactionModalOpen(value)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root
          open={isTransactionModalOpen}
          onOpenChange={transactionModalOpenChange}
        >
          {/* o asChild vai pegar o child e "copiar" */}
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal
            onTransactionModalOpenChange={transactionModalOpenChange}
          />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
