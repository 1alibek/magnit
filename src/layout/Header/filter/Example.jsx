import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Button, useColorMode } from "@chakra-ui/react"

function Example() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button onClick={toggleColorMode}  variant={"ghost"} >
         {colorMode === 'dark'? <SunIcon width={'20px'} height={'20px'} />:<MoonIcon width={'20px'} height={'20px'}/>}
        </Button>
      </header>
    )
  }
  export default Example 