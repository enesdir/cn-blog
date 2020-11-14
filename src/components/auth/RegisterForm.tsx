import * as Yup from 'yup'

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { UserSignupMutation, UserSignupMutationVariables } from '@graphql/generated'

import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Link from '@app/components/common/Link'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useAuthDispatch } from '@app/contexts/authContext'
import { useFormik } from 'formik'
import { useMutation } from '@apollo/client'
import { userSignupMutation } from '@graphql/auth/mutation/userSignup'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    submitButton: {
      margin: `${theme.spacing(4)}px 0`,
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
    registerHead: {
      marginBottom: theme.spacing(2),
      textAlign: 'center',
      paddingTop: '3%',
    },

    loginButton: {
      marginTop: theme.spacing(2),
    },
    helpMessage: {
      marginTop: theme.spacing(2),
    },
  })
)
const registerSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  name: Yup.string().required(),
  surname: Yup.string().required(),
  password: Yup.string().min(4).required(),
})

function RegisterForm() {
  const [userSignup, { error, client }] = useMutation<
    UserSignupMutation,
    UserSignupMutationVariables
  >(userSignupMutation)
  const { signUp } = useAuthDispatch()
  const classes = useStyles()
  const form = useFormik({
    validationSchema: registerSchema,
    initialValues: {
      email: '',
      name: '',
      surname: '',
      password: '',
    },
    initialErrors: {
      email: '',
      name: '',
      surname: '',
      password: '',
    },
    onSubmit: async (values, actions) => {
      actions.setSubmitting(true)
      try {
        await client.resetStore()
        const res = await userSignup({
          variables: {
            ...values,
          },
        })
        if (res && res.data.userSignup) {
          const token = res.data?.userSignup.token ?? null
          signUp(token)
        }
      } catch (error) {
        console.log(error.message)
      }
      actions.setSubmitting(false)
    },
  })

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.registerHead} variant="h5">
        Register
      </Typography>
      <Divider />
      <form onSubmit={form.handleSubmit} className="w-11/12 max-w-lg py-8 mx-auto space-y-4">
        <FormControl disabled={form.isSubmitting} fullWidth margin="normal" variant="outlined">
          <input
            className="w-full px-2 py-1 border border-gray-400 rounded"
            onChange={form.handleChange}
            value={form.values.email}
            placeholder="Email"
            type="text"
            name="email"
            id="email"
            autoComplete="email"
          />
        </FormControl>
        <FormControl disabled={form.isSubmitting} fullWidth margin="normal" variant="outlined">
          <input
            className="w-full px-2 py-1 border border-gray-400 rounded"
            onChange={form.handleChange}
            value={form.values.name}
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            autoComplete="name"
          />
        </FormControl>
        <FormControl disabled={form.isSubmitting} fullWidth margin="normal" variant="outlined">
          <input
            className="w-full px-2 py-1 border border-gray-400 rounded"
            onChange={form.handleChange}
            value={form.values.surname}
            type="text"
            placeholder="Surname"
            name="surname"
            id="surname"
            autoComplete="surname"
          />
        </FormControl>
        <FormControl disabled={form.isSubmitting} fullWidth margin="normal" variant="outlined">
          <input
            className="w-full px-2 py-1 border border-gray-400 rounded"
            onChange={form.handleChange}
            value={form.values.password}
            type="text"
            placeholder="Password"
            name="password"
            id="password"
            autoComplete="new-password"
          />
        </FormControl>

        {error && (
          <Typography variant="caption" color="error">
            {error.message}
          </Typography>
        )}
        <Button
          disabled={!form.isValid || form.isSubmitting}
          className={classes.loginButton}
          fullWidth
          type="submit"
          aria-label="Enter"
          variant="contained"
          color="secondary"
          size="large"
        >
          Register
        </Button>
      </form>
      <Grid container>
        <Grid item xs>
          <Typography className={classes.helpMessage} variant="caption" align="center">
            <Link href="/" variant="body2">
              Cancel
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.helpMessage} variant="caption" align="center">
            <Link href="/auth/login" variant="body2">
              {'Have you already account? Log In'}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default RegisterForm
