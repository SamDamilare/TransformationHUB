// // import React, { useState } from "react";
// // import {
// //   Box,
// //   Button,
// //   Checkbox,
// //   FormControl,
// //   FormLabel,
// //   FormErrorMessage,
// //   Heading,
// //   Input,
// //   Stack,
// //   Select,
// //   HStack,
// //   Text,
// //   useToast,
// // } from "@chakra-ui/react";
// // import { Country, State } from "country-state-city";

// // // 1. Define form value types
// // interface FormValues {
// //   name: string;
// //   dob: string;
// //   country: string;
// //   state: string;
// //   phone: string;
// //   bornAgain: boolean;
// //   occupation: string;
// //   expectedShift: string;
// //   agreeTerms: boolean;
// // }

// // type FormErrors = Partial<Record<keyof FormValues, string>>;

// // export default function CohortRegistrationForm() {
// //   const toast = useToast();

// //   const [values, setValues] = useState<FormValues>({
// //     name: "",
// //     dob: "",
// //     country: "NG", // Default to Nigeria
// //     state: "",
// //     phone: "",
// //     bornAgain: false,
// //     occupation: "",
// //     expectedShift: "",
// //     agreeTerms: false,
// //   });

// //   const [errors, setErrors] = useState<FormErrors>({});
// //   const [submitting, setSubmitting] = useState(false);

// //   const countries = Country.getAllCountries();
// //   const states = values.country ? State.getStatesOfCountry(values.country) : [];

// //   const validate = () => {
// //     const e: FormErrors = {};

// //     if (!values.bornAgain)
// //       e.bornAgain = "You must confirm if you are born again.";
// //     if (!values.agreeTerms)
// //       e.agreeTerms = "You must agree to the terms to proceed.";

// //     if (!values.name.trim()) e.name = "Please enter your name.";
// //     if (!values.dob) e.dob = "Please provide your date of birth.";
// //     if (!values.country) e.country = "Please select your country.";
// //     if (!values.state) e.state = "Please select your state.";

// //     // phone validation (must be digits, min length 10)
// //     if (!values.phone.trim()) e.phone = "Please provide your phone number.";
// //     else if (!/^\d{10,15}$/.test(values.phone.trim()))
// //       e.phone = "Phone number must be 10–15 digits only.";

// //     if (!values.occupation.trim())
// //       e.occupation = "Please provide your occupation.";
// //     if (!values.expectedShift.trim())
// //       e.expectedShift = "Please select expected shift / prayer request.";

// //     setErrors(e);
// //     return Object.keys(e).length === 0;
// //   };

// //   const formatDMY = (isoDate: string) => {
// //     if (!isoDate) return "";
// //     const [y, m, d] = isoDate.split("-");
// //     return `${d}/${m}/${y}`;
// //   };

// //   const handleChange =
// //     (field: keyof FormValues) =>
// //     (
// //       e: React.ChangeEvent<
// //         HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
// //       >
// //     ) => {
// //       const value =
// //         field === "bornAgain" || field === "agreeTerms"
// //           ? (e.target as HTMLInputElement).checked
// //           : e.target.value;
// //       setValues((v) => ({ ...v, [field]: value }));
// //       setErrors((err) => ({ ...err, [field]: undefined }));
// //     };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!validate()) {
// //       toast({
// //         title: "Please fix the errors.",
// //         status: "error",
// //         duration: 3000,
// //         isClosable: true,
// //       });
// //       return;
// //     }

// //     setSubmitting(true);

// //     const payload = {
// //       name: values.name.trim(),
// //       dob: formatDMY(values.dob),
// //       country: values.country,
// //       state: values.state,
// //       phone: values.phone.trim(),
// //       bornAgain: !!values.bornAgain,
// //       occupation: values.occupation.trim(),
// //       expectedShift: values.expectedShift.trim(),
// //       agreedToTermsAt: new Date().toISOString(),
// //     };

// //     await new Promise((r) => setTimeout(r, 600));
// //     setSubmitting(false);

// //     toast({
// //       title: "Registration submitted.",
// //       description: "Thank you — we've recorded your submission.",
// //       status: "success",
// //       duration: 4000,
// //       isClosable: true,
// //     });

// //     console.log("Cohort registration payload:", payload);

// //     setValues({
// //       name: "",
// //       dob: "",
// //       country: "NG",
// //       state: "",
// //       phone: "",
// //       bornAgain: false,
// //       occupation: "",
// //       expectedShift: "",
// //       agreeTerms: false,
// //     });
// //   };

// //   return (
// //     <Box
// //       maxW="680px"
// //       mx="auto"
// //       p={6}
// //       borderWidth={1}
// //       borderRadius="lg"
// //       boxShadow="sm"
// //     >
// //       <Heading mb={4} size="lg">
// //         TRANSFORMATION HUB
// //       </Heading>

// //       <form onSubmit={handleSubmit}>
// //         <Stack spacing={4}>
// //           <FormControl isRequired isInvalid={!!errors.name}>
// //             <FormLabel>Name</FormLabel>
// //             <Input
// //               placeholder="Full name"
// //               value={values.name}
// //               onChange={handleChange("name")}
// //             />
// //             <FormErrorMessage>{errors.name}</FormErrorMessage>
// //           </FormControl>

// //           <FormControl isRequired isInvalid={!!errors.dob}>
// //             <FormLabel>Date of birth (d/m/y)</FormLabel>
// //             <Input
// //               type="date"
// //               value={values.dob}
// //               onChange={handleChange("dob")}
// //             />
// //             <FormErrorMessage>{errors.dob}</FormErrorMessage>
// //           </FormControl>

// //           <FormControl isRequired isInvalid={!!errors.country}>
// //             <FormLabel>Country</FormLabel>
// //             <Select
// //               placeholder="Select country"
// //               value={values.country}
// //               onChange={handleChange("country")}
// //             >
// //               {countries.map((c) => (
// //                 <option key={c.isoCode} value={c.isoCode}>
// //                   {c.name}
// //                 </option>
// //               ))}
// //             </Select>
// //             <FormErrorMessage>{errors.country}</FormErrorMessage>
// //           </FormControl>

// //           <FormControl isRequired isInvalid={!!errors.state}>
// //             <FormLabel>State</FormLabel>
// //             <Select
// //               placeholder="Select state"
// //               value={values.state}
// //               onChange={handleChange("state")}
// //             >
// //               {states.map((s) => (
// //                 <option key={s.isoCode} value={s.name}>
// //                   {s.name}
// //                 </option>
// //               ))}
// //             </Select>
// //             <FormErrorMessage>{errors.state}</FormErrorMessage>
// //           </FormControl>

// //           <FormControl isRequired isInvalid={!!errors.phone}>
// //             <FormLabel>Phone Number</FormLabel>
// //             <Input
// //               type="tel"
// //               placeholder="e.g. 08012345678"
// //               value={values.phone}
// //               onChange={handleChange("phone")}
// //             />
// //             <FormErrorMessage>{errors.phone}</FormErrorMessage>
// //           </FormControl>

// //           <FormControl isRequired isInvalid={!!errors.occupation}>
// //             <FormLabel>Occupation</FormLabel>
// //             <Input
// //               placeholder="e.g. Student, Teacher, Developer"
// //               value={values.occupation}
// //               onChange={handleChange("occupation")}
// //             />
// //             <FormErrorMessage>{errors.occupation}</FormErrorMessage>
// //           </FormControl>

// //           <FormControl isRequired isInvalid={!!errors.bornAgain}>
// //             <HStack justify="space-between">
// //               <FormLabel mb={0}>Born again?</FormLabel>
// //               <Checkbox
// //                 isChecked={values.bornAgain}
// //                 onChange={handleChange("bornAgain")}
// //               />
// //             </HStack>
// //             <FormErrorMessage>{errors.bornAgain}</FormErrorMessage>
// //           </FormControl>

// //           <FormControl isRequired isInvalid={!!errors.expectedShift}>
// //             <FormLabel>Expected shift / Prayer request</FormLabel>
// //             <Select
// //               placeholder="Select shift"
// //               value={values.expectedShift}
// //               onChange={handleChange("expectedShift")}
// //             >
// //               <option value="Finance">Finance</option>
// //               <option value="Marital Shift">Marital Shift</option>
// //               <option value="Fruitfulness">Fruitfulness</option>
// //             </Select>
// //             <FormErrorMessage>{errors.expectedShift}</FormErrorMessage>
// //           </FormControl>

// //           <FormControl isRequired isInvalid={!!errors.agreeTerms}>
// //             <HStack alignItems="flex-start" spacing={3}>
// //               <Checkbox
// //                 isChecked={values.agreeTerms}
// //                 onChange={handleChange("agreeTerms")}
// //               />
// //               <Text fontSize="sm">
// //                 I agree that weekly assignments will be attached to recommended
// //                 books, that prophetic meetings must be attended once a month
// //                 (physical or online allowed), and that I may be removed from the
// //                 cohort if I fail to respond within a given week.
// //               </Text>
// //             </HStack>
// //             <FormErrorMessage>{errors.agreeTerms}</FormErrorMessage>
// //           </FormControl>

// //           <Stack direction={"row"} spacing={3} justify="flex-end">
// //             <Button
// //               variant="outline"
// //               onClick={() =>
// //                 setValues({
// //                   name: "",
// //                   dob: "",
// //                   country: "NG",
// //                   state: "",
// //                   phone: "",
// //                   bornAgain: false,
// //                   occupation: "",
// //                   expectedShift: "",
// //                   agreeTerms: false,
// //                 })
// //               }
// //             >
// //               Reset
// //             </Button>
// //             <Button colorScheme="blue" type="submit" isLoading={submitting}>
// //               Submit
// //             </Button>
// //           </Stack>
// //         </Stack>
// //       </form>
// //     </Box>
// //   );
// // }

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Checkbox,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Heading,
//   Input,
//   Stack,
//   Select,
//   HStack,
//   Text,
//   useToast,
// } from "@chakra-ui/react";
// import { Country, State } from "country-state-city";
// import { createClient } from "@supabase/supabase-js";

// // ✅ Supabase client
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// // 1. Define form value types
// interface FormValues {
//   name: string;
//   dob: string;
//   country: string;
//   state: string;
//   phone: string;
//   bornAgain: boolean;
//   occupation: string;
//   expectedShift: string;
//   agreeTerms: boolean;
// }

// type FormErrors = Partial<Record<keyof FormValues, string>>;

// export default function CohortRegistrationForm() {
//   const toast = useToast();

//   const [values, setValues] = useState<FormValues>({
//     name: "",
//     dob: "",
//     country: "NG", // Default to Nigeria
//     state: "",
//     phone: "",
//     bornAgain: false,
//     occupation: "",
//     expectedShift: "",
//     agreeTerms: false,
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [submitting, setSubmitting] = useState(false);

//   const countries = Country.getAllCountries();
//   const states = values.country ? State.getStatesOfCountry(values.country) : [];

//   const validate = () => {
//     const e: FormErrors = {};

//     if (!values.bornAgain)
//       e.bornAgain = "You must confirm if you are born again.";
//     if (!values.agreeTerms)
//       e.agreeTerms = "You must agree to the terms to proceed.";

//     if (!values.name.trim()) e.name = "Please enter your name.";
//     if (!values.dob) e.dob = "Please provide your date of birth.";
//     if (!values.country) e.country = "Please select your country.";
//     if (!values.state) e.state = "Please select your state.";

//     // phone validation (must be digits, min length 10)
//     if (!values.phone.trim()) e.phone = "Please provide your phone number.";
//     else if (!/^\d{10,15}$/.test(values.phone.trim()))
//       e.phone = "Phone number must be 10–15 digits only.";

//     if (!values.occupation.trim())
//       e.occupation = "Please provide your occupation.";
//     if (!values.expectedShift.trim())
//       e.expectedShift = "Please select expected shift / prayer request.";

//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const handleChange =
//     (field: keyof FormValues) =>
//     (
//       e: React.ChangeEvent<
//         HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//       >
//     ) => {
//       const value =
//         field === "bornAgain" || field === "agreeTerms"
//           ? (e.target as HTMLInputElement).checked
//           : e.target.value;
//       setValues((v) => ({ ...v, [field]: value }));
//       setErrors((err) => ({ ...err, [field]: undefined }));
//     };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validate()) {
//       toast({
//         title: "Please fix the errors.",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }

//     setSubmitting(true);

//     // ✅ Match your Supabase schema
//     const payload = {
//       name: values.name.trim(),
//       dob: values.dob, // Supabase DATE accepts YYYY-MM-DD
//       country: values.country,
//       state: values.state,
//       number: values.phone.trim(), // maps to numeric column
//       occupation: values.occupation.trim(),
//       expected_shift: values.expectedShift.trim(),
//     };

//     const { error } = await supabase
//       .from("Transformation Hub")
//       .insert([payload]);

//     setSubmitting(false);

//     if (error) {
//       console.error("Supabase insert error:", error);
//       toast({
//         title: "Error submitting form",
//         description: error.message,
//         status: "error",
//         duration: 4000,
//         isClosable: true,
//       });
//       return;
//     }

//     toast({
//       title: "Registration submitted.",
//       description: "Thank you — we've recorded your submission.",
//       status: "success",
//       duration: 4000,
//       isClosable: true,
//     });

//     // Reset form
//     setValues({
//       name: "",
//       dob: "",
//       country: "NG",
//       state: "",
//       phone: "",
//       bornAgain: false,
//       occupation: "",
//       expectedShift: "",
//       agreeTerms: false,
//     });
//   };

//   return (
//     <Box
//       maxW="680px"
//       mx="auto"
//       p={6}
//       borderWidth={1}
//       borderRadius="lg"
//       boxShadow="sm"
//     >
//       <Heading mb={4} size="lg">
//         TRANSFORMATION HUB
//       </Heading>

//       <form onSubmit={handleSubmit}>
//         <Stack spacing={4}>
//           <FormControl isRequired isInvalid={!!errors.name}>
//             <FormLabel>Name</FormLabel>
//             <Input
//               placeholder="Full name"
//               value={values.name}
//               onChange={handleChange("name")}
//             />
//             <FormErrorMessage>{errors.name}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.dob}>
//             <FormLabel>Date of birth</FormLabel>
//             <Input
//               type="date"
//               value={values.dob}
//               onChange={handleChange("dob")}
//             />
//             <FormErrorMessage>{errors.dob}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.country}>
//             <FormLabel>Country</FormLabel>
//             <Select
//               placeholder="Select country"
//               value={values.country}
//               onChange={handleChange("country")}
//             >
//               {countries.map((c) => (
//                 <option key={c.isoCode} value={c.isoCode}>
//                   {c.name}
//                 </option>
//               ))}
//             </Select>
//             <FormErrorMessage>{errors.country}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.state}>
//             <FormLabel>State</FormLabel>
//             <Select
//               placeholder="Select state"
//               value={values.state}
//               onChange={handleChange("state")}
//             >
//               {states.map((s) => (
//                 <option key={s.isoCode} value={s.name}>
//                   {s.name}
//                 </option>
//               ))}
//             </Select>
//             <FormErrorMessage>{errors.state}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.phone}>
//             <FormLabel>Phone Number</FormLabel>
//             <Input
//               type="tel"
//               placeholder="e.g. 08012345678"
//               value={values.phone}
//               onChange={handleChange("phone")}
//             />
//             <FormErrorMessage>{errors.phone}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.occupation}>
//             <FormLabel>Occupation</FormLabel>
//             <Input
//               placeholder="e.g. Student, Teacher, Developer"
//               value={values.occupation}
//               onChange={handleChange("occupation")}
//             />
//             <FormErrorMessage>{errors.occupation}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.bornAgain}>
//             <HStack justify="space-between">
//               <FormLabel mb={0}>Born again?</FormLabel>
//               <Checkbox
//                 isChecked={values.bornAgain}
//                 onChange={handleChange("bornAgain")}
//               />
//             </HStack>
//             <FormErrorMessage>{errors.bornAgain}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.expectedShift}>
//             <FormLabel>Expected shift / Prayer request</FormLabel>
//             <Select
//               placeholder="Select shift"
//               value={values.expectedShift}
//               onChange={handleChange("expectedShift")}
//             >
//               <option value="Finance">Finance</option>
//               <option value="Marital Shift">Marital Shift</option>
//               <option value="Fruitfulness">Fruitfulness</option>
//             </Select>
//             <FormErrorMessage>{errors.expectedShift}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.agreeTerms}>
//             <HStack alignItems="flex-start" spacing={3}>
//               <Checkbox
//                 isChecked={values.agreeTerms}
//                 onChange={handleChange("agreeTerms")}
//               />
//               <Text fontSize="sm">
//                 I agree that weekly assignments will be attached to recommended
//                 books, that prophetic meetings must be attended once a month
//                 (physical or online allowed), and that I may be removed from the
//                 cohort if I fail to respond within a given week.
//               </Text>
//             </HStack>
//             <FormErrorMessage>{errors.agreeTerms}</FormErrorMessage>
//           </FormControl>

//           <Stack direction={"row"} spacing={3} justify="flex-end">
//             <Button
//               variant="outline"
//               onClick={() =>
//                 setValues({
//                   name: "",
//                   dob: "",
//                   country: "NG",
//                   state: "",
//                   phone: "",
//                   bornAgain: false,
//                   occupation: "",
//                   expectedShift: "",
//                   agreeTerms: false,
//                 })
//               }
//             >
//               Reset
//             </Button>
//             <Button colorScheme="blue" type="submit" isLoading={submitting}>
//               Submit
//             </Button>
//           </Stack>
//         </Stack>
//       </form>
//     </Box>
//   );
// }

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Checkbox,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Heading,
//   Input,
//   Stack,
//   Select,
//   HStack,
//   Text,
//   useToast,
// } from "@chakra-ui/react";
// import { Country, State } from "country-state-city";
// import supabase from "../supabase/supabase"; // ✅ You already handle Supabase import

// interface FormValues {
//   name: string;
//   dob: string;
//   country: string;
//   state: string;
//   phone: string;
//   bornAgain: boolean;
//   occupation: string;
//   expectedShift: string;
//   agreeTerms: boolean;
// }

// type FormErrors = Partial<Record<keyof FormValues, string>>;

// export default function CohortRegistrationForm() {
//   const toast = useToast();

//   const [values, setValues] = useState<FormValues>({
//     name: "",
//     dob: "",
//     country: "NG",
//     state: "",
//     phone: "",
//     bornAgain: false,
//     occupation: "",
//     expectedShift: "",
//     agreeTerms: false,
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [submitting, setSubmitting] = useState(false);

//   const countries = Country.getAllCountries();
//   const states = values.country ? State.getStatesOfCountry(values.country) : [];

//   const validate = () => {
//     const e: FormErrors = {};

//     if (!values.bornAgain)
//       e.bornAgain = "You must confirm if you are born again.";
//     if (!values.agreeTerms)
//       e.agreeTerms = "You must agree to the terms to proceed.";

//     if (!values.name.trim()) e.name = "Please enter your name.";
//     if (!values.dob) e.dob = "Please provide your date of birth.";
//     if (!values.country) e.country = "Please select your country.";
//     if (!values.state) e.state = "Please select your state.";

//     if (!values.phone.trim()) e.phone = "Please provide your phone number.";
//     else if (!/^\d{10,15}$/.test(values.phone.trim()))
//       e.phone = "Phone number must be 10–15 digits only.";

//     if (!values.occupation.trim())
//       e.occupation = "Please provide your occupation.";
//     if (!values.expectedShift.trim())
//       e.expectedShift = "Please select expected shift / prayer request.";

//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const handleChange =
//     (field: keyof FormValues) =>
//     (
//       e: React.ChangeEvent<
//         HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//       >
//     ) => {
//       const value =
//         field === "bornAgain" || field === "agreeTerms"
//           ? (e.target as HTMLInputElement).checked
//           : e.target.value;
//       setValues((v) => ({ ...v, [field]: value }));
//       setErrors((err) => ({ ...err, [field]: undefined }));
//     };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validate()) {
//       toast({
//         title: "Please fix the errors.",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }

//     setSubmitting(true);

//     const payload = {
//       name: values.name.trim(),
//       dob: values.dob,
//       country: values.country,
//       state: values.state,
//       number: values.phone.trim(), // ✅ maps to DB column
//       occupation: values.occupation.trim(),
//       expected_shift: values.expectedShift.trim(),
//     };

//     const { error } = await supabase
//       .from("Transformation Hub")
//       .insert([payload]);

//     setSubmitting(false);

//     if (error) {
//       console.error("Supabase insert error:", error);
//       toast({
//         title: "Error submitting form",
//         description: error.message,
//         status: "error",
//         duration: 4000,
//         isClosable: true,
//       });
//       return;
//     }

//     toast({
//       title: "Registration submitted.",
//       description: "Thank you — we've recorded your submission.",
//       status: "success",
//       duration: 4000,
//       isClosable: true,
//     });

//     setValues({
//       name: "",
//       dob: "",
//       country: "NG",
//       state: "",
//       phone: "",
//       bornAgain: false,
//       occupation: "",
//       expectedShift: "",
//       agreeTerms: false,
//     });
//   };

//   return (
//     <Box
//       maxW="680px"
//       mx="auto"
//       p={6}
//       borderWidth={1}
//       borderRadius="lg"
//       boxShadow="sm"
//     >
//       <Heading mb={4} size="lg">
//         TRANSFORMATION HUB
//       </Heading>

//       <form onSubmit={handleSubmit}>
//         <Stack spacing={4}>
//           <FormControl isRequired isInvalid={!!errors.name}>
//             <FormLabel>Name</FormLabel>
//             <Input
//               placeholder="Full name"
//               value={values.name}
//               onChange={handleChange("name")}
//             />
//             <FormErrorMessage>{errors.name}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.dob}>
//             <FormLabel>Date of birth</FormLabel>
//             <Input
//               type="date"
//               value={values.dob}
//               onChange={handleChange("dob")}
//             />
//             <FormErrorMessage>{errors.dob}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.country}>
//             <FormLabel>Country</FormLabel>
//             <Select
//               placeholder="Select country"
//               value={values.country}
//               onChange={handleChange("country")}
//             >
//               {countries.map((c) => (
//                 <option key={c.isoCode} value={c.isoCode}>
//                   {c.name}
//                 </option>
//               ))}
//             </Select>
//             <FormErrorMessage>{errors.country}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.state}>
//             <FormLabel>State</FormLabel>
//             <Select
//               placeholder="Select state"
//               value={values.state}
//               onChange={handleChange("state")}
//             >
//               {states.map((s) => (
//                 <option key={s.isoCode} value={s.name}>
//                   {s.name}
//                 </option>
//               ))}
//             </Select>
//             <FormErrorMessage>{errors.state}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.phone}>
//             <FormLabel>Phone Number</FormLabel>
//             <Input
//               type="tel"
//               placeholder="e.g. 08012345678"
//               value={values.phone}
//               onChange={handleChange("phone")}
//             />
//             <FormErrorMessage>{errors.phone}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.occupation}>
//             <FormLabel>Occupation</FormLabel>
//             <Input
//               placeholder="e.g. Student, Teacher, Developer"
//               value={values.occupation}
//               onChange={handleChange("occupation")}
//             />
//             <FormErrorMessage>{errors.occupation}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.bornAgain}>
//             <HStack justify="space-between">
//               <FormLabel mb={0}>Born again?</FormLabel>
//               <Checkbox
//                 isChecked={values.bornAgain}
//                 onChange={handleChange("bornAgain")}
//               />
//             </HStack>
//             <FormErrorMessage>{errors.bornAgain}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.expectedShift}>
//             <FormLabel>Expected shift / Prayer request</FormLabel>
//             <Select
//               placeholder="Select shift"
//               value={values.expectedShift}
//               onChange={handleChange("expectedShift")}
//             >
//               <option value="Finance">Finance</option>
//               <option value="Marital Shift">Marital Shift</option>
//               <option value="Fruitfulness">Fruitfulness</option>
//             </Select>
//             <FormErrorMessage>{errors.expectedShift}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.agreeTerms}>
//             <HStack alignItems="flex-start" spacing={3}>
//               <Checkbox
//                 isChecked={values.agreeTerms}
//                 onChange={handleChange("agreeTerms")}
//               />
//               <Text fontSize="sm">
//                 I agree that weekly assignments will be attached to recommended
//                 books, that prophetic meetings must be attended once a month
//                 (physical or online allowed), and that I may be removed from the
//                 cohort if I fail to respond within a given week.
//               </Text>
//             </HStack>
//             <FormErrorMessage>{errors.agreeTerms}</FormErrorMessage>
//           </FormControl>

//           <Stack direction={"row"} spacing={3} justify="flex-end">
//             <Button
//               variant="outline"
//               onClick={() =>
//                 setValues({
//                   name: "",
//                   dob: "",
//                   country: "NG",
//                   state: "",
//                   phone: "",
//                   bornAgain: false,
//                   occupation: "",
//                   expectedShift: "",
//                   agreeTerms: false,
//                 })
//               }
//             >
//               Reset
//             </Button>
//             <Button colorScheme="blue" type="submit" isLoading={submitting}>
//               Submit
//             </Button>
//           </Stack>
//         </Stack>
//       </form>
//     </Box>
//   );
// }

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Checkbox,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Heading,
//   Input,
//   Stack,
//   Select,
//   HStack,
//   Text,
//   useToast,
// } from "@chakra-ui/react";
// import { Country, State } from "country-state-city";
// import supabase from "../supabase/supabase"; // ✅ You already handle Supabase import

// interface FormValues {
//   name: string;
//   dob: string;
//   country: string;
//   state: string;
//   phone: string;
//   bornAgain: boolean;
//   occupation: string;
//   expectedShift: string;
//   agreeTerms: boolean;
// }

// type FormErrors = Partial<Record<keyof FormValues, string>>;

// export default function CohortRegistrationForm() {
//   const toast = useToast();

//   const [values, setValues] = useState<FormValues>({
//     name: "",
//     dob: "",
//     country: "NG",
//     state: "",
//     phone: "",
//     bornAgain: false,
//     occupation: "",
//     expectedShift: "",
//     agreeTerms: false,
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [submitting, setSubmitting] = useState(false);

//   const countries = Country.getAllCountries();
//   const states = values.country ? State.getStatesOfCountry(values.country) : [];

//   // compute max date allowed (18 years ago from today)
//   const today = new Date();
//   const maxDob = new Date(
//     today.getFullYear() - 18,
//     today.getMonth(),
//     today.getDate()
//   )
//     .toISOString()
//     .split("T")[0];

//   const validate = () => {
//     const e: FormErrors = {};

//     if (!values.bornAgain)
//       e.bornAgain = "You must confirm if you are born again.";
//     if (!values.agreeTerms)
//       e.agreeTerms = "You must agree to the terms to proceed.";

//     if (!values.name.trim()) e.name = "Please enter your name.";

//     if (!values.dob) {
//       e.dob = "Please provide your date of birth.";
//     } else {
//       const dobDate = new Date(values.dob);
//       const age = today.getFullYear() - dobDate.getFullYear();
//       const hasHadBirthdayThisYear =
//         today.getMonth() > dobDate.getMonth() ||
//         (today.getMonth() === dobDate.getMonth() &&
//           today.getDate() >= dobDate.getDate());
//       const actualAge = hasHadBirthdayThisYear ? age : age - 1;

//       if (actualAge < 18) {
//         e.dob = "You must be at least 18 years old to register.";
//       }
//     }

//     if (!values.country) e.country = "Please select your country.";
//     if (!values.state) e.state = "Please select your state.";

//     if (!values.phone.trim()) e.phone = "Please provide your phone number.";
//     else if (!/^\d{10,15}$/.test(values.phone.trim()))
//       e.phone = "Phone number must be 10–15 digits only.";

//     if (!values.occupation.trim())
//       e.occupation = "Please provide your occupation.";
//     if (!values.expectedShift.trim())
//       e.expectedShift = "Please select expected shift / prayer request.";

//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const handleChange =
//     (field: keyof FormValues) =>
//     (
//       e: React.ChangeEvent<
//         HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//       >
//     ) => {
//       const value =
//         field === "bornAgain" || field === "agreeTerms"
//           ? (e.target as HTMLInputElement).checked
//           : e.target.value;
//       setValues((v) => ({ ...v, [field]: value }));
//       setErrors((err) => ({ ...err, [field]: undefined }));
//     };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validate()) {
//       toast({
//         title: "Please fix the errors.",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }

//     setSubmitting(true);

//     const payload = {
//       name: values.name.trim(),
//       dob: values.dob,
//       country: values.country,
//       state: values.state,
//       number: values.phone.trim(), // ✅ maps to DB column
//       occupation: values.occupation.trim(),
//       born_again: values.bornAgain,
//       expected_shift: values.expectedShift.trim(),
//     };

//     const { error } = await supabase
//       .from("Transformation Hub")
//       .insert([payload]);

//     setSubmitting(false);

//     if (error) {
//       console.error("Supabase insert error:", error);
//       toast({
//         title: "Error submitting form",
//         description: error.message,
//         status: "error",
//         duration: 4000,
//         isClosable: true,
//       });
//       return;
//     }

//     toast({
//       title: "Registration submitted.",
//       description: "Thank you — we've recorded your submission.",
//       status: "success",
//       duration: 4000,
//       isClosable: true,
//     });

//     setValues({
//       name: "",
//       dob: "",
//       country: "NG",
//       state: "",
//       phone: "",
//       bornAgain: false,
//       occupation: "",
//       expectedShift: "",
//       agreeTerms: false,
//     });
//   };

//   return (
//     <Box
//       maxW="680px"
//       mx="auto"
//       p={6}
//       borderWidth={1}
//       borderRadius="lg"
//       boxShadow="sm"
//     >
//       <Heading mb={4} size="lg">
//         TRANSFORMATION HUB
//       </Heading>

//       <form onSubmit={handleSubmit}>
//         <Stack spacing={4}>
//           <FormControl isRequired isInvalid={!!errors.name}>
//             <FormLabel>Name</FormLabel>
//             <Input
//               placeholder="Full name"
//               value={values.name}
//               onChange={handleChange("name")}
//             />
//             <FormErrorMessage>{errors.name}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.dob}>
//             <FormLabel>Date of birth</FormLabel>
//             <Input
//               type="date"
//               value={values.dob}
//               max={maxDob} // ✅ restricts selection to 18+ only
//               onChange={handleChange("dob")}
//             />
//             <FormErrorMessage>{errors.dob}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.country}>
//             <FormLabel>Country</FormLabel>
//             <Select
//               placeholder="Select country"
//               value={values.country}
//               onChange={handleChange("country")}
//             >
//               {countries.map((c) => (
//                 <option key={c.isoCode} value={c.isoCode}>
//                   {c.name}
//                 </option>
//               ))}
//             </Select>
//             <FormErrorMessage>{errors.country}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.state}>
//             <FormLabel>State</FormLabel>
//             <Select
//               placeholder="Select state"
//               value={values.state}
//               onChange={handleChange("state")}
//             >
//               {states.map((s) => (
//                 <option key={s.isoCode} value={s.name}>
//                   {s.name}
//                 </option>
//               ))}
//             </Select>
//             <FormErrorMessage>{errors.state}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.phone}>
//             <FormLabel>Phone Number</FormLabel>
//             <Input
//               type="number"
//               placeholder="e.g. 08012345678"
//               value={values.phone}
//               onChange={handleChange("phone")}
//             />
//             <FormErrorMessage>{errors.phone}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.occupation}>
//             <FormLabel>Occupation</FormLabel>
//             <Input
//               placeholder="e.g. Student, Teacher, Developer"
//               value={values.occupation}
//               onChange={handleChange("occupation")}
//             />
//             <FormErrorMessage>{errors.occupation}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.bornAgain}>
//             <FormLabel>Born again?</FormLabel>
//             <Select
//               placeholder="Select Yes or No"
//               value={
//                 values.bornAgain
//                   ? "yes"
//                   : values.bornAgain === false
//                   ? "no"
//                   : ""
//               }
//               onChange={(e) =>
//                 setValues((v) => ({
//                   ...v,
//                   bornAgain: e.target.value === "yes",
//                 }))
//               }
//             >
//               <option value="yes">Yes</option>
//               <option value="no">No</option>
//             </Select>
//             <FormErrorMessage>{errors.bornAgain}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.expectedShift}>
//             <FormLabel>Expected shift / Prayer request</FormLabel>
//             <Select
//               placeholder="Select shift"
//               value={values.expectedShift}
//               onChange={handleChange("expectedShift")}
//             >
//               <option value="Finance">Finance</option>
//               <option value="Marital Shift">Marital Shift</option>
//               <option value="Fruitfulness">Fruitfulness</option>
//             </Select>
//             <FormErrorMessage>{errors.expectedShift}</FormErrorMessage>
//           </FormControl>

//           <FormControl isRequired isInvalid={!!errors.agreeTerms}>
//             <HStack alignItems="flex-start" spacing={3}>
//               <Checkbox
//                 isChecked={values.agreeTerms}
//                 onChange={handleChange("agreeTerms")}
//               />
//               <Text fontSize="sm">
//                 I agree that weekly assignments will be attached to recommended
//                 books, that prophetic meetings must be attended once a month
//                 (physical or online allowed), and that I may be removed from the
//                 cohort if I fail to respond within a given week.
//               </Text>
//             </HStack>
//             <FormErrorMessage>{errors.agreeTerms}</FormErrorMessage>
//           </FormControl>

//           <Stack direction={"row"} spacing={3} justify="flex-end">
//             <Button
//               variant="outline"
//               onClick={() =>
//                 setValues({
//                   name: "",
//                   dob: "",
//                   country: "NG",
//                   state: "",
//                   phone: "",
//                   bornAgain: false,
//                   occupation: "",
//                   expectedShift: "",
//                   agreeTerms: false,
//                 })
//               }
//             >
//               Reset
//             </Button>
//             <Button colorScheme="blue" type="submit" isLoading={submitting}>
//               Submit
//             </Button>
//           </Stack>
//         </Stack>
//       </form>
//     </Box>
//   );
// }
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Stack,
  Select,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom"; // ✅ added
import supabase from "../supabase/supabase";

interface FormValues {
  name: string;
  dob: string;
  country: string;
  state: string;
  phone: string;
  bornAgain: string;
  occupation: string;
  expectedShift: string;
  agreeTerms: boolean;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

export default function CohortRegistrationForm() {
  const toast = useToast();
  const navigate = useNavigate(); // ✅ hook

  const [values, setValues] = useState<FormValues>({
    name: "",
    dob: "",
    country: "NG",
    state: "",
    phone: "",
    bornAgain: "",
    occupation: "",
    expectedShift: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const countries = Country.getAllCountries();
  const states = values.country ? State.getStatesOfCountry(values.country) : [];

  const today = new Date();
  const maxDob = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  )
    .toISOString()
    .split("T")[0];

  const validate = () => {
    const e: FormErrors = {};

    if (!values.agreeTerms)
      e.agreeTerms = "You must agree to the terms to proceed.";
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.dob) {
      e.dob = "Please provide your date of birth.";
    } else {
      const dobDate = new Date(values.dob);
      const age = today.getFullYear() - dobDate.getFullYear();
      const hasHadBirthdayThisYear =
        today.getMonth() > dobDate.getMonth() ||
        (today.getMonth() === dobDate.getMonth() &&
          today.getDate() >= dobDate.getDate());
      const actualAge = hasHadBirthdayThisYear ? age : age - 1;

      if (actualAge < 18) {
        e.dob = "You must be at least 18 years old to register.";
      }
    }
    if (!values.country) e.country = "Please select your country.";
    if (!values.state) e.state = "Please select your state.";
    if (!values.phone.trim()) e.phone = "Please provide your phone number.";
    else if (!/^\d{10,15}$/.test(values.phone.trim()))
      e.phone = "Phone number must be 10–15 digits only.";
    if (!values.occupation.trim())
      e.occupation = "Please provide your occupation.";
    if (!values.expectedShift.trim())
      e.expectedShift = "Please select expected shift / prayer request.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange =
    (field: keyof FormValues) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const value =
        field === "agreeTerms"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setValues((v) => ({ ...v, [field]: value }));
      setErrors((err) => ({ ...err, [field]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast({
        title: "Please fix the errors.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setSubmitting(true);

    const payload = {
      name: values.name.trim(),
      dob: values.dob,
      country: values.country,
      state: values.state,
      number: values.phone.trim(),
      born_again: values.bornAgain || null,
      occupation: values.occupation.trim(),
      expected_shift: values.expectedShift.trim(),
    };

    const { error } = await supabase
      .from("Transformation Hub")
      .insert([payload]);

    setSubmitting(false);

    if (error) {
      toast({
        title: "Error submitting form",
        description: error.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: "Registration submitted.",
      description: "Thank you — we've recorded your submission.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    // ✅ Redirect back home after success (wait a sec so toast shows)
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <Box
      maxW="680px"
      mx="auto"
      p={6}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="sm"
    >
      <Heading mb={4} size="lg">
        TRANSFORMATION HUB
      </Heading>

      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired isInvalid={!!errors.name}>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Full name"
              value={values.name}
              onChange={handleChange("name")}
            />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.dob}>
            <FormLabel>Date of birth</FormLabel>
            <Input
              type="date"
              value={values.dob}
              max={maxDob}
              onChange={handleChange("dob")}
            />
            <FormErrorMessage>{errors.dob}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.country}>
            <FormLabel>Country</FormLabel>
            <Select
              placeholder="Select country"
              value={values.country}
              onChange={handleChange("country")}
            >
              {countries.map((c) => (
                <option key={c.isoCode} value={c.isoCode}>
                  {c.name}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.country}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.state}>
            <FormLabel>State</FormLabel>
            <Select
              placeholder="Select state"
              value={values.state}
              onChange={handleChange("state")}
            >
              {states.map((s) => (
                <option key={s.isoCode} value={s.name}>
                  {s.name}
                </option>
              ))}
            </Select>
            <FormErrorMessage>{errors.state}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.phone}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="number"
              placeholder="e.g. 08012345678"
              value={values.phone}
              onChange={handleChange("phone")}
            />
            <FormErrorMessage>{errors.phone}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.occupation}>
            <FormLabel>Occupation</FormLabel>
            <Input
              placeholder="e.g. Student, Teacher, Developer"
              value={values.occupation}
              onChange={handleChange("occupation")}
            />
            <FormErrorMessage>{errors.occupation}</FormErrorMessage>
          </FormControl>

          {/* Born Again Dropdown (optional) */}
          <FormControl>
            <FormLabel>Born again?</FormLabel>
            <Select
              placeholder="Select Yes or No"
              value={values.bornAgain}
              onChange={handleChange("bornAgain")}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Select>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.expectedShift}>
            <FormLabel>Expected shift / Prayer request</FormLabel>
            <Select
              placeholder="Select shift"
              value={values.expectedShift}
              onChange={handleChange("expectedShift")}
            >
              <option value="Finance">Finance</option>
              <option value="Marital Shift">Marital Shift</option>
              <option value="Fruitfulness">Fruitfulness</option>
            </Select>
            <FormErrorMessage>{errors.expectedShift}</FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.agreeTerms}>
            <HStack alignItems="flex-start" spacing={3}>
              <input
                type="checkbox"
                checked={values.agreeTerms}
                onChange={handleChange("agreeTerms")}
              />
              <Text fontSize="sm">
                I agree that weekly assignments will be attached to recommended
                books, that prophetic meetings must be attended once a month
                (physical or online allowed), and that I may be removed from the
                cohort if I fail to respond within a given week.
              </Text>
            </HStack>
            <FormErrorMessage>{errors.agreeTerms}</FormErrorMessage>
          </FormControl>

          <Stack direction={"row"} spacing={3} justify="flex-end">
            <Button
              variant="outline"
              onClick={() =>
                setValues({
                  name: "",
                  dob: "",
                  country: "NG",
                  state: "",
                  phone: "",
                  bornAgain: "",
                  occupation: "",
                  expectedShift: "",
                  agreeTerms: false,
                })
              }
            >
              Reset
            </Button>
            <Button colorScheme="blue" type="submit" isLoading={submitting}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
}
