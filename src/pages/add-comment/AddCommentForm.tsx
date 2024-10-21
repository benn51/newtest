import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Flex,Input
  } from '@chakra-ui/react'
  import { Field, Form, Formik } from 'formik';

const AddCommentForm = () => {
  return (
    <Flex>
         <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          <Field name='name' >
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>First name</FormLabel>
                <Input {...field} placeholder='name' />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
    </Flex>
  )
}

export default AddCommentForm
