// import {
//   Box,
//   Card,
//   Container,
//   HStack,
//   Heading,
//   Image,
//   Link,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import React from "react";
// import {WarningIcon} from '@chakra-ui/icons'

// function Footer() {
//   return (
//     <Container maxW={"1300px"} m={10}  gap={20}>
//     <hr/>
//        <Box>

//          <HStack display={"flex"}>
//             <Text fontSize={'2xl'} gap={5}>
//               Наше мобильное приложение доступно <br /> в AppGallery, App store и
//               Google play

//             </Text>
//              <Image
//                width={300}
//                src="https://olcha.uz/_nuxt/footer-img.745872f8.webp"
//              />
//              <Link
//                display={"flex"}
//                href="https://www.instagram.com/toliboyevv.ali"
//              >
//                <VStack>
//                  <Image
//                    src="https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg"
//                    width={100}
//                  />
//                  <Text>Instagram</Text>
//                </VStack>
//              </Link>
//              <Link display={"flex"} href="https://web.telegram.org/a/+998992794590">
//                <VStack>
//                  <Image
//                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1024px-Telegram_2019_Logo.svg.png"
//                    width={90}
//                  />
//                  <Text>Instagram</Text>
//                </VStack>
//              </Link>
//            </HStack>
//          </Box>
//     <hr/>
//     <Box display={'flex'} gap={20} m={5}>
//     <Box>
//       <Link href="/">
// <Text fontSize={'2xl'} color={'red.500'}>logo</Text>
// </Link>
// <Text fontSize={'xl'}>Телефон поддержки</Text>
// <Text fontSize={'xl'}>+998992794590</Text>
// <Link>
// <HStack>
// <WarningIcon color={'red.500'}/>
// <Text fontSize={'xl'}>Xorazm viloyati, Gurlan</Text></HStack>
// </Link>
//     </Box>
//     <Box >
//       <Link >
//       <Text fontSize={'2xl'} color={'red.500'}>Информация</Text>
//       </Link>
//       <Text fontSize={'xl'} >Вакансии</Text>
//       <Text fontSize={'xl'}>Возврат и обмен товаров</Text>
//       <Text fontSize={'xl'}>Условия рассрочки</Text>
//     </Box>
//     </Box>
//     </Container>
//   );
// }

// export default Footer;

import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  Grid,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Container
      maxW={"1400px"}
      mt={"60px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={{ sm: "center", xl: "space-around" }}
      flexWrap={"wrap"}
    >
      <Box p={5}>
        <Heading size="md" color={"#606c38"}>
          О нас
        </Heading>
        <Text py={"20px"}>Пункты выдачи</Text>
        <Text>Вакансии</Text>
      </Box>
      <Box p={5}>
        <Heading size="md" color={"#606c38"}>
          Пользователям
        </Heading>
        <Text py={"20px"}>Связаться с нами</Text>
        <Text>Вопрос - Ответ</Text>
      </Box>
      <Box p={5}>
        <Heading size="md" color={"#606c38"}>
          Для предпринимателей
        </Heading>
        <Text py={"20px"}>Продавайте на Uzum</Text>
        <Text>Вход для продавцов</Text>
      </Box>
      <Box borderRadius={5} p={"10px"}></Box>{" "}
      <Textarea placeholder="Here is a sample placeholder" />
    </Container>
  );
}

export default Footer;
