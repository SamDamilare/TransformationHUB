// import { Box, Button, Image, Text } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

// const App = () => {
//   const navigate = useNavigate();

//   return (
//     <Box
//       w="100vw"
//       h="100vh"
//       bgImage="url('https://res.cloudinary.com/dktrwqio1/image/upload/v1756471752/NYRadio/KCM/door-leading-magical-world_2_swxn87.jpg')"
//       bgSize="cover"
//       bgRepeat="no-repeat"
//       position="relative"
//       _before={{
//         content: '""',
//         position: "absolute",
//         top: 0,
//         left: 0,
//         w: "100%",
//         h: "100%",
//         bg: "rgba(0, 0, 0, 0.8)",
//         zIndex: 0,
//       }}
//     >
//       <Box
//         position="relative"
//         zIndex={1}
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//         h="100%"
//         color="white"
//         px={4} // padding for small screens
//         textAlign="center"
//       >
//         <Box width={"400px"} alignItems={"center"}>
//           <Image
//             src="https://res.cloudinary.com/dktrwqio1/image/upload/v1756331446/NYRadio/KCM/TTH1_iwogft.png"
//             w="600px"
//           />
//           <Text mt={2}>
//             The Transformation Hub is a catalyst process you plug into to shift
//             your level in life, by engaging the forces of knowledge and faith
//             triggeered by prophetic intervention
//             <br />
//             Please click the button below to register.
//           </Text>

//           <Button
//             w="full"
//             mt={1}
//             bg="white"
//             color="#072143"
//             _hover={{ bg: "gray.200" }}
//             onClick={() => navigate("/forms")}
//           >
//             Register
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default App;

import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  return (
    <Box
      w="100vw"
      h="100vh"
      bgImage="url('https://res.cloudinary.com/dktrwqio1/image/upload/v1756471752/NYRadio/KCM/door-leading-magical-world_2_swxn87.jpg')"
      bgSize="cover"
      bgRepeat="no-repeat"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        w: "100%",
        h: "100%",
        bg: "rgba(0, 0, 0, 0.8)",
        zIndex: 0,
      }}
    >
      <Box
        position="relative"
        zIndex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="100%"
        color="white"
        px={4}
        textAlign="center"
      >
        <Box maxW="400px" alignItems="center" mx="auto">
          <Image
            src="https://res.cloudinary.com/dktrwqio1/image/upload/v1756331446/NYRadio/KCM/TTH1_iwogft.png"
            w="400px" // ✅ smaller logo width
            h="auto"
            mx="auto"
            mb={3} // ✅ reduced bottom spacing
          />
          <Text mb={3}>
            The Transformation Hub is a catalyst process you plug into to shift
            your level in life, by engaging the forces of knowledge and faith
            triggered by prophetic intervention.
            <br />
            Please click the button below to register.
          </Text>

          <Button
            w="full"
            bg="white"
            color="#072143"
            _hover={{ bg: "gray.200" }}
            onClick={() => navigate("/forms")}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
