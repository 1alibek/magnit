import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
const Filter = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <SearchIcon color={'gray.500'} />
      </InputLeftElement>
      <Input placeholder='Поиск' />
    </InputGroup>
  )
}

export default Filter
