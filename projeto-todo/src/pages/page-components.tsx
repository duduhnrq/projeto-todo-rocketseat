import Text from "../components/text"
import Icon from "../components/icon"
import TrashIcon from "../assets/icons/Trash-Regular.svg?react"
import CheckIcon from "../assets/icons/Check-Regular.svg?react"
import PlusIcon from "../assets/icons/Plus-Regular.svg?react"
import SpinnerIcon from "../assets/icons/spinner.svg?react"
import Badge from "../components/badge"
import Button from "../components/button"
import ButtonIcon from "../components/button-icon"
import InputText from "../components/input-text"
import InputCheckbox from "../components/input-checkbox"
import Card from "../components/card"
import Container from "../components/container"
import Skeleton from "../components/skeleton"

export default function PageComponents() {
    return (
    <Container>
      <div className="grid gap-3">
        <div>
          <Text as="h1" variant="body-sm-bold">Hello World</Text>
          <Text as="p" variant="body-md">This is a paragraph.</Text>
          <Text as="span" variant="body-md-bold">This is a bold span.</Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} />
          <Icon svg={CheckIcon} />
          <Icon svg={PlusIcon} />
          <Icon svg={SpinnerIcon} animate />
        </div>

        <div className="flex gap-1">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova Tarefa</Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={CheckIcon} variant="secondary" />
          <ButtonIcon icon={PlusIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
        </div>
        
        <div>
          <InputText />
        </div>

        <div>
          <InputCheckbox />
          <InputCheckbox loading />
        </div>

        <div>
          <Card size="md">Olá, Mundo!</Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-96" />
        </div>
      </div>
    </Container>
  )
}